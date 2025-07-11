'use client'
import { RootState } from "@/store/store"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { User } from "@prisma/client"
import { Heebo, Unbounded } from "next/font/google";
import Button from "@/components/UI/Button"
import ChangePassword from "@/components/profilePage/ChangePassword"
import ChangeAddress from "@/components/profilePage/ChangeAddress"
import ChangeContact from "@/components/profilePage/ChangeContact"


const unbounded = Unbounded({
  subsets:["latin"]
})
const heebo = Heebo({
  subsets:["latin"]
})


const ProfilePage = ()=>{

  const isLoggedIn = useSelector((state:RootState)=> state.user.isLoggedIn)

  
  const [fetchedUser,setFetchedUser] = useState<User>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [changePassword, setChangePassword] = useState<boolean>(false)
  const [changeAddress, setChangeAddress] = useState<boolean>(false)
  const [changeContact, setChangeContact] = useState<boolean>(false)
  const [changed, setChanged] = useState<boolean>(false)

  const router = useRouter()
  useEffect(()=>{
    if(!isLoggedIn){
      router.push("/login")
    }
    if(isLoggedIn){
      const fetchUser = async ()=>{
        const response = await fetch("/api/getUser",{
          method:"GET",
          headers:{
            "Content-type": "application/json"
          }
        })
        const data = await response.json()
        if(data.message === "error" || data.message === "User not found" ) return router.push("/") 
        setFetchedUser(data.message)
        setIsLoading(false)
      }
      fetchUser()
    }
  },[isLoggedIn, changed])

  function handleChangePassword(){
    setChangePassword(!changePassword)
  }
  async function handleContactChange(){
    setChangeContact(!changeContact)
  }
  async function handleAddressChange(){
    setChangeAddress(!changeAddress)
  }
  function handleChange (user:User){
    setFetchedUser(user)
  }
  return(
    <>    
      {!isLoading && <div className="h-[35rem] w-full flex flex-col justify-center items-center text-center">
        <h2 className={`${unbounded.className} text-md`}>Welcome back {fetchedUser?.fullName}</h2>
        {fetchedUser?.canSchedule && <h3 className={`${unbounded.className} `}>You have {fetchedUser?.ordersLeft} for this week</h3>}
        {!fetchedUser?.canSchedule && <div className=" m-5 ml-1 mr-1 flex flex-col items-center justify-center w-7/8">
          <h4 className={`${unbounded.className} text-sm`}>Once Appointment has been finish you can schedule service.</h4>
          <h4 className={`${unbounded.className} mt-2`}>Check email for more information</h4>
        </div>}
        {(!changePassword || !changeContact || !changeAddress) && (<div className="pt-10 w-full flex flex-col justify-center items-center">
           <div className="flex flex-col items-start">
             <p className={`${heebo.className}flex text-sm`}>Address: {fetchedUser?.address} {fetchedUser?.city}, {fetchedUser?.state}</p>
             <p className="flex text-sm">email: {fetchedUser?.email}</p>
             <p className="flex text-sm">Number: n  {fetchedUser?.phone}</p>
           </div>
           <div className="flex flex-col md:flex-row pt-5 w-full items-center md:justify-evenly">
            <Button onClick={handleAddressChange}>Change Address</Button>
            <Button onClick={handleChangePassword}>Change Password</Button>
            <Button onClick={handleContactChange}>Change Contact</Button>
           </div>
        </div>)}
        {changePassword && <ChangePassword handleChange={handleChange} handleClose={handleChangePassword}/>}
        {changeAddress && <ChangeAddress handleChange={handleChange} handleClose={handleAddressChange}/>}
        {changeContact && <ChangeContact handleChange={handleChange} handleClose={handleContactChange}/>}
      </div>}
      {isLoading && <div>
        ...loading
      </div>}
    </>

  )
}

export default ProfilePage