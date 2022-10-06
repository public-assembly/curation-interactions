import Link from "next/link"
import { CurationInterface } from "@public-assembly/curation-interactions"
import { useAccount } from 'wagmi'
import { ConnectButton } from "@rainbow-me/rainbowkit"

function Interface() {

  const hardcodedCurationContractAddress = "0xEd824d01B337Fb423554185464dbF7D85034446B"

  const hardcodedNetwork = 5

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
        <div className=" flex flex-row flex-wrap justify-center">
          <CurationInterface
            userAddress={currentUserAddress}
            curationContractAddress={hardcodedCurationContractAddress}
            network={hardcodedNetwork}
            connectButton={<ConnectButton />}
          />
          <div className="w-full ">
            padding
          </div>
        </div>
      </section>
    )
  }
  
  export default Interface
  