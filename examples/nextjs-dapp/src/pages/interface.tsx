import Link from "next/link"
import { CurationInterface } from "@public-assembly/curation-interactions"
import { ConnectButton } from "../components/ConnectButton"

function Interface() {
  const hardcodedCurationContractAddress = "0x9364E704f02a7CC69FE207cfD7FB03737642F0f8"
  const hardcodedNetwork = 5
  
  return (
    <section className="flex flex-col gap-4">
      <Link href="/">
        <a className="text-blue-600 hover:underline">
          Back to Directory
        </a>
      </Link>              
      <h1>Interface</h1>
      <div className="flex flex-row flex-wrap justify-center">
        <CurationInterface
          curationContractAddress={hardcodedCurationContractAddress}
          network={hardcodedNetwork}
          connectButton={<ConnectButton />}
        />
      </div>
    </section>
  )
}
  
export default Interface
