// @ts-nocheck
import * as React from 'react'
import { useCurationFunctions } from '../../../hooks/useCurationFunctions'

export type AddListingsProps = {
  curationContractAddress: string
  bs: string | string[] | any[] | [string, number, boolean][] // Listing[] memory listings
}

export function AddListings({ curationContractAddress, bs }: AddListingsProps) {
  const listings = [
    [
      bs.curatedAddress,
      bs.selectedTokenId,
      bs.curator,
      bs.curationTargetType,
      bs.sortOrder,
      bs.hasTokenId,
    ],
  ]

  console.log('listings, ', listings)

  const {
    addListingWrite,
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
        onClick={() => addListingWrite?.()}>
        Add
      </button>
    </div>
  )
}
