import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>

        <div className="flex justify-between items-center border-b border-gray-300 py-4 px-6">        
            <ul className="flex space-x-4 text-lg gap-2 items-center ">      
                <Link href="/"><h1 className="text-4xl font-bold">Touch Rugby Company</h1></Link>
                <Link href="/home">Home</Link>
                <Link href="/about">Fixtures</Link>
                <Link href="/contact">Register</Link>
                <Link href="/payments">Payments</Link>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
