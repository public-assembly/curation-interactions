import { usePrepareContractWrite, useContractWrite } from "wagmi"
import * as abi from "@public-assembly/curation-protocol/dist/artifacts/out/Curator.sol/Curator.json"

const curatorAddress = "0xEd824d01B337Fb423554185464dbF7D85034446B"

const listings = [
    Object.values({
        curatedAddress: "0x74e65ee234d93116ae224d77fb7fb813ba360e8a",
        selectedTokenId: 0,
        curator: "0x806164c929Ad3A6f4bd70c2370b3Ef36c64dEaa8",
        curationTargetType: 1,
        sortOrder: 0,
        hasTokenId: false,
        chainId: 4,
    }),    
]

function Test() {

    const { config: addListingConfig, error: addListingConfigError } =
    usePrepareContractWrite({
      addressOrName: curatorAddress,
      contractInterface: abi.abi,
      functionName: 'addListings',
      args: [listings],
    })

    console.log("addlisting config", addListingConfig)
    
    const {write } = useContractWrite(addListingConfig)    

  return (
    <section className="flex flex-col gap-4">   
        <button
            className="bg-black text-white w-fit p-2"
            onClick={() => write?.()}
        >
            Add Listing
        </button>    
        <div>
            {JSON.stringify(listings)}
        </div>
        <div>
            {JSON.stringify(addListingConfig)}
        </div>
        <div>
            {JSON.stringify(addListingConfigError)}
        </div>        
    </section>
  )
}

export default Test
