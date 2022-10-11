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
    addListingsWrite,
    addListingsWriteError,
    addListingsConfigMemo,
    addListingsConfigError,
    txnAddListingsStatus,
  } = useCurationFunctions({
    curationContractAddress,
    listings,
  })

  React.useEffect(() => {
    console.log('txnAddListingsStatus', txnAddListingsStatus)
    console.log('addListingsWriteError', addListingsWriteError)
    console.log('addListingsConfig', addListingsConfigMemo)
    console.log('addListingsConfigError', addListingsConfigError)
  }, [
    txnAddListingsStatus,
    addListingsWriteError,
    addListingsConfigMemo,
    addListingsConfigError,
  ])

  const handleaddListings = React.useCallback(() => {
    console.log(listings, addListingsConfigError)
    addListingsWrite()
    // setTxInProgress(true)
  }, [listings, addListingsConfigError, setTxInProgress])

  React.useEffect(() => {
    if (txnAddListingsStatus) setTxInProgress(false)
  }, [txnAddListingsStatus, txInProgress])

  return (
    <div className="mb-[24px] flex w-full flex-col">
      <div className="flex w-full flex-row ">
        <button
          className="curation-interactions__add-listing-button h-[48px] w-full bg-[#050A09] p-2 text-[#ECF1F0]"
          // onClick={() => addListingsWrite()}
          onClick={() => addListingsWrite?.()}
          disabled={listings?.length === 0 ? true : false}>
          Add
        </button>
      </div>
      {txInProgress ? 'Transaction Processing' : null}
      {txnAddListingsStatus !== 'idle' ? 'Transaction successful' : null}
    </div>
  )
}
