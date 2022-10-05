import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
import { factoryAbi } from '../protocol/abi/factoryImpl'

export type CuratorFactoryProps = {
  /**
   * Contract address of curator factory
   */
  curatorFactoryAddress: string
  /**
   * Address to set as curator contract owner
   */
  curationManagerAddress: string
  /**
   * Desired title of curator contract
   */
  curatorTitle: string
  /**
   * Desired symbol of curator contract
   */
  curatorSymbol: string
  /**
   * ERC721 contract address used to gate curator functions
   */
  tokenPassAddress: string
  /**
   * Boolean to determine whether curator functions are active on deployment
   */
  initialPause: boolean
  /**
   * Number of NFTs that can be curated at any given time
   */
  curationLimit: number
  /**
   * Contract address of the metadata renderer
   */
  metadataRenderer: string
  /**
   * ABI encoded string that passes in the initial baseURI for curator contract
   */
  metadataRendererInit: string
  /**
   * Initial NFT(s) that will be curated on deployment
   */
  initialListings: (string | number | boolean)[][]
}

export function useCurationFactory({
  curatorFactoryAddress,
  curationManagerAddress,
  curatorTitle,
  curatorSymbol,
  tokenPassAddress,
  initialPause,
  curationLimit,
  metadataRenderer,
  metadataRendererInit,
  initialListings,
}: CuratorFactoryProps) {
  const { config: deployConfig, error: deployConfigError } = usePrepareContractWrite({
    addressOrName: curatorFactoryAddress,
    contractInterface: factoryAbi,
    functionName: 'deploy',
    args: [
      curationManagerAddress,
      curatorTitle,
      curatorSymbol,
      tokenPassAddress,
      initialPause,
      curationLimit,
      metadataRenderer,
      metadataRendererInit,
      initialListings,
    ],
  })

  const {
    write: deployWrite,
    data: deployWriteData,
    error: deployWriteError,
  } = useContractWrite(deployConfig)

  const { data: txnDeployData, status: txnDeployStatus } = useWaitForTransaction({
    hash: deployWriteData?.hash,
  })

  return {
    // usePrepareContractWrite
    deployConfig,
    deployConfigError,

    // useContractWrite
    deployWrite,
    deployWriteData,
    deployWriteError,

    // useWaitForTransaction
    txnDeployData,
    txnDeployStatus,
  }
}
