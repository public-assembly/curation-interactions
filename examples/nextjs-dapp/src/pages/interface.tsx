import Link from "next/link"
import { CurationInterface } from "@public-assembly/curation-interactions"

function Interface() {
  const hardcodedCurationContractAddress = "0xEd824d01B337Fb423554185464dbF7D85034446B"
  const hardcodedNetwork = 4
  
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
        />
      </div>
    </section>
  )
}
  
export default Interface
