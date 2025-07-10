import React, {useRef} from "react"
import Input from "../UI/Input"
import SubmitButton from "../UI/SubmitButton"

interface ContactChange{
    handleClose: ()=>void
}

const ChangeContact = ({handleClose}:ContactChange)=>{

  const phone = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)  

  async function handleSubmit(e:React.FormEvent){
    e.preventDefault()


    handleClose()
  }
  return(
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="phone">New Phone Number</label>
          <Input id="phone" name="phone" placeholder="Phone Number" type="phone" ref={phone}/>
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