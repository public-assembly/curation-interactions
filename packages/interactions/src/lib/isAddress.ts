import { getAddress } from 'ethers/lib/utils'

export function isAddress(value: any): string | false {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}
