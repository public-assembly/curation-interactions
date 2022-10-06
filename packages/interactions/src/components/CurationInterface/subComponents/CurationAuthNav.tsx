/* @ts-ignore */

export type CurationAuthNavProps = {
  /**
   * connectionStatus:
   */
  connectionStatus: boolean
  ownerStatus: boolean
  holderStatus: boolean
  addView: boolean
  addViewFn: Function
}

export function CurationAuthNav({
  connectionStatus,
  ownerStatus,
  holderStatus,
  addView,
}: CurationAuthNavProps) {
  return (
    <div className="flex h-fit w-full flex-row flex-wrap content-start px-[24px] ">
      {connectionStatus ? (
        <>
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
                  {holderStatus ? (
                    <div className="mt-2 w-full text-[14px] font-light">
                      You have access to update the Neosound onchain playlist.
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </div>
          ) : (
            <div className="flex w-full flex-row flex-wrap justify-start text-3xl">
              <div className="mb-4 w-full text-[48px] sm:mb-0 sm:w-fit">Add</div>
              <div className="w-full text-[48px] sm:w-fit sm:pl-2">Tracks</div>
              <div className=" mt-2 w-full text-[14px] font-light">
                You can add up to 5 new songs per transaction.
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex w-full flex-row flex-wrap justify-start text-3xl">
          <div className="mb-4 w-full text-[48px] sm:mb-0 sm:w-fit">Connect</div>
          <div className="w-full text-[48px] sm:w-fit sm:pl-2">wallet</div>
          <div className="mt-2 w-full text-[14px] font-light">
            to access curation functionality.
          </div>
        </div>
      )}
    </div>
  )
}
