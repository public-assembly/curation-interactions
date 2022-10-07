/* @ts-ignore */
import * as React from 'react'
import { useValidation } from '../../hooks/useValidation'
import { useState, useEffect } from 'react'
import {
  CurationHeader,
  CurationAuthNav,
  CurationBody,
  ConnectPrompt,
} from './subComponents'
import { useAccount } from 'wagmi'

export type CurationInterfaceProps = {
  curationContractAddress: string
  network: number
  closeButton?: JSX.Element
  connectButton?: JSX.Element
}

export function CurationInterface({
  curationContractAddress,
  closeButton,
  connectButton,
  network,
  ...props
}: CurationInterfaceProps) {
  const { isConnected } = useAccount()

  // useValidation
  const { isCurationPassHolder, isCurationOwner } = useValidation({
    curationContractAddress,
    network,
  })

  // component wide state
  const [addTracksView, setAddTracksView] = useState<boolean>(false)

  useEffect(() => {
    if (!isConnected) {
      setAddTracksView(false)
    }
  }, [isConnected])

  return (
    <div
      {...props}
      className="flex h-[600px] w-[343px] flex-row flex-wrap  justify-center bg-[#FF89DE] text-black sm:h-[514px] sm:w-[588px]">
      <div className="flex flex-wrap content-start">
        <CurationHeader
          ownerStatus={isCurationOwner}
          addView={addTracksView}
          addViewFn={setAddTracksView}
          closeButton={closeButton}
        />
        {isConnected ? (
          <CurationAuthNav
            ownerStatus={isCurationOwner}
            holderStatus={isCurationPassHolder}
            addView={addTracksView}
            addViewFn={setAddTracksView}
          />
        ) : (
          <ConnectPrompt />
        )}
      </div>
      <div className="flex w-full flex-wrap content-end">
        <CurationBody
          ownerStatus={isCurationOwner}
          holderStatus={isCurationPassHolder}
          addView={addTracksView}
          addViewFn={setAddTracksView}
          curationContractAddress={curationContractAddress}
          connectButton={connectButton}
        />
      </div>
    </div>
  )
}
