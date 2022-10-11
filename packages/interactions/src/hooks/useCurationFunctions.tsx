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

  const addListingsConfigMemo = React.useMemo(
    () => (addListingsConfig ? addListingsConfig : undefined),
    [listings]
  )

  const {
    write: addListingsWrite,
    data: addListingsWriteData,
    error: addListingsWriteError,
  } = useContractWrite(addListingsConfigMemo)

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

  const burnConfigMemo = React.useMemo(
    () => (burnConfig ? burnConfig : undefined),
    [listingToBurn]
  )

  const {
    write: burnWrite,
    data: burnWriteData,
    error: burnWriteError,
  } = useContractWrite(burnConfigMemo)

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

  const removeListingsConfigMemo = React.useMemo(
    () => (removeListingsConfig ? removeListingsConfig : undefined),
    [listingsToBurn]
  )

  const {
    write: removeListingsWrite,
    data: removeListingsWriteData,
    error: removeListingsWriteError,
  } = useContractWrite(removeListingsConfigMemo)

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

  const updateCurationLimitConfigMemo = React.useMemo(
    () => (updateCurationLimitConfig ? updateCurationLimitConfig : undefined),
    [curationLimit]
  )

  const {
    write: updateCurationLimitWrite,
    data: updateCurationLimitWriteData,
    error: updateCurationLimitWriteError,
  } = useContractWrite(updateCurationLimitConfigMemo)

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

  const freezeAtConfigMemo = React.useMemo(
    () => (freezeAtConfig ? freezeAtConfig : undefined),
    [freezeAtUnix]
  )

  const {
    write: freezeAtWrite,
    data: freezeAtWriteData,
    error: freezeAtWriteError,
  } = useContractWrite(freezeAtConfigMemo)

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

  const updateRendererConfigMemo = React.useMemo(
    () => (updateRendererConfig ? updateRendererConfig : undefined),
    [newRendererAddress, newRendererInitializer]
  )

  const {
    write: updateRendererWrite,
    data: updateRendererWriteData,
    error: updateRendererWriteError,
  } = useContractWrite(updateRendererConfigMemo)

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

  const updateCurationPassConfigMemo = React.useMemo(
    () => (updateCurationPassConfig ? updateCurationPassConfig : undefined),
    [newCurationPass]
  )

  const {
    write: updateCurationPassWrite,
    data: updateCurationPassWriteData,
    error: updateCurationPassWriteError,
  } = useContractWrite(updateCurationPassConfigMemo)

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

  const updateSortOrderConfigMemo = React.useMemo(
    () => (updateSortOrderConfig ? updateSortOrderConfig : undefined),
    [newSortOrderIds, newSortOrderOrders]
  )

  const {
    write: updateSortOrderWrite,
    data: updateSortOrderWriteData,
    error: updateSortOrderWriteError,
  } = useContractWrite(updateSortOrderConfigMemo)

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

  const setCurationPauseConfigMemo = React.useMemo(
    () => (setCurationPauseConfig ? setCurationPauseConfig : undefined),
    [newPause]
  )

  const {
    write: setCurationPauseWrite,
    data: setCurationPauseWriteData,
    error: setCurationPauseWriteError,
  } = useContractWrite(setCurationPauseConfigMemo)

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
    addListingsConfigMemo,
    addListingsConfigError,
    addListingsWrite,
    addListingsWriteData,
    addListingsWriteError,
    txnAddListingsData,
    txnAddListingsStatus,

    // burn
    burnConfigMemo,
    burnConfigError,
    burnWrite,
    burnWriteData,
    burnWriteError,
    txnBurnData,
    txnBurnStatus,

    // removeListings
    removeListingsConfigMemo,
    removeListingsConfigError,
    removeListingsWrite,
    removeListingsWriteData,
    removeListingsWriteError,
    txnRemoveListingsData,
    txnRemoveListingsStatus,

    // freezeAt
    updateCurationLimitConfigMemo,
    updateCurationLimitConfigError,
    updateCurationLimitWrite,
    updateCurationLimitWriteData,
    updateCurationLimitWriteError,
    txnUpdateCurationLimitData,
    txnUpdateCurationLimitStatus,

    // freezeAt
    freezeAtConfigMemo,
    freezeAtConfigError,
    freezeAtWrite,
    freezeAtWriteData,
    freezeAtWriteError,
    txnFreezeAtData,
    txnFreezeAtStatus,

    // updateRenderer
    updateRendererConfigMemo,
    updateRendererConfigError,
    updateRendererWrite,
    updateRendererWriteData,
    updateRendererWriteError,
    txnUpdateRendererData,
    txnUpdateRendererStatus,

    // updateCurationPass
    updateCurationPassConfigMemo,
    updateCurationPassConfigError,
    updateCurationPassWrite,
    updateCurationPassWriteData,
    updateCurationPassWriteError,
    txnUpdateCurationPassData,
    txnUpdateCurationPassStatus,

    // updateSortOrder
    updateSortOrderConfigMemo,
    updateSortOrderConfigError,
    updateSortOrderWrite,
    updateSortOrderWriteData,
    updateSortOrderWriteError,
    txnUpdateSortOrderData,
    txnUpdateSortOrderStatus,

    // setCurationPause
    setCurationPauseConfigMemo,
    setCurationPauseConfigError,
    setCurationPauseWrite,
    setCurationPauseWriteData,
    setCurationPauseWriteError,
    txnSetCurationPauseData,
    txnSetCurationPauseStatus,
  }
}
