import { returnCurationType } from './returnCurationType'
import { removeDuplicatesByKey } from './removeDuplicatesByKey'
import { SanitizedListingsDataReturn } from '../types/get-listings'

export const AddressZero = '0x0000000000000000000000000000000000000000'

export function sanitizeListingsData(getListingsData?: any[]) {
  if (getListingsData) {
    const allData = getListingsData.map((entry) => {
      try {
        const curationEntry = {
          curatedAddress: entry['curatedAddress']?.toLowerCase(),
          curationTargetType: returnCurationType(entry['curationTargetType'].toString()),
          hasTokenId: entry['hasTokenId'],
          tokenId: entry['tokenId']?.toString(),
          curator: entry['curator'],
          sortOrder: entry['sortOrder'],
          chainId: entry['chainId']?.toString(),
        }

        return curationEntry
      } catch (err) {
        console.error(err)
      }
    })
    try {
      const removeZeroAddress = allData.filter(
        (item) => item?.curatedAddress !== AddressZero && item?.curator !== AddressZero
      )
      const uniqeListings = removeDuplicatesByKey(
        removeZeroAddress,
        (item: any) => item.curatedAddress
      )
      const contractAddresses = uniqeListings.map((item: any) =>
        item?.curatedAddress?.toLowerCase()
      )
      return {
        full: uniqeListings,
        contractAddresses: contractAddresses,
      } as SanitizedListingsDataReturn
    } catch (err) {
      console.error(err)
    }
  }
}
