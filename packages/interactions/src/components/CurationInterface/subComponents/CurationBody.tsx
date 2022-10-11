/* @ts-ignore */
import * as React from 'react'
import { PrepListings } from './PrepListings'
import { useAccount } from 'wagmi'

export type CurationFooterProps = {
  ownerStatus: boolean
  holderStatus: boolean
  addView: boolean
  addViewFn: Function
  curationContractAddress: string
  connectButton: JSX.Element
}

export function CurationBody({
  ownerStatus,
  holderStatus,
  addView,
  addViewFn,
  curationContractAddress,
  connectButton,
}: CurationFooterProps) {
  const { isConnected } = useAccount()

  if (!isConnected)
    return (
      <div className="curation-interface__connect-wrapper flex w-full flex-col items-center gap-[24px]">
        <div className="curation-interface__connect-wrapper--button-wrapper">
          {connectButton}
        </div>
        <p className="uration-interface__connect-wrapper--prompt flex flex-row justify-center text-sm">
          <span>Dont have a wallet? click</span>
          <a className="font-bold">&nbsp;here&nbsp;</a>
          <span>to get one</span>
        </p>
      </div>
    )

  return (
    <div className="curation-interface__curate-interface--wrapper w-full">
      {!addView ? (
        <div className="curation-interface__ui--wrapper mb-[24px] w-full flex-row flex-wrap justify-center text-sm ">
          {holderStatus || ownerStatus ? (
            <div className="flex h-[80px] w-full flex-row flex-wrap justify-center">
              <button
                onClick={() => addViewFn(true)}
                className="w-full border-b-2 border-gray-700 bg-[#050A09] p-2 text-[18px] text-[#ECF1F0]">
                Add tracks
              </button>
            </div>
          ) : (
            <div className="curation-interface__no-pass-alert">
              <div className="mb-[24px] flex h-fit w-full flex-row text-sm">
                <div className="flex flex-row space-x-2 border-[1px] border-black px-2 py-1 text-[12px]">
                  <div className=" mt-1 flex h-[14px] w-[14px]  flex-row items-start justify-center self-start bg-black text-transparent">
                    {'✕'}
                  </div>
                  <div className="flex h-fit w-full flex-row justify-start self-center">
                    YOU MUST POSSES A CURATION PASS FOR THIS PLATFORM TO ACCESS
                    FUNCTIONALITY
                  </div>
                </div>
              </div>
              <div className=" flex h-[80px] w-full flex-row flex-wrap justify-center  opacity-50">
                <button
                  disabled={true}
                  className="w-full border-b-2  border-gray-700 bg-[#050A09] p-2 text-[16px] text-[#ECF1F0]">
                  Add tracks
                </button>
              </div>
            </div>
          )}

          <div className=" flex h-[80px] w-full flex-row flex-wrap justify-center">
            <button
              disabled={true}
              className=" w-full bg-[#050A09] p-2 text-[16px] text-[#ECF1F0] opacity-50">
              Remove tracks (coming soon)
            </button>
          </div>
          {ownerStatus ? (
            <div className="flex h-[80px] w-full flex-row flex-wrap justify-center border-opacity-50">
              <button
                disabled={true}
                className=" w-full border-t-2 border-gray-700 bg-[#050A09] p-2 text-[16px] text-[#ECF1F0] opacity-50">
                Manage contract (coming soon)
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="flex h-full w-full flex-row flex-wrap justify-center bg-[#FF89DE]">
          <PrepListings curationContractAddress={curationContractAddress} />
        </div>
      )}
    </div>
  )
}
