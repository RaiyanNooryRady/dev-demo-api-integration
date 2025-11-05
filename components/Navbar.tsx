"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (

    <nav className="flex justify-center items-center p-4 bg-gray-800 text-white gap-4">
        <Link href="/" className={pathname==="/"?"border-b-2 border-white":""}>Home</Link>
        <Link href="/companies" className={pathname==="/companies"?"border-b-2 border-white":""}>Companies</Link>
    </nav>
  )
}