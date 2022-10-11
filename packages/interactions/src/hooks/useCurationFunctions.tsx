// @ts-nocheck
import React from 'react'
import {
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
// import { abi } from '@public-assembly/curation-protocol/dist/artifacts/out/Curator.sol/Curator.json'
import { curatorAbi } from '../protocol/abi/curatorImpl'

export type CurationFunctionsProps = {
  /**
   * curationContractAddress: Curator contract address
   * listings: listings to add to or remove from the curation contract
   * curationLimit: max number of listings that can be curated at any time. 0 = infinite
   * freezeAtUnix: unix time to freeze curation functionality (including owner) forever
   * newRendererAddress: address of new metadata renderer
   * newRendererInitializer: new metadata path. bytes 0 value for default
   * newPause: sets new pause state boolean -- cannot pass in value of the current pause state
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
  newPause?: boolean // bool _setPaused
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
  newPause,
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

  const getListingsReturn = React.useMemo(
    () => (getListingsRead ? getListingsRead : [[]]),
    [getListingsRead]
  )

  // addListings
  const { config: addListingsConfig, error: addListingsConfigError } =
    usePrepareContractWrite({
      addressOrName: curationContractAddress,
      contractInterface: curatorAbi,
      functionName: 'addListings',
      args: [listings],
      enabled: listings,
    })

  const {
    write: addListingsWrite,
    data: addListingsWriteData,
    error: addListingsWriteError,
  } = useContractWrite(addListingsConfig)

  const { data: txnAddListingsData, status: txnAddListingsStatus } =
    useWaitForTransaction({
      hash: addListingsWriteData?.hash,
    })

  // burn
  const { config: burnConfig, error: burnConfigError } = usePrepareContractWrite({
    addressOrName: curationContractAddress,
    contractInterface: curatorAbi,
    functionName: 'burn',
    args: [listingToBurn],
    enabled: listingToBurn,
  })

  const {
    write: burnWrite,
    data: burnWriteData,
    error: burnWriteError,
  } = useContractWrite(burnConfig)

  const { data: txnBurnData, status: txnBurnStatus } = useWaitForTransaction({
    hash: burnWriteData?.hash,
  })

  // removeListings
  const { config: removeListingsConfig, error: removeListingsConfigError } =
    usePrepareContractWrite({
      addressOrName: curationContractAddress,
      contractInterface: curatorAbi,
      functionName: 'removeListings',
      args: [listingsToBurn],
      enabled: listingsToBurn,
    })

  const {
    write: removeListingsWrite,
    data: removeListingsWriteData,
    error: removeListingsWriteError,
  } = useContractWrite(removeListingsConfig)

  const { data: txnRemoveListingsData, status: txnRemoveListingsStatus } =
    useWaitForTransaction({
      hash: removeListingsWriteData?.hash,
    })

  // updateCurationLimit
  const { config: updateCurationLimitConfig, error: updateCurationLimitConfigError } =
    usePrepareContractWrite({
      addressOrName: curationContractAddress,
      contractInterface: curatorAbi,
      functionName: 'updateCurationLimit',
      args: [curationLimit],
      enabled: curationLimit,
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
    enabled: freezeAtUnix,
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
      enabled: curatorAbi,
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
      enabled: newCurationPass,
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
      enabled: newSortOrderIds && newSortOrderOrders,
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

  // setCurationPaused

  const { config: setCurationPauseConfig, error: setCurationPauseConfigError } =
    usePrepareContractWrite({
      addressOrName: curationContractAddress,
      contractInterface: curatorAbi,
      functionName: 'setCurationPaused',
      args: [newPause],
      enabled: newPause,
    })

  const {
    write: setCurationPauseWrite,
    data: setCurationPauseWriteData,
    error: setCurationPauseWriteError,
  } = useContractWrite(setCurationPauseConfig)

  const { data: txnSetCurationPauseData, status: txnSetCurationPauseStatus } =
    useWaitForTransaction({
      hash: setCurationPauseWriteData?.hash,
    })

  return {
    // getListings
    getListingsReturn,
    getListingsError,
    getListingsLoading,

    // addListings
    addListingsConfig,
    addListingsConfigError,
    addListingsWrite,
    addListingsWriteData,
    addListingsWriteError,
    txnAddListingsData,
    txnAddListingsStatus,

    // burn
    burnConfig,
    burnConfigError,
    burnWrite,
    burnWriteData,
    burnWriteError,
    txnBurnData,
    txnBurnStatus,

    // removeListings
    removeListingsConfig,
    removeListingsConfigError,
    removeListingsWrite,
    removeListingsWriteData,
    removeListingsWriteError,
    txnRemoveListingsData,
    txnRemoveListingsStatus,

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

    // setCurationPause
    setCurationPauseConfig,
    setCurationPauseConfigError,
    setCurationPauseWrite,
    setCurationPauseWriteData,
    setCurationPauseWriteError,
    txnSetCurationPauseData,
    txnSetCurationPauseStatus,
  }
}
