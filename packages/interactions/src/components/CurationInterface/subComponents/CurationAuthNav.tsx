/* @ts-ignore */
import * as React from 'react'

export type CurationAuthNavProps = {
  ownerStatus: boolean
  holderStatus: boolean
  addView: boolean
  addViewFn: Function
}

export function CurationAuthNav({
  ownerStatus,
  holderStatus,
  addView,
}: // addViewFn
CurationAuthNavProps) {
  return (
    <div className="flex h-fit w-full flex-row flex-wrap content-start px-[24px] ">
      {!addView ? (
        <div className="flex w-full flex-row flex-wrap justify-start text-3xl">
          <div className="mb-4 w-full text-[48px] sm:mb-0 sm:w-fit">Curation</div>
          <div className="w-full text-[48px] sm:w-fit sm:pl-2">Manager</div>
          {ownerStatus ? (
            <div className=" mt-2 w-full text-[14px] font-light">
              You have access to manage the Neosound onchain playlist.
            </div>
          ) : (
            <>
              {holderStatus && (
                <div className="mt-2 w-full text-[14px] font-light">
                  You have access to update the Neosound onchain playlist.
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        <div className="flex w-full flex-row flex-wrap justify-start text-3xl">
          <div className="mb-4 w-full text-[48px] sm:mb-0 sm:w-fit">Add</div>
          <div className="w-full text-[48px] sm:w-fit sm:pl-2">Tracks</div>
          <div className=" mt-2 w-full text-[14px] font-light">
            You can add up to 10 new songs per transaction.
          </div>
        </div>
      )}
    </div>
  )
}
