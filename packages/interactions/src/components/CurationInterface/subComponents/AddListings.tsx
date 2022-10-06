// @ts-nocheck
import * as React from 'react'
import { useCurationFunctions } from '../../../hooks/useCurationFunctions'

export type AddListingsProps = {
  curationContractAddress: string
  userAddress: string
  bs: string | string[] | any[] | [string, number, boolean][] // Listing[] memory listings
}

export function AddListings({
  userAddress,
  curationContractAddress,
  bs,
}: AddListingsProps) {
  const listings = Object.values(bs)

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

  return (
    <div className="mb-[24px] flex w-full flex-row ">
      <button
        className="h-[48px] w-full bg-[#050A09] p-2 text-[#ECF1F0]"
        onClick={addListingWrite}
        disabled={listings.length === 0 ? true : false}>
        Add
      </button>
    </div>
  )
}
