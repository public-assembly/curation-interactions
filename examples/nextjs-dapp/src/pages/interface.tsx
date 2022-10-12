import Link from "next/link"
import { CurationInterface } from "@public-assembly/curation-interactions"
import { ConnectButton } from "../components/ConnectButton"

function Interface() {
  const hardcodedCurationContractAddress = "0x52a64dA96d0A0078bEAD9158198f3881c4FCD066"
  const hardcodedNetwork = 1
  
  return (
    <section className="flex flex-col gap-4">
      <Link href="/">
        <a className="text-blue-600 hover:underline">
          Back to Directory
        </a>
      </Link>              
      <h1>Interface</h1>
      <div className="bg-[#ff89de] p-[24px]">
        <CurationInterface
          curationContractAddress={hardcodedCurationContractAddress}
          network={hardcodedNetwork}
          connectButton={<ConnectButton />}
          closeButton={<div>Close</div>}
        />
      </div>
    </section>
  )
}
  
export default Interface
