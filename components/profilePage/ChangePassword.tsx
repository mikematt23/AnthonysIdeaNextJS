'use client'
import React, {useRef} from "react"
import Input from "../UI/Input"
import SubmitButton from "../UI/SubmitButton"
import CancelButton from "../UI/CancelButton"
import { User } from "@prisma/client"

interface PasswordChange{
    handleClose: ()=> void,

}



const ChangePassword = ({handleClose}:PasswordChange)=>{
   const password = useRef<HTMLInputElement>(null)
   const newPassword = useRef<HTMLInputElement>(null)
   const confirmNewPassword = useRef<HTMLInputElement>(null)

   async function handleSubmit(e:React.FormEvent){
      e.preventDefault()
      const response = await fetch("/api/changePassword",{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body: JSON.stringify({
          password: password.current?.value,
          updatedPassword: newPassword.current?.value
        })
      })
      const data = await response.json()
      handleClose()
   }
   return(
    <>
      <form className="pt-5 flex flex-col items-center justify-center w-full h-[20rem]" onSubmit={handleSubmit}>
        <div className=" flex flex-col md:items-center items-start w-full">
          <label className="w-3/4 flex items-start" htmlFor="password"><span>Enter Password</span></label>
          <Input id="password" name="password" placeholder="Password" type="password" ref={password}/>
        </div>

        <div className="flex flex-col md:items-center items-start w-full">
          <label className="w-3/4 flex items-start" htmlFor="newPassword"><span>Enter New Password</span></label>
          <Input id="newPassword" name="newPassword" placeholder="New Password" type="password" ref={newPassword}/>
        </div>

        <div className="flex flex-col md:items-center items-start w-full">
          <label className="w-3/4 flex items-start"  htmlFor="confrimNewPassword">Confirm New Password</label>
          <Input id="confirmNewPassword" name="confirmNewPassword" placeholder="New Password" type="password" ref={confirmNewPassword}/>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center">
          <SubmitButton type="submit">Change Password</SubmitButton>
          <CancelButton onClick={handleClose}>Cancel</CancelButton>
        </div>
      </form>
    </>
   )
}


export default ChangePassword