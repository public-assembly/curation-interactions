import Link from "next/link"
import { RawDisplayer } from "../components"
import { useGetEditionsListings } from "@public-assembly/curation-interactions"

function GetListings() {
  const { rawListingsData, sanitizedListingsData } = useGetEditionsListings('0x52a64dA96d0A0078bEAD9158198f3881c4FCD066')
  return (
    <section className="flex flex-col gap-4">
      <Link href="/">
        <a className="text-blue-600 hover:underline">
          Back to Directory
        </a>
      </Link>                
      <h1 className="flex flex-row gap-2">
        <span className="raw-displayer bg-gray-200 flex items-center px-2 rounded-md">
          <code><pre>useGetEditionsListings</pre></code>
        </span>
        <span>Hook:</span>
      </h1>
      <h2>sanitizedListings:</h2>
      <RawDisplayer data={sanitizedListingsData} />
      <h2>rawListingsData:</h2>
      <RawDisplayer data={rawListingsData} />
    </section>
  )
}

export default GetListings
  