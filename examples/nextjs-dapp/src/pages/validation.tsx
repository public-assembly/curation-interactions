import Link from "next/link"
import { ValidationTest } from '@public-assembly/curation-interactions'
import { useAccount } from 'wagmi'

const hardcodedCuratorAddress = "0xEd824d01B337Fb423554185464dbF7D85034446B"

const network = 5

// const network = 1


function Validation() {

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
        <h1>Validation</h1>
        <ValidationTest 
          userAddress={currentUserAddress}       
          curationContractAddress={hardcodedCuratorAddress}
          network={network}
        />        
      </section>
    )
  }
  
  export default Validation
  