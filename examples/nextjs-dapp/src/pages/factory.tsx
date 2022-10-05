import Link from "next/link"

function Factory() {

    return (
      <section className="flex flex-col gap-4">
        <Link
          href="/"
        >
          <a className="text-blue-600 hover:underline">
            Back to Directory
          </a>
        </Link>                
        <h1>Factory</h1>
      </section>
    )
  }
  
  export default Factory
  