import Link from "next/link"
import { ValidationTest } from '@public-assembly/curation-interactions'
import { useAccount } from 'wagmi'

const hardcodedCuratorAddress = "0x9c1eD19E7015c40716141039f8Ae43cEACCF30fd"

const goerliNetwork = 4

// const mainnetNetwork = 1


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
          network={goerliNetwork}
        />        
      </section>
    )
  }
  
  export default Validation
  