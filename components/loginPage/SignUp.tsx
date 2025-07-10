'use client'
import Input from "../UI/Input"
import { useRef } from "react"
import SubmitButton from "../UI/SubmitButton"
import { useRouter } from "next/navigation"
import { useDispatch, UseDispatch, useSelector } from "react-redux"
import { AppDispatch } from "@/store/store"
import { logIn } from "@/store/slices/usersSlice"
import { current } from "@reduxjs/toolkit"

interface SignUpInterFace{
  handleUser : ()=> void
}

const SignUp = ({handleUser}: SignUpInterFace)=>{
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    
    const fullName = useRef<HTMLInputElement>(null)
    const userName = useRef<HTMLInputElement>(null)
    const Password = useRef<HTMLInputElement>(null)
    const confirmPassword = useRef<HTMLInputElement>(null)
    const confirmUserName = useRef<HTMLInputElement>(null)
    const address = useRef<HTMLInputElement>(null)
    const city = useRef<HTMLInputElement>(null)
    const State = useRef<HTMLInputElement>(null)

    const handleSubmit =async (e: React.FormEvent)=>{
      e.preventDefault()
      console.log(userName.current?.value , confirmUserName.current?.value)
      if(
        fullName.current?.value === "" ||
        userName.current?.value === '' ||
        Password.current?.value === '' ||
        confirmUserName.current?.value === '' ||
        confirmPassword.current?.value === '' ||
        address.current?.value === '' ||
        city.current?.value === '' ||
        State.current?.value === ''
      ){
        console.log("form must be filled out")
        return
      }
      if(userName.current?.value !== confirmUserName.current?.value){
        console.log("username must match")
        return
      }
      if(Password.current?.value !== confirmPassword.current?.value){
        console.log("passwords must match")
        return
      }
      const response = await fetch("/api/signUp",{
        method:"Post",
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          email:userName.current?.value,
          password: Password.current?.value,
          address: address.current?.value,
          city:city.current?.value,
          state:State.current?.value,
          fullName:fullName.current?.value
        })
      })
      const data = await response.json()
      if(data.message === "Already A user"){
        console.log("already a user")
        handleUser()
        return
      }
      dispatch(logIn({user:data.message.userId}))
      router.push("/profile")
    }
    
  return(
    <>
    <form onSubmit={handleSubmit} className="pt-4 flex flex-col items-center justify-center w-full h-[36rem] lg:h-[38rem]">
        
        <div className=" flex flex-col md:items-center items-start w-full">
          <label className="w-3/4 flex items-start" htmlFor="fullName"><span>Full Name</span></label>
          <Input id="fullName" name="fullName" placeholder="Full Name" type="text" ref={fullName}/>
        </div>

        <div className=" flex flex-col md:items-center items-start w-full pt-4">
          <label className="w-3/4 flex items-start" htmlFor="confirmUserName"><span>Confirm User Name</span></label>
          <Input id="confirmUserName" name="confirmUserName" placeholder="Confirm User Name" type="text" ref={userName}/>
        </div>
        
        <div className=" flex flex-col md:items-center items-start w-full pt-4">
          <label className="w-3/4 flex items-start" htmlFor="confirmUserName"><span>Confirm User Name</span></label>
          <Input id="confirmUserName" name="confirmUserName" placeholder="Confirm User Name" type="text" ref={confirmUserName}/>
        </div>
        
        <div className=" flex flex-col md:items-center items-center items-start  w-full pt-4">
          <label className="w-3/4 flex items-start" htmlFor="password"><span>Password</span></label>
          <Input id="password" name="password" placeholder="Password" type="password" ref={Password}/>
        </div> 
        
        <div className=" flex flex-col md:items-center items-center items-start  w-full pt-4">
          <label className="w-3/4 flex items-start" htmlFor="ConfirmPassword"><span>Confirm Password</span></label>
          <Input id="confirmPassword" name="conformPassword" placeholder="Confirm Password" type="password" ref={confirmPassword}/>
        </div>
        
        <div className=" flex flex-col md:items-center items-center items-start  w-full pt-4">
          <label className="w-3/4 flex items-start" htmlFor="address"><span>Address</span></label>
          <Input id="address" name="address" placeholder="Address" type="text" ref={address}/>
        </div>
        
        <div className=" flex flex-col md:items-center items-center items-start  w-full pt-4">
          <label className="w-3/4 flex items-start" htmlFor="city"><span>City</span></label>
          <Input id="city" name="city" placeholder="City" type="text" ref={city}/>
        </div>
        
        <div className=" flex flex-col md:items-center items-center items-start  w-full pt-4">
          <label className="w-3/4 flex items-start" htmlFor="state"><span>State</span></label>
          <Input id="state" name="state" placeholder="State" type="text" ref={State}/>
        </div>
        
        <SubmitButton type="submit">Sign Up</SubmitButton> 
    </form>
    </>
  )
}


export default SignUp