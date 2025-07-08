import Link from "next/link";

const NavBar = ()=>{
  return (
    <nav className="bg-yellow-200 p-3 mt-5 flex justify-evenly">
        <Link href="/">
         About
        </Link>
        <Link href="/login">
          Login
        </Link>
    </nav>
  )
}

export default NavBar