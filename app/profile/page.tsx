'use client'
import { RootState } from "@/store/store"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { User } from "@prisma/client"
import Button from "@/components/UI/Button"
import ChangePassword from "@/components/profilePage/ChangePassword"
import ChangeAddress from "@/components/profilePage/ChangeAddress"
import ChangeContact from "@/components/profilePage/ChangeContact"

const ProfilePage = ()=>{

  const isLoggedIn = useSelector((state:RootState)=> state.user.isLoggedIn)

  
  const [fetchedUser,setFetchedUser] = useState<User>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [changePassword, setChangePassword] = useState<boolean>(false)
  const [changeAddress, setChangeAddress] = useState<boolean>(false)
  const [changeContact, setChangeContact] = useState<boolean>(false)

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
  },[isLoggedIn])

  function handleChangePassword(){
    setChangePassword(!changePassword)
  }
  async function handleContactChange(){
    setChangeContact(!changeContact)
  }
  async function handleAddressChange(){
    setChangeAddress(!changeAddress)
  }
  return(
    <>    
      {!isLoading && <div className="h-[35rem] flex flex-col justify-center items-center">
        <h2>Welcome back {fetchedUser?.fullName}</h2>
        {fetchedUser?.canSchedule && <h3>You have {fetchedUser?.ordersLeft} for this week</h3>}
        {!fetchedUser?.canSchedule && <div className="flex flex-col items-center">
          <h3>Once Appointment has been finish you can schedule serve.</h3>
          <h4>Check email for more information</h4>
        </div>}
        {(!changePassword || !changeContact || !changeAddress) && (<div className="pt-10 w-3/4 flex flex-col justify-center items-center">
           <div>
             <p>Address: {fetchedUser?.address} {fetchedUser?.city}, {fetchedUser?.state}</p>
             <p>email : {fetchedUser?.email}</p>
             <p>Number: </p>
           </div>
           <div className=" flex pt-5 w-full justify-evenly">
            <Button onClick={handleAddressChange}>Change Address</Button>
            <Button onClick={handleChangePassword}>Change Password</Button>
            <Button onClick={handleContactChange}>Change Contact</Button>
           </div>
        </div>)}
        {changePassword && <ChangePassword handleClose={handleChangePassword}/>}
        {changeAddress && <ChangeAddress handleClose={handleAddressChange}/>}
        {changeContact && <ChangeContact handleClose={handleContactChange}/>}
      </div>}
      {isLoading && <div>
        ...loading
      </div>}
    </>

  )
}

export default ProfilePage