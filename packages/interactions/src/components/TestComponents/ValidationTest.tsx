/* @ts-ignore */
import * as React from 'react'
import { useValidation } from '../../hooks/useValidation'

export type CurationValidationProps = {
  /**
   * userAddress: send in wallet address to check nft balance of
   * curationContractAddress: address of curation contract being queried
   * network: network for the zdk to query from (1 = mainnet, 4 = goerli)
   * zoraApiKey: optional zora api key to pass into zora zdk fetch of user curation tokens
   */
  userAddress: string
  curationContractAddress: string
  network: number
  zoraApiKey?: string
}

export function ValidationTest({
  userAddress,
  curationContractAddress,
  network,
}: CurationValidationProps) {
  const {
    curationPassAddress,
    userCurationPassBalance,
    isCurationPassHolder,
    isCurationOwner,
    userActiveListings,
    curationLimit,
    frozenAt,
    isPaused,
  } = useValidation({
    userAddress,
    curationContractAddress,
    network,
  })

  const curationLimitToRender = curationLimit === 0 ? 'uncapped' : curationLimit

  return (
    <div className="flex flex-col gap-1 rounded-xl border border-solid border-gray-200 p-4 text-black">
      <div>{'Current User Address: ' + userAddress}</div>
      <div>{'Current Contract Address ' + curationContractAddress}</div>
      <div>{'Curation Pass Address: ' + curationPassAddress}</div>
      <div>{'User Balance of Curation Pass: ' + userCurationPassBalance}</div>
      <div>{'User owns curation pass : ' + isCurationPassHolder}</div>
      <div>{'User is owner of curation contract : ' + isCurationOwner}</div>
      <div>{'User curation tokens: ' + userActiveListings}</div>
      <div>{'Curation Limit : ' + curationLimitToRender}</div>
      <div>{'Curation Frozen At : ' + frozenAt}</div>
      <div>{'Curation isPaused: ' + isPaused}</div>
    </div>
  )
}
