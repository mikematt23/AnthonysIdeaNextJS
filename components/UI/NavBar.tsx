'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { logOut } from "@/store/slices/usersSlice";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight:['400'],
  subsets:['latin']
})

const NavBar = ()=>{
  const [changeNav,setChangeNav] = useState(false)
  const isLoggedIn = useSelector((state: RootState)=> state.user.isLoggedIn)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=>{
    if(isLoggedIn){
      setChangeNav(true)
    }else{
      setChangeNav(false)
    }
  },[isLoggedIn])
  const handleLogOut = ()=>{
    dispatch(logOut())
  }
  return (
    <nav className="bg-yellow-200 p-3 mt-5 flex justify-evenly">
        {!changeNav &&<Link className={`${bebas.className} text-2xl`} href="/">
         About
        </Link>}
        {!changeNav &&<Link className={`${bebas.className} text-2xl`} href="/login">
          Login
        </Link>}
        {changeNav && <Link className={`${bebas.className} text-2xl`} href="/profile">
          Profile
        </Link>}
        {changeNav && <Link className={`${bebas.className} text-2xl`} href="/schedule">
          Schedule
        </Link>}
        {changeNav && <a className={`${bebas.className} text-2xl`} onClick={handleLogOut}>Log Out</a>}
    </nav>
  )
}

export default NavBar