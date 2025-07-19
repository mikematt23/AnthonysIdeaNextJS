"use client"
import React, {useRef} from "react"
import Input from "../UI/Input"
import SubmitButton from "../UI/SubmitButton"
import CancelButton from "../UI/CancelButton"
import { User } from "@prisma/client"

interface AddressChange {
    handleClose: ()=> void,
    handleChange: (user:User)=>void
}

const ChangeAddress = ({handleClose, handleChange}:AddressChange)=>{
  const address = useRef<HTMLInputElement>(null)
  const city = useRef<HTMLInputElement>(null)
  const state = useRef<HTMLInputElement>(null)

  async function handleSubmit (e:React.FormEvent){
    e.preventDefault()
    
    const response = await fetch("/api/changeAddress",{
      method: "POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        city: city.current?.value,
        address:address.current?.value,
        state:state.current?.value
      })
    })
    const data = await response.json()
    handleClose()
    handleChange(data.message)
  }

  return(
    <>
      <form onSubmit={handleSubmit} className="pt-4 flex flex-col items-center justify-center w-full">
        <div className=" flex flex-col md:items-center items-start w-full">
          <label className="w-3/4 flex items-start"  htmlFor="address"><span>New Address</span></label>
          <Input id="address" name="address" placeholder="New Address" type="text" ref={address}/>
        </div>
       
        <div className="pt-4 flex flex-col md:items-center items-start w-full">
          <label className="w-3/4 flex items-start"  htmlFor="city"><span>New City</span></label>
          <Input id="city" name="city" placeholder="City" type="text" ref={city}/>
        </div>

        <div className="pt-4 flex flex-col md:items-center items-start w-full">
          <label className="w-3/4 flex items-start"  htmlFor="state"><span>State</span></label>
          <Input id="state" name="state" placeholder="State" type="text" ref={state}/>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center">
           <SubmitButton type="submit">Change Address</SubmitButton>
           <CancelButton onClick={handleClose}>Cancel</CancelButton>
        </div>
      </form>
    </>
  )
}

export default ChangeAddress