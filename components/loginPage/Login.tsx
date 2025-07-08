'use client'
import Input from "../UI/Input"
import { useState, useRef } from "react"
import SubmitButton from "../UI/SubmitButton"

const Login = ()=>{

  const userName = useRef<HTMLInputElement>(null)
  const Password = useRef<HTMLInputElement>(null)

  const handleSubmit = ()=>{
    console.log(userName.current?.value, Password.current?.value)
  }

  return(
    <>
    <form className="pt-4 flex flex-col items-center justify-center w-full  h-[15rem]">
      <div className=" flex flex-col md:items-center items-start w-full">
        <label className="w-3/4 flex items-start" htmlFor="userName"><span>User Name</span></label>
        <Input id="userName" name="userName" placeholder="User Name" type="text" ref={userName}/>
      </div>
      <div className=" flex flex-col md:items-center items-center items-start  w-full pt-4">
        <label className="w-3/4 flex items-start" htmlFor="password"><span>Password</span></label>
        <Input id="password" name="password" placeholder="Password" type="password" ref={Password} />
      </div> 
    </form>
    <SubmitButton onClick={handleSubmit}>Login</SubmitButton> 
    </>
  )
}


export default Login