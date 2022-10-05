// @ts-nocheck
import React from 'react'
import {
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import { BigNumber } from 'ethers'
import { curatorAbi } from '../protocol/abi/curatorImpl'

export type CurationFunctionsProps = {
  /**
   * curationContractAddress: Curator contract address
   * listings: listings to add to or remove from the curation contract
   * curationLimit: max number of listings that can be curated at any time. 0 = infinite
   * freezeAtUnix: unix time to freeze curation functionality (including owner) forever
   * newRendererAddress: address of new metadata renderer
   * newRendererInitializer: new metadata path. bytes 0 value for default
   * newCurationPass: address of new curation pass
   * newSortOrderIds: tokenIds to adjust sort order for
   * newSortOrderOrders: new sort order for tokenIds specified
   * listingToBurn: curation listing to remove via burn function
   * listingsToBurn: curation listings to remove via burnBatch function
   */
  curationContractAddress: string
  listings?: string | string[] | any[] | [string, number, boolean][] // Listing[] memory listings
  curationLimit?: number // uint256 newLimit
  freezeAtUnix?: number // uint256 timestamp
  newRendererAddress?: string // address _newRenderer
  newRendererInitializer?: string // bytes memory _rendererInitializer
  newCurationPass?: string // IERC721Upgradeable _curationPass
  newSortOrderIds?: number[] // uint256[] calldata tokenIds
  newSortOrderOrders?: number[] // int32[] calldata sortOrders
  listingToBurn?: number // uint256 listingId
  listingsToBurn?: number[] // uint256[] calldata listingIds
}

export function useCurationFunctions({
  curationContractAddress,
  listings,
  curationLimit,
  freezeAtUnix,
  newRendererAddress,
  newRendererInitializer,
  newCurationPass,
  newSortOrderIds,
  newSortOrderOrders,
  listingToBurn,
  listingsToBurn,
}: CurationFunctionsProps) {
  // getListings
  const {
    data: getListingsRead,
    error: getListingsError,
    isLoading: getListingsLoading,
  } = useContractRead({
    addressOrName: curationContractAddress,
    contractInterface: curatorAbi,
    functionName: 'getListings',
  })

  // TO DO - add data cleaning of getListings call to remove BigNumbers

  // const cleanedListing = (
  //   getListingsReturn: string | string[] | any[] | [string, number, boolean][]
  // ) => {
  //   console.log("getListingsReturned", getListingsReturn)
  //   const inputArray = [...getListingsReturn]
  //   const workingArray = [...inputArray]
  //   workingArray.map((listing) => {
  //     console.log("waht is listing : ", listing[1])
  //     let BigNumbered = Number(BigNumber.from(listing[1]).toBigInt())
  //     listing[1] = BigNumbered
  //   });
  //   console.log("workingArray")
  //   return workingArray
  // }

  // const getListingsCleaned = getListingsRead ? cleanedListing(getListingsRead) : ""

  // addListings
  const { config: addListingConfig, error: addListingConfigError } =
    usePrepareContractWrite({
      addressOrName: curationContractAddress,
      contractInterface: curatorAbi,
      functionName: 'addListings',
      args: [listings],
    })

  const {
    write: addListingWrite,
    data: addListingWriteData,
    error: addListingWriteError,
  } = useContractWrite(addListingConfig)

  const { data: txnAddListingData, status: txnAddListingStatus } = useWaitForTransaction({
    hash: addListingWriteData?.hash,
  })

  // burn
  const { config: burnConfig, error: burnConfigError } = usePrepareContractWrite({
    addressOrName: curationContractAddress,
    contractInterface: curatorAbi,
    functionName: 'burn',
    args: [listingToBurn],
  })

  const {
    write: burnWrite,
    data: burnWriteData,
    error: burnWriteError,
  } = useContractWrite(burnConfig)

  const { data: txnBurnData, status: txnBurnStatus } = useWaitForTransaction({
    hash: burnWriteData?.hash,
  })

  // burnBatch
  const { config: burnBatchConfig, error: burnBatchConfigError } =
    usePrepareContractWrite({
      addressOrName: curationContractAddress,
      contractInterface: curatorAbi,
      functionName: 'burnBatch',
      args: [listingsToBurn],
    })

  const {
    write: burnBatchWrite,
    data: burnBatchWriteData,
    error: burnBatchWriteError,
  } = useContractWrite(burnBatchConfig)

  const { data: txnBurnBatchData, status: txnBurnBatchStatus } = useWaitForTransaction({
    hash: burnBatchWriteData?.hash,
  })

  // updateCurationLimit
  const { config: updateCurationLimitConfig, error: updateCurationLimitConfigError } =
    usePrepareContractWrite({
      addressOrName: curationContractAddress,
      contractInterface: curatorAbi,
      functionName: 'updateCurationLimit',
      args: [curationLimit],
    })

  const {
    write: updateCurationLimitWrite,
    data: updateCurationLimitWriteData,
    error: updateCurationLimitWriteError,
  } = useContractWrite(updateCurationLimitConfig)

  const { data: txnUpdateCurationLimitData, status: txnUpdateCurationLimitStatus } =
    useWaitForTransaction({
      hash: updateCurationLimitWriteData?.hash,
    })

  // freezeAt
  const { config: freezeAtConfig, error: freezeAtConfigError } = usePrepareContractWrite({
    addressOrName: curationContractAddress,
    contractInterface: curatorAbi,
    functionName: 'freezeAt',
    args: [freezeAtUnix],
  })

  const {
    write: freezeAtWrite,
    data: freezeAtWriteData,
    error: freezeAtWriteError,
  } = useContractWrite(freezeAtConfig)

  const { data: txnFreezeAtData, status: txnFreezeAtStatus } = useWaitForTransaction({
    hash: freezeAtWriteData?.hash,
  })

  // updateRenderer
  const { config: updateRendererConfig, error: updateRendererConfigError } =
    usePrepareContractWrite({
      addressOrName: curationContractAddress,
      contractInterface: curatorAbi,
      functionName: 'updateRenderer',
      args: [newRendererAddress, newRendererInitializer],
    })

  const {
    write: updateRendererWrite,
    data: updateRendererWriteData,
    error: updateRendererWriteError,
  } = useContractWrite(updateRendererConfig)

  const { data: txnUpdateRendererData, status: txnUpdateRendererStatus } =
    useWaitForTransaction({
      hash: updateRendererWriteData?.hash,
    })

  // updateCurationPass
  const { config: updateCurationPassConfig, error: updateCurationPassConfigError } =
    usePrepareContractWrite({
      addressOrName: curationContractAddress,
      contractInterface: curatorAbi,
      functionName: 'updateCurationPass',
      args: [newCurationPass],
    })

  const {
    write: updateCurationPassWrite,
    data: updateCurationPassWriteData,
    error: updateCurationPassWriteError,
  } = useContractWrite(updateCurationPassConfig)

  const { data: txnUpdateCurationPassData, status: txnUpdateCurationPassStatus } =
    useWaitForTransaction({
      hash: updateCurationPassWriteData?.hash,
    })

  // updateSortOrder
  const { config: updateSortOrderConfig, error: updateSortOrderConfigError } =
    usePrepareContractWrite({
      addressOrName: curationContractAddress,
      contractInterface: curatorAbi,
      functionName: 'updateSortOrders',
      args: [newSortOrderIds, newSortOrderOrders],
    })

  const {
    write: updateSortOrderWrite,
    data: updateSortOrderWriteData,
    error: updateSortOrderWriteError,
  } = useContractWrite(updateSortOrderConfig)

  const { data: txnUpdateSortOrderData, status: txnUpdateSortOrderStatus } =
    useWaitForTransaction({
      hash: updateSortOrderWriteData?.hash,
    })

  // pauseCuration
  const { config: pauseCurationConfig, error: pauseCurationConfigError } =
    usePrepareContractWrite({
      addressOrName: curationContractAddress,
      contractInterface: curatorAbi,
      functionName: 'pauseCuration',
    })

  const {
    write: pauseCurationWrite,
    data: pauseCurationWriteData,
    error: pauseCurationWriteError,
  } = useContractWrite(pauseCurationConfig)

  const { data: txnPauseCurationData, status: txnPauseCurationStatus } =
    useWaitForTransaction({
      hash: pauseCurationWriteData?.hash,
    })

  // resumeCuration
  const { config: resumeCurationConfig, error: resumeCurationConfigError } =
    usePrepareContractWrite({
      addressOrName: curationContractAddress,
      contractInterface: curatorAbi,
      functionName: 'resumeCuration',
    })

  const {
    write: resumeCurationWrite,
    data: resumeCurationWriteData,
    error: resumeCurationWriteError,
  } = useContractWrite(resumeCurationConfig)

  const { data: txnResumeCurationData, status: txnResumeCurationStatus } =
    useWaitForTransaction({
      hash: resumeCurationWriteData?.hash,
    })

  return {
    // getListings
    getListingsRead,
    getListingsError,
    getListingsLoading,

    // addListing
    addListingConfig,
    addListingConfigError,
    addListingWrite,
    addListingWriteData,
    addListingWriteError,
    txnAddListingData,
    txnAddListingStatus,

    // burn
    burnConfig,
    burnConfigError,
    burnWrite,
    burnWriteData,
    burnWriteError,
    txnBurnData,
    txnBurnStatus,

    // burnBatch
    burnBatchConfig,
    burnBatchConfigError,
    burnBatchWrite,
    burnBatchWriteData,
    burnBatchWriteError,
    txnBurnBatchData,
    txnBurnBatchStatus,

    // updateCurationLimit
    updateCurationLimitConfig,
    updateCurationLimitConfigError,
    updateCurationLimitWrite,
    updateCurationLimitWriteData,
    updateCurationLimitWriteError,
    txnUpdateCurationLimitData,
    txnUpdateCurationLimitStatus,

    // freezeAt
    freezeAtConfig,
    freezeAtConfigError,
    freezeAtWrite,
    freezeAtWriteData,
    freezeAtWriteError,
    txnFreezeAtData,
    txnFreezeAtStatus,

    // updateRenderer
    updateRendererConfig,
    updateRendererConfigError,
    updateRendererWrite,
    updateRendererWriteData,
    updateRendererWriteError,
    txnUpdateRendererData,
    txnUpdateRendererStatus,

    // updateCurationPass
    updateCurationPassConfig,
    updateCurationPassConfigError,
    updateCurationPassWrite,
    updateCurationPassWriteData,
    updateCurationPassWriteError,
    txnUpdateCurationPassData,
    txnUpdateCurationPassStatus,

    // updateSortOrder
    updateSortOrderConfig,
    updateSortOrderConfigError,
    updateSortOrderWrite,
    updateSortOrderWriteData,
    updateSortOrderWriteError,
    txnUpdateSortOrderData,
    txnUpdateSortOrderStatus,

    // pauseCuration
    pauseCurationConfig,
    pauseCurationConfigError,
    pauseCurationWrite,
    pauseCurationWriteData,
    pauseCurationWriteError,
    txnPauseCurationData,
    txnPauseCurationStatus,

    // resumeCuration
    resumeCurationConfig,
    resumeCurationConfigError,
    resumeCurationWrite,
    resumeCurationWriteData,
    resumeCurationWriteError,
    txnResumeCurationData,
    txnResumeCurationStatus,
  }
}
