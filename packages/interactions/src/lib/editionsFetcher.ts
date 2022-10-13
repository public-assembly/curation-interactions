import { PlayListReturn } from '../types/get-listings'

interface ChainIdKey {
  [key: string]: string
}

export const DROPS_SUBGRAPH_URLS: ChainIdKey = {
  1: 'https://api.thegraph.com/subgraphs/name/iainnash/zora-drops-mainnet',
  5: 'https://api.thegraph.com/subgraphs/name/iainnash/erc721drop-goerli',
}

export type ChainIds = '1' | '5'

export const returnDropEndpoint = (chainId?: string) => DROPS_SUBGRAPH_URLS[chainId || 1]

export function getDropsContractQuery(collectionAddress?: string) {
  return `{
    erc721Drop(id: "${collectionAddress}") {
      address
    }
  }`
}

export async function getDropsContract(address?: string, chainId?: ChainIds) {
  try {
    const response = await fetch(returnDropEndpoint(chainId) as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      body: JSON.stringify({
        query: getDropsContractQuery(address),
      }),
    })
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`)
    }
    const res = response.json()
    return res
  } catch (err) {
    console.error(err)
  }
}

export async function validListingsFetcher(
  listingArray: PlayListReturn[],
  chainId?: ChainIds
) {
  const listings = await Promise.all(
    listingArray.map(async (listing) => {
      if (listing?.curationTargetType === 'CURATION_TYPE_ZORA_EDITION') {
        const metadata = await getDropsContract(
          listing?.curatedAddress.toLowerCase(),
          chainId
        )
          .then((res) => {
            return {
              check: res?.data?.erc721Drop?.address as string | undefined,
              listing: listing,
              address: listing?.curatedAddress.toLowerCase(),
            }
          })
          .catch((error) => {
            console.error(error)
          })
        return metadata
      }
    })
  )
  const validListings = listings.filter((item) => item && !!item?.check)
  const fullListings = validListings.map((listing) => listing && listing?.listing)
  const listingAddresses = validListings.map((listing) => listing && listing?.address)

  return {
    full: fullListings,
    contractAddresses: listingAddresses,
  }
}
