import Link from "next/link";

const NavBar = ()=>{
  return (
    <nav className="bg-yellow-200 p-3 mt-5 flex justify-evenly">
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          about
        </Link>
    </nav>
  )
}

export default NavBar