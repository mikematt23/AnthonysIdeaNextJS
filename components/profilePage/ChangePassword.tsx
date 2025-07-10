'use client'
import React, {useRef} from "react"
import Input from "../UI/Input"
import SubmitButton from "../UI/SubmitButton"

interface PasswordChange{
    handleClose: ()=> void
}



const ChangePassword = ({handleClose}:PasswordChange)=>{
   const password = useRef<HTMLInputElement>(null)
   const newPassword = useRef<HTMLInputElement>(null)
   const confirmNewPassword = useRef<HTMLInputElement>(null)

   async function handleSubmit(e:React.FormEvent){
      e.preventDefault()

      
      handleClose()
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