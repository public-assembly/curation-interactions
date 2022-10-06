/* @ts-ignore */
import * as React from 'react'
import { shortenAddress } from '../utils/shortenAddress'
import { useAccount } from 'wagmi'

export type HeaderProps = {
  ownerStatus: boolean
  addView: boolean
  addViewFn: Function
  closeButton?: JSX.Element
}

export function CurationHeader({
  ownerStatus,
  addView,
  addViewFn,
  closeButton,
}: HeaderProps) {
  const { isConnected, address } = useAccount()

  return (
    <div className="h-fit w-full flex-row flex-wrap justify-center space-y-[24px] p-[24px] ">
      <div className="flex w-full flex-row">
        {!isConnected || (isConnected && !addView) ? (
          <></>
        ) : (
          <div className="flex  w-full flex-row justify-start">
            <button onClick={() => addViewFn(false)}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15.5" stroke="#050A09" />
                <path
                  d="M17.9987 8.00098L18.9398 8.9421L10.9411 16.941L10 15.9999L17.9987 8.00098Z"
                  fill="#050A09"
                />
                <path
                  d="M18.9401 23.058L17.999 23.9991L10 15.9999L10.9409 15.0588L18.9401 23.058Z"
                  fill="#050A09"
                />
              </svg>
            </button>
          </div>
        )}
        {closeButton && <div className="justify-end">{closeButton}</div>}
      </div>
      {isConnected && (
        <div className="flex h-fit w-full flex-row text-sm">
          <div className="flex flex-row space-x-2 border-[1px] border-black px-2 py-1">
            <div className=" flex h-[14px] w-[14px] flex-row self-center bg-[#00FD01] text-transparent">
              {'blank'}
            </div>
            <div className=" flex h-fit w-fit flex-row justify-start self-center">
              {shortenAddress(address)}
            </div>
          </div>
          {ownerStatus && (
            <div className="ml-2 flex flex-row  border-[1px] border-black py-1 px-2">
              CONTRACT OWNER
            </div>
          )}
        </div>
      )}
    </div>
  )
}
