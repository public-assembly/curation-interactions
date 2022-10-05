import Link from "next/link"

function Page() {

  return (
    <section className="flex flex-col gap-4">
      <h1>Directory</h1>
      <Link
        href="/validation"
      >
        <a className="text-blue-600 hover:underline">
          Validation
        </a>
      </Link>
      <Link
        href="/functions"
      >
        <a className="text-blue-600 hover:underline">
          Functions
        </a>
      </Link>      
      <Link
        href="/interface"
      >
        <a className="text-blue-600 hover:underline">
          Interface
        </a>
      </Link>    
      <Link
        href="/factory"
      >
        <a className="text-blue-600 hover:underline">
          Factory
        </a>
      </Link>                
    </section>
  )
}

export default Page
