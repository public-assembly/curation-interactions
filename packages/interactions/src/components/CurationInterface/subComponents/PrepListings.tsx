// @ts-nocheck
import * as React from 'react'
import { ListingInput } from './ListingInput'
import { AddListings } from './AddListingsRefactor'
import { InputField } from './InputField'
import { useAccount } from 'wagmi'
import { isAddress } from '../../../lib'

export type PrepAddListingsProps = {
  curationContractAddress: string
}

const listingDefault = {
  curatedAddress: '',
  selectedTokenId: 0,
  curator: '',
  curationTargetType: 1,
  sortOrder: 0,
  hasTokenId: false,
  chainId: 1,
}

const listingObject = Object.values(listingDefault)

type ListingObjectType = typeof listingDefault

export function PrepListings({ curationContractAddress }: PrepAddListingsProps) {
  const { isConnected, address } = useAccount()

  const [listingsToAdd, setListingsToAdd] = React.useState<array | undefined>()

  const addToListings = React.useCallback(() => {
    const newObject = Object.create(listingObject)
    newObject.curatedAddress = ''
    newObject.selectedTokenId = 0
    newObject.curator = address
    newObject.curationTargetType = 1
    newObject.sortOrder = 0
    newObject.hasTokenId = false
    newObject.chainId = 1

    const newFullArray = Object.values(newObject)
    if (listingsToAdd) setListingsToAdd([...listingsToAdd, newFullArray])
  }, [address, listingsToAdd, setListingsToAdd])

  const removeObject = React.useCallback(() => {
    if ([...listingsToAdd].length === 1) {
      return
    }
    const currentArray = [...listingsToAdd]
    const splicedArray = currentArray.splice(-1)
    setListingsToAdd(currentArray)
  }, [listingsToAdd, setListingsToAdd])

  /* need to create a valid initial listing before passing it to the contract */
  const handleChange = React.useCallback(
    (e, i) => {
      const { value } = e?.target
      console.log(value)
      if (isAddress(value)) {
        if (!listingsToAdd) {
          const initialListing = {
            ...listingObject,
            [0]: value,
            [2]: address,
          }
          setListingsToAdd(initialListing)
        } else {
          const newState = [...listingsToAdd]
          newState[i] = {
            ...newState[i],
            [0]: value,
            [2]: address,
          }
          setListingsToAdd(newState)
        }
      }
    },
    [listingsToAdd, setListingsToAdd, address]
  )

  return (
    <div className="mx-[24px] flex h-fit w-full flex-row flex-wrap">
      <div className=" w-full ">
        {listingsToAdd?.length &&
          listingsToAdd.map(({ curatedAddress }, index) => {
            return (
              <div
                key={index}
                className="flex-row-wrap mb-2 flex h-fit w-full border-2 border-black border-opacity-60 opacity-60  focus:border-opacity-100 focus:opacity-100 active:border-opacity-100 active:opacity-100">
                <div className=" flex w-full flex-row p-2">
                  <input
                    className="flex w-full  flex-row border-none bg-transparent text-[9px] text-black placeholder:text-xs placeholder:text-black placeholder:opacity-60 focus:outline-none active:outline-none sm:text-sm"
                    placeholder="contract address, e.g. 0x8329d..."
                    name="curatedAddress"
                    type="text"
                    value={curatedAddress}
                    onChange={(e) => handleChange(e, index)}
                    required></input>
                  <div className="flex w-fit flex-row justify-end ">
                    <button className="opacity-60" onClick={() => removeObject()}>
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
            )
          })}
        {!listingsToAdd?.length ? (
          <div className="flex-row-wrap mb-2 flex h-fit w-full border-2 border-black border-opacity-60 opacity-60  focus:border-opacity-100 focus:opacity-100 active:border-opacity-100 active:opacity-100">
            <div className=" flex w-full flex-row p-2">
              <input
                className="flex w-full  flex-row border-none bg-transparent text-[9px] text-black placeholder:text-xs placeholder:text-black placeholder:opacity-60 focus:outline-none active:outline-none sm:text-sm"
                placeholder="contract address, e.g. 0x8329d..."
                name="curatedAddress"
                type="text"
                // value={''}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        ) : null}
        {!listingsToAdd || listingsToAdd?.length < 10 ? (
          <div className=" py-2 text-xs ">
            <button onClick={addToListings}>+ ADD A CONTRACT</button>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex w-full flex-row content-end">
        <AddListings
          listingsToAdd={listingsToAdd}
          curationContractAddress={curationContractAddress}
        />
      </div>
    </div>
  )
}
