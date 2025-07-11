import React, {useRef} from "react"
import Input from "../UI/Input"
import SubmitButton from "../UI/SubmitButton"
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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="phone">New Phone Number</label>
          <Input id="phone" name="phone" placeholder="Phone Number" type="tel" ref={phone}/>
        </div>

        <div>
          <label htmlFor="email">New Phone Number</label>
          <Input id="email" name="eamil" placeholder="Email" type="text" ref={email}/>
        </div>
        <SubmitButton type="submit">Change Contact</SubmitButton>
      </form>
    </>
  )
}


export default ChangeContact