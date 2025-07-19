import React, {useRef} from "react"
import Input from "../UI/Input"
import SubmitButton from "../UI/SubmitButton"
import CancelButton from "../UI/CancelButton"
import { User } from "@prisma/client"

interface ContactChange{
    handleClose: ()=>void,
    handleChange : (user:User)=>void
}

const ChangeContact = ({handleClose, handleChange}:ContactChange)=>{

  const phone = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)  

  async function handleSubmit(e:React.FormEvent){
    e.preventDefault()
    
    const response = await fetch("/api/changeContact",{
        method:"POST",
        headers:{
            "Content-type": "application/json"
        },
        body : JSON.stringify({
            phone:phone.current?.value,
            email: email.current?.value
        })
    })

    const data = await response.json()
    if(data.message === "error"){
        console.log("error")
        return 
    }
    if(data.message === "no user"){
        console.log("no user")
        return
    }
    handleClose()
    handleChange(data.message)
  }
  return(
    <>
      <form onSubmit={handleSubmit} className="pt-5 flex flex-col items-center justify-center w-full h-[20rem]">
        <div className=" flex flex-col md:items-center items-start w-full">
          <label className="w-3/4 flex items-start" htmlFor="phone"><span>New Phone Number</span></label>
          <Input id="phone" name="phone" placeholder="Phone Number" type="tel" ref={phone}/>
        </div>

        <div className=" flex flex-col md:items-center items-start w-full">
          <label className="w-3/4 flex items-start" htmlFor="email"><span>New email Number</span></label>
          <Input id="email" name="eamil" placeholder="Email" type="text" ref={email}/>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center">
          <SubmitButton type="submit">Change Contact</SubmitButton>
          <CancelButton onClick={handleClose}>Cancel</CancelButton>
        </div>
      </form>
    </>
  )
}


export default ChangeContact