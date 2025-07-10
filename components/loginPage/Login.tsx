'use client'
import Input from "../UI/Input"
import { useRef } from "react"
import SubmitButton from "../UI/SubmitButton"
import { useDispatch, UseDispatch } from "react-redux"
import { logIn } from "@/store/slices/usersSlice"
import { AppDispatch } from "@/store/store"
import { useRouter } from "next/navigation"

const Login = ()=>{
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  const userName = useRef<HTMLInputElement>(null)
  const Password = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault()
    const response = await fetch("/api/logIn",{
      method:"POST",
      headers:{
        "Content-type" : "application/json"
      },
      body: JSON.stringify({
        email: userName.current?.value,
        password:Password.current?.value
      })
    })
    const data = await response.json()
    if(data.message === "no user"){
      console.log("no user")
      return
    }
    if(data.message === "no match"){
      console.log("password doesnt match")
      return
    }
    console.log(data)
    dispatch(logIn({user: data.message.userId}))
    router.push("/profile")
  }

  return(
    <>
    <form onSubmit={handleSubmit} className="pt-4 flex flex-col items-center justify-center w-full  h-[30rem]">
      <div className=" flex flex-col md:items-center items-start w-full">
        <label className="w-3/4 flex items-start" htmlFor="userName"><span>User Name</span></label>
        <Input id="userName" name="userName" placeholder="User Name" type="text" ref={userName}/>
      </div>
      <div className=" flex flex-col md:items-center items-center items-start  w-full pt-4">
        <label className="w-3/4 flex items-start" htmlFor="password"><span>Password</span></label>
        <Input id="password" name="password" placeholder="Password" type="password" ref={Password} />
      </div> 
        <SubmitButton type="submit">Login</SubmitButton> 
    </form>
    </>
  )
}


export default Login