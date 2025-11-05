import Link from "next/link";

export default function Navbar() {
  return (

    <nav className="flex justify-center items-center p-4 bg-gray-800 text-white gap-4">
        <Link href="/">Home</Link>
        <Link href="/companies">Companies</Link>
    </nav>
  )
}