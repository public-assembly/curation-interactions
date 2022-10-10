// @ts-nocheck
import * as React from 'react'
import { useCurationFunctions } from '../../../hooks/useCurationFunctions'

export type AddListingsProps = {
  curationContractAddress: string
  listingsToAdd: any[] // Listing[] memory listings
}

export function AddListings({
  curationContractAddress,
  listingsToAdd,
}: AddListingsProps) {
  const [txInProgress, setTxInProgress] = React.useState(false)

  const listings = React.useMemo(() => {
    /*
    const newArray: any[] = []
    console.log(listingsToAdd)
    
    let copy = listingsToAdd
    
    if (Array.isArray(copy)) {
      copy.map((object: any) => {
        let midArray = Object.values(object)
        newArray.push(midArray)
      })
    }
    */

    //   if (listingsToAdd) {

    //     return [listingsToAdd]
    //   }
    // }, [listingsToAdd])

    if (listingsToAdd) {
      return [Object.values(listingsToAdd)]
    }
  }, [listingsToAdd])

  const {
    addListingWrite,
    addListingWriteError,
    addListingConfig,
    addListingConfigError,
    txnAddListingStatus,
  } = useCurationFunctions({
    curationContractAddress,
    listings,
  })

  React.useEffect(() => {
    console.log('txnAddListingStatus', txnAddListingStatus)
    console.log('addListingWriteError', addListingWriteError)
    console.log('addListingConfig', addListingConfig)
    console.log('addListingConfigError', addListingConfigError)
  }, [txnAddListingStatus, addListingWriteError, addListingConfig, addListingConfigError])

  const handleAddListing = React.useCallback(() => {
    console.log(listings, addListingConfigError)
    addListingWrite()
    // setTxInProgress(true)
  }, [listings, addListingConfigError, setTxInProgress])

  React.useEffect(() => {
    if (txnAddListingStatus) setTxInProgress(false)
  }, [txnAddListingStatus, txInProgress])

  return (
    <div className="mb-[24px] flex w-full flex-col">
      <div className="flex w-full flex-row ">
        <button
          className="curation-interactions__add-listing-button h-[48px] w-full bg-[#050A09] p-2 text-[#ECF1F0]"
          // onClick={() => addListingWrite()}
          onClick={() => addListingWrite?.()}
          disabled={listings?.length === 0 ? true : false}>
          Add
        </button>
      </div>
      {txInProgress ? 'Transaction Processing' : null}
      {txnAddListingStatus !== 'idle' ? 'Transaction successful' : null}
    </div>
  )
}
