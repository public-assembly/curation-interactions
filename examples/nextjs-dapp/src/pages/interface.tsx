import Link from "next/link"
import { CurationInterface } from "@public-assembly/curation-interactions"
import { useAccount } from 'wagmi'
import { useState } from 'react'

function Interface() {

  const [isConnected, setIsConnected] = useState<boolean>(false)


  const hardcodedCurationContractAddress = "0x9c1eD19E7015c40716141039f8Ae43cEACCF30fd"

  const hardcodedNetwork = 4

  const { address } = useAccount()

  const currentUserAddress = address ? address : ""


    return (
      <section className="flex flex-col gap-4">
        <Link
            href="/"
        >
            <a className="text-blue-600 hover:underline">
            Back to Directory
            </a>
        </Link>              
        <h1>Interface</h1>
        <div className="flex flex-row flex-wrap justify-center">
          <CurationInterface
            connectionStatus={isConnected}
            userAddress={currentUserAddress}
            curationContractAddress={hardcodedCurationContractAddress}
            network={hardcodedNetwork}
          />
          <div className="mt-20 flex h-fit w-full flex-row flex-wrap justify-center">
            <button
              onClick={() => setIsConnected(!isConnected)}
              className="bg-black p-2 text-white border-2">
              {isConnected ? 'DISCONNECT' : 'CONNECT'}
            </button>
          </div>
        </div>
      </section>
    )
  }
  
  export default Interface
  