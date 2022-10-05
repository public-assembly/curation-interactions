/* @ts-ignore */
import * as React from 'react'
import { useValidation } from '../../hooks/useValidation'
// import { useCurationFunctions } from '@public-assembly/assemble-curation-functions'
// import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useState, useEffect } from 'react'
import { CurationHeader } from './subComponents/CurationHeader'
import { CurationAuthNav } from './subComponents/CurationAuthNav'
import { CurationBody } from './subComponents/CurationBody'

export type AllMyProps = {
  /**
   * connectionStatus:
   * userAddress:
   * curationContractAddress:
   * network:
   * listings:
   */
  connectionStatus: boolean
  userAddress: string
  curationContractAddress: string
  network: number
  closeButton?: JSX.Element
}

// export type ListingProps = {
//   listings?: string | string[] | any[] | [string, number, boolean][] // Listing[] memory listings
// }

export function CurationInterface({
  // shared inputs
  connectionStatus,
  userAddress,
  curationContractAddress,
  closeButton,

  // useValidation inputs
  network,
}: AllMyProps) {
  // useValidation
  const {
    isCurationPassHolder,
    isCurationOwner,
    // userActiveListings,
    // curationLimit,
    // frozenAt,
    // isPaused,
  } = useValidation({
    userAddress,
    curationContractAddress,
    network,
  })

  // useCurationFunctions
  // const { getListingsRead } = useCurationFunctions({
  //   curationContractAddress,
  // })

  // component wide state
  const [addTracksView, setAddTracksView] = useState<boolean>(false)

  // const [currentTimeStamp, setCurrentTimeStamp] = useState<number>(0)

  // const remainingListings = curationLimit === 0 ? undefined : curationLimit - getListingsRead.length

  // console.log("remaining listings : ", remainingListings)

  // const [listingsToAdd, setListingsToAdd] = useState<ListingProps>()
  // const [isOwner, setIsOwner] = useState<boolean>(false);
  // const [isPassHolder, setIsPassHolder] = useState<boolean>(false);
  // const [listingsInput, setListingsInput] = useState<string>("");

  // const isCurationFrozen = frozenAt == 0 || currentTimeStamp < frozenAt ? false : true
  // const isCurationPaused = isPaused ? isPaused : false

  // useCurationFunctions
  // const { addListingWrite } = useCurationFunctions({
  //   curationContractAddress,
  //   listingsToAdd,
  // })

  // const getUnix = () => {
  //   setCurrentTimeStamp(Math.floor(Date.now() / 1000))
  // }

  // useEffect(() => {
  //   getUnix()
  //   const interval = setInterval(() => {
  //     getUnix()
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [])

  const resetAddViewState = () => {
    setAddTracksView(false)
  }

  useEffect(() => {
    if (!connectionStatus) {
      resetAddViewState()
    }
  }, [connectionStatus])

  return (
    <div className="flex h-[600px] w-[343px] flex-row flex-wrap  justify-center bg-[#FF89DE] text-black sm:h-[514px] sm:w-[588px]">
      {/* <div className="flex h-fit w-full flex-row flex-wrap justify-start text-sm">
        <div className="h-fit w-full">{ connectionStatus ? shortenAddress(userAddress) : 'no user connected'}</div>
        {isCurationOwner && connectionStatus ? <div className="h-fit w-full">{'[OWNER]'}</div> : <div></div>}
      </div> */}
      <div className="flex flex-wrap content-start">
        <CurationHeader
          connectionStatus={connectionStatus}
          userAddress={userAddress}
          ownerStatus={isCurationOwner}
          addView={addTracksView}
          addViewFn={setAddTracksView}
          closeButton={closeButton}
        />
        <CurationAuthNav
          connectionStatus={connectionStatus}
          ownerStatus={isCurationOwner}
          holderStatus={isCurationPassHolder}
          addView={addTracksView}
          addViewFn={setAddTracksView}
        />
      </div>
      <div className="flex w-full flex-wrap content-end">
        <CurationBody
          ownerStatus={isCurationOwner}
          holderStatus={isCurationPassHolder}
          addView={addTracksView}
          addViewFn={setAddTracksView}
          connectionStatus={connectionStatus}
          curationContractAddress={curationContractAddress}
          userAddress={userAddress}
        />
      </div>
    </div>
  )
}
