import * as React from 'react'
import { useContractRead, erc721ABI, useAccount } from 'wagmi'
import { useState, useEffect } from 'react'
import { BigNumber } from 'ethers'
import { abi } from '@public-assembly/curation-protocol/dist/artifacts/out/Curator.sol/Curator.json'
import { ZDK, ZDKChain, ZDKNetwork } from '@zoralabs/zdk'

export type CurationValidationProps = {
  /**
   * userAddress: send in wallet address to check nft balance of
   * curationContractAddress: address of curation contract being queried
   * network: network for the zdk to query from (1 = mainnet, 5 = goerli)
   * zoraApiKey: optional zora api key to pass into zora zdk fetch of user curation tokens
   */
  curationContractAddress: string
  network: number
  zoraApiKey?: string
}

export function useValidation({
  curationContractAddress,
  network,
  zoraApiKey,
}: CurationValidationProps) {
  const [userActiveListings, setUserActiveListings] = useState<string[]>([''])
  const { address, isConnected } = useAccount()
  // ZDK Config
  const ZDK_ENDPOINT = 'https://api.zora.co/graphql'

  const zdkGoerliNetworkInfo = {
    network: ZDKNetwork.Ethereum,
    chain: ZDKChain.Goerli,
  }

  const zdkMainnetNetworkInfo = {
    network: ZDKNetwork.Ethereum,
    chain: ZDKChain.Mainnet,
  }

  const zdkGoerliArgs = {
    endPoint: ZDK_ENDPOINT,
    networks: [zdkGoerliNetworkInfo],
    apiKey: zoraApiKey,
  }

  const zdkMainnetArgs = {
    endPoint: ZDK_ENDPOINT,
    networks: [zdkMainnetNetworkInfo],
    apiKey: zoraApiKey,
  }

  const zdk = network === 1 ? new ZDK(zdkMainnetArgs) : new ZDK(zdkGoerliArgs)

  // function that fetches the activeListings (represented as tokens) for a user from the ZORA API

  async function getCurationNFTs() {
    try {
      const zdkQueryArgs = {
        where: {
          collectionAddresses: [curationContractAddress],
          ownerAddresses: [address],
        },
        pagination: { limit: 200 },
        includeFullDetails: false,
      }

      const userTokens: string[] = []
      const resp = await zdk.tokens(zdkQueryArgs)
      resp.tokens.nodes.map((token) => {
        userTokens.push(token.token.tokenId)
      })
      setUserActiveListings(userTokens)
    } catch (err) {
      console.error(err)
    }
  }

  const {
    data: curationPassData,
    error: curationPassError,
    isLoading: curationPassLoading,
  } = useContractRead({
    addressOrName: curationContractAddress,
    contractInterface: abi,
    functionName: 'curationPass',
    enabled: isConnected,
  })

  const curationPassAddress = React.useMemo(
    () => (curationPassData ? curationPassData.toString() : ''),
    [curationPassData]
  )

  // balanceOf call on curationPass contract
  const {
    data: balanceOfData,
    error: balanceOfError,
    isLoading: balanceOfLoading,
  } = useContractRead({
    addressOrName: curationPassAddress,
    contractInterface: erc721ABI,
    functionName: 'balanceOf',
    args: [address],
    enabled: isConnected,
  })

  const userCurationPassBalance = React.useMemo(
    () => (balanceOfData ? Number(BigNumber.from(balanceOfData).toBigInt()) : 0),
    [balanceOfData]
  )

  // curation contract owner read call
  const {
    data: ownerData,
    error: ownerError,
    isLoading: ownerLoading,
  } = useContractRead({
    addressOrName: curationContractAddress,
    contractInterface: abi,
    functionName: 'owner',
    enabled: isConnected,
  })

  const curationOwnerAddress = React.useMemo(
    () => (ownerData ? ownerData.toString() : ''),
    [ownerData]
  )

  // check to see if current user is holds the curationPass
  const isCurationPassHolder = React.useMemo(
    () => (balanceOfData ? (userCurationPassBalance > 0 ? true : false) : false),
    [balanceOfData, userCurationPassBalance]
  )

  const isCurationOwner = React.useMemo(() => {
    if (address && curationOwnerAddress) {
      return ownerData
        ? curationOwnerAddress.toLowerCase() === address.toLowerCase()
          ? true
          : false
        : false
    } else {
      return false
    }
  }, [ownerData, curationOwnerAddress, address])

  // curation limit read call

  const {
    data: curationLimitData,
    error: curationLimitError,
    isLoading: curationLimitLoading,
  } = useContractRead({
    addressOrName: curationContractAddress,
    contractInterface: abi,
    functionName: 'curationLimit',
    enabled: isConnected,
  })

  const curationLimit = curationLimitData
    ? Number(BigNumber.from(curationLimitData).toBigInt())
    : 0

  // frozenAt read call

  const {
    data: frozenAtData,
    error: frozenAtError,
    isLoading: frozenAtLoading,
  } = useContractRead({
    addressOrName: curationContractAddress,
    contractInterface: abi,
    functionName: 'frozenAt',
    enabled: isConnected,
  })

  const frozenAt = React.useMemo(
    () => (frozenAtData ? Number(BigNumber.from(frozenAtData).toBigInt()) : 0),
    [frozenAtData]
  )

  // isPaused read call

  const {
    data: isPausedData,
    error: isPausedError,
    isLoading: isPausedLoading,
  } = useContractRead({
    addressOrName: curationContractAddress,
    contractInterface: abi,
    functionName: 'isPaused',
    enabled: isConnected,
  })

  const isPaused = React.useMemo(
    () => (isPausedData ? isPausedData : false),
    [isPausedData]
  )

  // fetches activeListings for user and sets it to state

  useEffect(() => {
    if (address) getCurationNFTs()
  }, [address])

  return {
    // curationPass
    curationPassAddress,
    curationPassError,
    curationPassLoading,
    userCurationPassBalance,

    // curationLimit
    curationLimitData,
    curationLimitError,
    curationLimitLoading,
    curationLimit,

    // frozenAt
    frozenAtData,
    frozenAtError,
    frozenAtLoading,
    frozenAt,

    // isPaused
    isPausedData,
    isPausedError,
    isPausedLoading,
    isPaused,

    // balanceOf
    balanceOfError,
    balanceOfLoading,
    curationOwnerAddress,

    // owner
    ownerError,
    ownerLoading,

    // validation bools
    isCurationPassHolder,
    isCurationOwner,

    // userActiveListings
    userActiveListings,
  }
}
