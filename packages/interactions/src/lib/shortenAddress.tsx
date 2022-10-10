export function shortenAddress(address?: string) {
  try {
    return address.slice(0, 4) + '...' + address.slice(address.length - 4)
  } catch (err) {
    return undefined
  }
}
