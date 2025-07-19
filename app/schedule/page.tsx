"use client"
import { RootState } from "@/store/store"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const SchedulePage = ()=>{
  const isLoggedIn = useSelector((state:RootState)=> state.user.isLoggedIn)
  const router = useRouter()
  useEffect(()=>{
    if(!isLoggedIn){
      router.push("/login")
    }
  },[isLoggedIn])
  return (
    <div>
      Schedule
    </div>
  )
}

export default SchedulePage