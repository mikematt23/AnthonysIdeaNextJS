'use client'
import { RootState } from "@/store/store"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const ProfilePage = ()=>{
  const isLoggedIn = useSelector((state:RootState)=> state.user.isLoggedIn)
  const router = useRouter()
  useEffect(()=>{
    if(!isLoggedIn){
      router.push("/login")
    }
  },[isLoggedIn])
  return(
    <div>
        Profile
    </div>
  )
}

export default ProfilePage