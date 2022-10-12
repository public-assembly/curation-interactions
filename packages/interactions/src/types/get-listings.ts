export type CurationTargetTypes =
  | 'CURATION_TYPE_GENERIC'
  | 'CURATION_TYPE_NFT_CONTRACT'
  | 'CURATION_TYPE_CONTRACT'
  | 'CURATION_TYPE_CURATION_CONTRACT'
  | 'CURATION_TYPE_NFT_ITEM'
  | 'CURATION_TYPE_WALLET'
  | 'CURATION_TYPE_ZORA_EDITION'

export type PlayListReturn = {
  curatedAddress?: string
  curationTargetType?: CurationTargetTypes
  hasTokenId?: boolean
  tokenId?: string
  curator?: string
  sortOrder?: number
  chainId?: number
}

export type SanitizedListingsDataReturn = {
  full?: PlayListReturn[]
  contractAddresses?: string[]
}
