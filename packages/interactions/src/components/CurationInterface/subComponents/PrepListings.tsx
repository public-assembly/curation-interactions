// @ts-nocheck
import * as React from 'react'
import { ListingInput } from './ListingInput'
import { useState } from 'react'
import { AddListings } from './AddListings'

export type PrepAddListingsProps = {
  /**
   * connectionStatus:
   * curationContractAddress
   */
  curationContractAddress: string
  userAddress: string
  // connectionStatus: boolean
  // addView: boolean
  // setListingsFn: Function
}

export function PrepListings({
  curationContractAddress,
  userAddress,
}: PrepAddListingsProps) {
  let counter = 1

  const [listingsToAdd, setListingsToAdd] = useState({
    curatedAddress: '',
    selectedTokenId: 0,
    curator: userAddress,
    curationTargetType: 1,
    sortOrder: 0,
    hasTokenId: false,
    // chainId: 1, --- not implemented yet
  })

  const [listingsToAddV2, setListingsToAddV2] = useState({
    curatedAddress1: '',
    curatedAddress2: '',
    curatedAddress3: '',
    curatedAddress4: '',
    curatedAddress5: '',
  })

  const saveAndIncrement = () => {
    setGrowingArray(Object.values(listingsToAdd))
  }

  return (
    <div className=" flex h-fit w-full flex-row flex-wrap">
      {/* <ListingInput addListingInputs={listingsToAdd} addListingCB={setListingsToAdd}  /> */}

      <div className=" mb-[40%] w-full sm:mb-[25%]">
        <div className="selected: flex-row-wrap flex h-fit w-full border-2 border-black border-opacity-60 opacity-60  focus:border-opacity-100 focus:opacity-100 active:border-opacity-100 active:opacity-100">
          <div className=" flex w-full flex-row p-2">
            <input
              className="flex w-full  flex-row border-none bg-transparent text-[9px] text-black placeholder:text-xs placeholder:text-black placeholder:opacity-60 focus:outline-none active:outline-none sm:text-sm"
              placeholder="contract address, e.g. 0x8329d..."
              name="curatedAddress"
              type="text"
              value={listingsToAdd.curatedAddress}
              onChange={(e) => {
                e.preventDefault()
                setListingsToAdd((current) => {
                  return {
                    ...current,
                    curatedAddress: e.target.value,
                  }
                })
              }}
              required></input>
            <div className="flex w-fit flex-row justify-end ">
              <button className="opacity-60">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="11.5" stroke="#050A09" />
                  <rect x="6" y="11.5" width="12" height="1" fill="#050A09" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="py-2 text-xs ">
          <button
            onClick={() => {
              setListingsFn()
            }}>
            + ADD A CONTRACT
          </button>
        </div>
      </div>
      <AddListings bs={listingsToAdd} curationContractAddress={curationContractAddress} />
    </div>
  )
}
