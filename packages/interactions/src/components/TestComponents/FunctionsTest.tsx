/* @ts-ignore */
import * as React from 'react'
import { useCurationFunctions } from '../../hooks/useCurationFunctions'

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
   * listingToBurn: curation listings to remove via burn function
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

export function FunctionsTest({
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
  const {
    // getListings
    getListingsRead,
    // getListingsError,
    // getListingsLoading,

    // addListing
    // addListingConfig,
    addListingConfigError,
    addListingWrite,
    // addListingWriteData,
    // addListingWriteError,
    // txnAddListingData,
    // txnAddListingStatus,

    // burn
    // burnConfig,
    // burnConfigError,
    burnWrite,
    // burnWriteData,
    // burnWriteError,
    // txnBurnData,
    // txnBurnStatus,

    // burnBatch
    // burnBatchConfig,
    // burnBatchConfigError,
    burnBatchWrite,
    // burnBatchWriteData,
    // burnBatchWriteError,
    // txnBurnBatchData,
    // txnBurnBatchStatus,

    // updateCurationLimit
    // updateCurationLimitConfig,
    // updateCurationLimitConfigError,
    updateCurationLimitWrite,
    // updateCurationLimitWriteData,
    // updateCurationLimitWriteError,
    // txnUpdateCurationLimitData,
    // txnUpdateCurationLimitStatus,

    // freezeAt
    // freezeAtConfig,
    // freezeAtConfigError,
    freezeAtWrite,
    // freezeAtWriteData,
    // freezeAtWriteError,
    // txnFreezeAtData,
    // txnFreezeAtStatus,

    // updateRenderer
    updateRendererConfig,
    updateRendererConfigError,
    updateRendererWrite,
    // updateRendererWriteData,
    // updateRendererWriteError,
    // txnUpdateRendererData,
    // txnUpdateRendererStatus,

    // updateCurationPass
    // updateCurationPassConfig,
    // updateCurationPassConfigError,
    updateCurationPassWrite,
    // updateCurationPassWriteData,
    // updateCurationPassWriteError,
    // txnUpdateCurationPassData,
    // txnUpdateCurationPassStatus,

    // updateSortOrder
    updateSortOrderConfig,
    updateSortOrderConfigError,
    updateSortOrderWrite,
    // updateSortOrderWriteData,
    // updateSortOrderWriteError,
    // txnUpdateSortOrderData,
    // txnUpdateSortOrderStatus,

    // pauseCuration
    // pauseCurationConfig,
    // pauseCurationConfigError,
    pauseCurationWrite,
    // pauseCurationWriteData,
    // pauseCurationWriteError,
    // txnPauseCurationData,
    // txnPauseCurationStatus,

    // resumeCuration
    // resumeCurationConfig,
    // resumeCurationConfigError,
    resumeCurationWrite,
    // resumeCurationWriteData,
    // resumeCurationWriteError,
    // txnResumeCurationData,
    // txnResumeCurationStatus,
  } = useCurationFunctions({
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
  })

  // console.log("getListings read return: ", getListingsString)
  // console.log("getListings read data: ", getListingsRead)
  // console.log("what data coming : ", addListingWriteData)
  // console.log("addlistingconfig: ", addListingConfig)
  console.log('updateRendererConfig: ', updateRendererConfig)
  console.log('updateRendererConfigerror: ', updateRendererConfigError)
  console.log('updateSortConfig: ', updateSortOrderConfig)
  console.log('updateSortConfigError: ', updateSortOrderConfigError)

  return (
    <>
      <button
        className="w-3/12 border-2 border-solid border-black hover:bg-black hover:text-white"
        onClick={() => addListingWrite?.()}>
        Add Listing
      </button>
      <div>{addListingConfigError && addListingConfigError.message}</div>
      <button
        className="w-3/12 border-2 border-solid border-black hover:bg-black hover:text-white"
        onClick={() => burnWrite?.()}>
        Burn Listing
      </button>
      <button
        className="w-3/12 border-2 border-solid border-black hover:bg-black hover:text-white"
        onClick={() => burnBatchWrite?.()}>
        {'Burn Listing (Batch)'}
      </button>
      <button
        className="w-3/12 border-2 border-solid border-black hover:bg-black hover:text-white"
        onClick={() => freezeAtWrite?.()}>
        Freeze Curation
      </button>
      <button
        className="w-3/12 border-2 border-solid border-black hover:bg-black hover:text-white"
        onClick={() => updateRendererWrite?.()}>
        Update Renderer (not working)
      </button>
      <button
        className="w-3/12 border-2 border-solid border-black hover:bg-black hover:text-white"
        onClick={() => updateCurationPassWrite?.()}>
        Update Curation Pass
      </button>
      <button
        className="w-3/12 border-2 border-solid border-black hover:bg-black hover:text-white"
        onClick={() => updateSortOrderWrite?.()}>
        Update Sort Order
      </button>
      <button
        className="w-3/12 border-2 border-solid border-black hover:bg-black hover:text-white"
        onClick={() => resumeCurationWrite?.()}>
        Resume Curation
      </button>
      <button
        className="w-3/12 border-2 border-solid border-black hover:bg-black hover:text-white"
        onClick={() => pauseCurationWrite?.()}>
        Pause Curation
      </button>
      <button
        className="w-3/12 border-2 border-solid border-black hover:bg-black hover:text-white"
        onClick={() => updateCurationLimitWrite?.()}>
        Update Curation
      </button>

      <div>{'getListings read call results : ' + JSON.stringify(getListingsRead)}</div>
    </>
  )
}
