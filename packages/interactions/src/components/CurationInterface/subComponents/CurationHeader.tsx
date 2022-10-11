/* @ts-ignore */
import * as React from 'react'
import { shortenAddress } from '../../../lib'
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
    <div className="curation-interface__header flex w-full flex-col items-center gap-[12px]">
      <div className="curation-interface__header--nav-ui flex h-[32px] w-full flex-row items-center justify-between">
        <div className="curation-interface__back-button--wrapper relative h-[32px] w-[32px]">
          {!(!isConnected || (isConnected && !addView)) && (
            <button
              className="curation-interface__back-button"
              onClick={() => addViewFn(false)}>
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
          )}
        </div>
        {closeButton && (
          <div className="curation-interface__close-button-wrapper justify-end">
            {closeButton}
          </div>
        )}
      </div>
      {isConnected && (
        <div className="curation-interface__owner-status mb-[24px] flex w-full flex-row items-center justify-between text-sm">
          <div className="curation-interface__connected-address--wrapper flex flex-row items-center gap-[8px] border-[1px] border-black px-2 py-1">
            <div className="curation-interface__connected-indicator h-[14px] w-[14px] bg-[#00FD01]" />
            <span className="curation-interface__connected-address">
              {shortenAddress(address)}
            </span>
          </div>
          {ownerStatus && (
            <span className="curation-interface__contract-owner ml-2 flex flex-row  border-[1px] border-black py-1 px-2">
              CONTRACT OWNER
            </span>
          )}
        </div>
      )}
    </div>
  )
}
