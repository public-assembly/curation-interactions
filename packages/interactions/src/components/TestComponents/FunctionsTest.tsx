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
   * newPause: sets new pause state boolean -- cannot pass in value of the current pause state
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
  newPause?: boolean // bool _setPaused
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
  newPause,
  newCurationPass,
  newSortOrderIds,
  newSortOrderOrders,
  listingToBurn,
  listingsToBurn,
}: CurationFunctionsProps) {
  const {
    // getListings
    getListingsReturn,
    // getListingsError,
    // getListingsLoading,

    // addListing
    // addListingsConfig,
    addListingsConfigError,
    addListingsWrite,
    // addListingsWriteData,
    // addListingsWriteError,
    // txnAddListingsData,
    // txnAddListingsStatus,

    // burn
    // burnConfigMemo,
    // burnConfigError,
    burnWrite,
    // burnWriteData,
    // burnWriteError,
    // txnBurnData,
    // txnBurnStatus,

    // removeListings
    // removeListingsConfig,
    // removeListingsConfigError,
    removeListingsWrite,
    // removeListingsWriteData,
    // removeListingsWriteError,
    // txnRemoveListingsData,
    // txnRemoveListingsStatus,

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
    // updateRendererConfig,
    // updateRendererConfigError,
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
    // updateSortOrderConfig,
    // updateSortOrderConfigError,
    updateSortOrderWrite,
    // updateSortOrderWriteData,
    // updateSortOrderWriteError,
    // txnUpdateSortOrderData,
    // txnUpdateSortOrderStatus,

    // setCurationPause
    // setCurationPauseConfig,
    // setCurationPauseConfigError,
    setCurationPauseWrite,
    // setCurationPauseWriteData,
    // setCurationPauseWriteError,
    // txnSetCurationPauseData,
    // txnSetCurationPauseStatus
  } = useCurationFunctions({
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
  })

  // console.log("getListings read return: ", getListingsString)
  // console.log("getListings read data: ", getListingsRead)
  // console.log('what data coming : ', addListingWrite)
  // console.log('addlistingconfig: ', addListingConfig)
  // console.log('addlistingconfig: ', addListingConfigError)

  return (
    <>
      <button
        className="w-3/12 border-2 border-solid border-black hover:bg-black hover:text-white"
        onClick={() => addListingsWrite?.()}>
        Add Listing
      </button>
      <div>{addListingsConfigError && addListingsConfigError.message}</div>
      <button
        className="w-3/12 border-2 border-solid border-black hover:bg-black hover:text-white"
        onClick={() => burnWrite?.()}>
        Burn Listing
      </button>
      <button
        className="w-3/12 border-2 border-solid border-black hover:bg-black hover:text-white"
        onClick={() => removeListingsWrite?.()}>
        {'Remove Listings'}
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
        onClick={() => setCurationPauseWrite?.()}>
        Flip Curation Pause State
      </button>
      <button
        className="w-3/12 border-2 border-solid border-black hover:bg-black hover:text-white"
        onClick={() => updateCurationLimitWrite?.()}>
        Update Curation Limit
      </button>
      <div>{'getListings read call results : ' + JSON.stringify(getListingsReturn)}</div>
    </>
  )
}
