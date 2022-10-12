import * as React from 'react'
import { useContractRead } from 'wagmi'
import { curatorAbi } from '../protocol/abi/curatorImpl'
import { SanitizedListingsDataReturn } from '../types/get-listings'
import { sanitizeListingsData } from '../lib'

export function useGetListings(curationContractAddress?: string) {
  const { data, error, isLoading } = useContractRead({
    addressOrName: curationContractAddress,
    contractInterface: curatorAbi,
    functionName: 'getListings',
  })

  const sanitizedListingsData = React.useMemo(() => {
    if (data) return sanitizeListingsData(data as any[])
  }, [data, curationContractAddress])

  return {
    rawListingsData: data,
    sanitizedListingsData,
    error,
    isLoading,
  } as {
    rawListingsData: any[]
    sanitizedListingsData: SanitizedListingsDataReturn
    error: any
    isLoading: boolean
  }
}
