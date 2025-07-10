"use client"
import React, {useRef} from "react"
import Input from "../UI/Input"
import SubmitButton from "../UI/SubmitButton"

interface AddressChange {
    handleClose: ()=> void
}

const ChangeAddress = ({handleClose}:AddressChange)=>{
  const address = useRef<HTMLInputElement>(null)
  const city = useRef<HTMLInputElement>(null)
  const state = useRef<HTMLInputElement>(null)

  async function handleSubmit (e:React.FormEvent){
    e.preventDefault()


    handleClose()
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="address">New Address</label>
          <Input id="address" name="address" placeholder="New Address" type="text" ref={address}/>
        </div>
       
        <div>
          <label htmlFor="city">New Address</label>
          <Input id="city" name="city" placeholder="City" type="text" ref={city}/>
        </div>

        <div>
          <label htmlFor="state">State</label>
          <Input id="state" name="state" placeholder="State" type="text" ref={state}/>
        </div>
        <SubmitButton type="submit">Change Address</SubmitButton>
      </form>
    </>
  )
}

export default ChangeAddress