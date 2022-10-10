import Link from "next/link"
import { useValidation } from "@public-assembly/curation-interactions"
import { FunctionsTest } from "@public-assembly/curation-interactions"

export type CurationValidationProps = {
  /**
   * userAddress: send in wallet address to check nft balance of
   * curationContractAddress: address of curation contract being queried
   * network: network for the zdk to query from (1 = mainnet, 5 = goerli)
   * zoraApiKey: optional zora api key to pass into zora zdk fetch of user curation tokens
   */
  curationContractAddress: string
  network: number
  zoraApiKey?: string
}

const curationContractAddress = "0x9364E704f02a7CC69FE207cfD7FB03737642F0f8"

const network = 5;

const listing1 = [
  "0x3795102c8508e0912b937ee263904d488407abba",
  1,
  "0x806164c929Ad3A6f4bd70c2370b3Ef36c64dEaa8",
  6,
  0,
  true,
  1   
]

const listing2 = [
  "0x3795102c8508e0912b937ee263904d488407abba",
  2,
  "0x806164c929Ad3A6f4bd70c2370b3Ef36c64dEaa8",
  4,
  0,
  true,
  1   
]

const arrayOfArrays = [
  listing1,
  listing2
]

const newCurationLimit = 10

const newFreezeAt = 4820441797 // year 2122

const newRendererAddress = "0x0000000000000000000000000000000000000000"

const newRendererInitializer = "0x0000000000000000000000000000000000000000000000000000000000000000"

const newCurationPassAddress = "0x34fe32e6442d14d923953a537b8163365630b5a7"

const newSortOrderIds = [0, 1]

const newSortOrderOrders = [1,2]

const burnTokenId = 1

const burnBatchTokenIds = [0,1]

function Functions() {

  const { isPaused } = useValidation({
    curationContractAddress,
    network
  })

  const isPausedNew = Boolean(!isPaused)

    return (
      <section className="flex flex-col gap-4">
        <Link
            href="/"
        >
            <a className="text-blue-600 hover:underline">
            Back to Directory
            </a>
        </Link>              
        <h1>Functions</h1>
        <div>
          {JSON.stringify(arrayOfArrays)}
        </div>
        <FunctionsTest 
        curationContractAddress={curationContractAddress}
        listings={arrayOfArrays}
        curationLimit={newCurationLimit}
        freezeAtUnix={newFreezeAt}
        newRendererAddress={newRendererAddress}
        newRendererInitializer={newRendererInitializer}
        newPause={isPausedNew}
        newCurationPass={newCurationPassAddress}
        newSortOrderIds={newSortOrderIds}
        newSortOrderOrders={newSortOrderOrders}
        listingToBurn={burnTokenId}        
        listingsToBurn={burnBatchTokenIds}        
      />             
      </section>
    )
  }
  
  export default Functions
  