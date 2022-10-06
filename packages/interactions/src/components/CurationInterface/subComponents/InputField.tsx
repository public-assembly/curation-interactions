// @ts-nocheck
import * as React from 'react'

export function InputField({ valueUpdating, callBackFN }) {
  return (
    <div className="flex-row-wrap flex h-fit w-full border-2 border-black border-opacity-60 opacity-60  focus:border-opacity-100 focus:opacity-100 active:border-opacity-100 active:opacity-100">
      <div className=" flex w-full flex-row p-2">
        <input
          className="flex w-full  flex-row border-none bg-transparent text-[9px] text-black placeholder:text-xs placeholder:text-black placeholder:opacity-60 focus:outline-none active:outline-none sm:text-sm"
          placeholder="contract address, e.g. 0x8329d..."
          name="curatedAddress"
          type="text"
          value={valueUpdating.curatedAddress}
          onChange={(e) => {
            e.preventDefault()
            callBackFN((current) => {
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
  )
}
