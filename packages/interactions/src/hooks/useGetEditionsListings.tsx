import * as React from 'react'
import { useContractRead } from 'wagmi'
import { curatorAbi } from '../protocol/abi/curatorImpl'
import { SanitizedListingsDataReturn } from '../types/get-listings'
import { sanitizeListingsData, validListingsFetcher } from '../lib'

export function useGetEditionsListings(curationContractAddress?: string) {
  const [validListings, setValidListings] = React.useState<any | undefined>(undefined)
  const [validListingsLoading, setValidListingsLoading] = React.useState(true)
  const [validListingsError, setValidListingsError] = React.useState<any | null>(null)

  const { data, error, isLoading } = useContractRead({
    addressOrName: curationContractAddress,
    contractInterface: curatorAbi,
    functionName: 'getListings',
  })

  const sanitizedListings = React.useMemo(() => {
    if (data) return sanitizeListingsData(data as any[])
  }, [data, curationContractAddress])

  React.useEffect(() => {
    async function getListings() {
      await validListingsFetcher(sanitizedListings?.full)
        .then((res) => {
          setValidListings(res)
          setValidListingsLoading(false)
        })
        .catch((err) => {
          setValidListingsLoading(false)
          setValidListingsError(err)
        })
    }
    getListings()
  }, [data, sanitizedListings])

  return {
    rawListingsData: {
      data,
      isLoading,
      error,
      listingCount: data.length,
    },
    sanitizedListingsData: {
      data: validListings,
      isLoading: validListingsLoading,
      error: validListingsError,
      listingCount: validListings?.contractAddresses.length,
    },
  } as {
    rawListingsData: {
      data: any[]
      error: any | null
      isLoading: boolean
      listingCount: number
    }
    sanitizedListingsData: {
      data: SanitizedListingsDataReturn
      isLoading: boolean
      error: any
      listingCount: number
    }
  }
}
