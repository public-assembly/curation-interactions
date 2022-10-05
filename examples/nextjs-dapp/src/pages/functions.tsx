import Link from "next/link"

import { FunctionsTest } from "@public-assembly/curation-interactions"

const hardcodedCuratorAddress = "0x9c1eD19E7015c40716141039f8Ae43cEACCF30fd"

const listing1 = [
  "0x3795102c8508e0912b937ee263904d488407abba",
  1,
  "0x153D2A196dc8f1F6b9Aa87241864B3e4d4FEc170",
  4,
  0,
  true   
]

const listing2 = [
  "0x3795102c8508e0912b937ee263904d488407abba",
  2,
  "0x153D2A196dc8f1F6b9Aa87241864B3e4d4FEc170",
  4,
  0,
  true   
]

const arrayOfArrays = [
  listing1,
  listing2
]

const newCurationLimit = 10

const newFreezeAt = 4820441797 // year 2122

const newRendererAddress = "0x0000000000000000000000000000000000000000"

const newRendererInitializer = "0x0000000000000000000000000000000000000000000000000000000000000000"

const newCurationPassAddress = "0x0000000000000000000000000000000000000000"

const newSortOrderIds = [0, 1]

const newSortOrderOrders = [1,2]

const burnTokenId = 1

const burnBatchTokenIds = [0,1]

function Functions() {

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
        <FunctionsTest 
        curationContractAddress={hardcodedCuratorAddress}
        listings={arrayOfArrays}
        curationLimit={newCurationLimit}
        freezeAtUnix={newFreezeAt}
        newRendererAddress={newRendererAddress}
        newRendererInitializer={newRendererInitializer}
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
  