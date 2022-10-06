// @ts-nocheck
import * as React from 'react'
import { useCurationFunctions } from '../../../hooks/useCurationFunctions'

export type AddListingsProps = {
  curationContractAddress: string
  bs: string | string[] | any[] | [string, number, boolean][] // Listing[] memory listings
}

export function AddListings({ curationContractAddress, bs }: AddListingsProps) {
  // const listings = [
  //   [
  //     bs.curatedAddress,
  //     bs.selectedTokenId,
  //     bs.curator,
  //     bs.curationTargetType,
  //     bs.sortOrder,
  //     bs.hasTokenId,
  //     bs.chainId
  //   ],
  // ]

  const listings = [
    Object.values({
      curatedAddress: '0x74e65ee234d93116ae224d77fb7fb813ba360e8a',
      selectedTokenId: 0,
      curator: '0x806164c929Ad3A6f4bd70c2370b3Ef36c64dEaa8',
      curationTargetType: 1,
      sortOrder: 0,
      hasTokenId: false,
      chainId: 4,
    }),
  ]

  console.log('listings, ', listings)

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

  console.log('addListingWriteError', addListingWriteError)
  console.log('addlistingconfig', addListingConfig)

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
