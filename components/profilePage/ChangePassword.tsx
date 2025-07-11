'use client'
import React, {useRef} from "react"
import Input from "../UI/Input"
import SubmitButton from "../UI/SubmitButton"
import { User } from "@prisma/client"

interface PasswordChange{
    handleClose: ()=> void,
    handleChange: (user:User)=> void
}



const ChangePassword = ({handleClose,handleChange}:PasswordChange)=>{
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
      handleChange(data.message)
   }
   return(
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">Enter Password</label>
          <Input id="password" name="password" placeholder="Password" type="password" ref={password}/>
        </div>

        <div>
          <label htmlFor="newPassword">Enter Password</label>
          <Input id="newPassword" name="newPassword" placeholder="New Password" type="password" ref={newPassword}/>
        </div>

        <div>
          <label htmlFor="confrimNewPassword">Enter Password</label>
          <Input id="confirmNewPassword" name="confirmNewPassword" placeholder="New Password" type="password" ref={confirmNewPassword}/>
        </div>
        <SubmitButton type="submit">Change Password</SubmitButton>
      </form>
    </>
   )
}


export default ChangePassword