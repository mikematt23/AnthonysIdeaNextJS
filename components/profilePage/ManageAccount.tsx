import { User } from "@prisma/client"
import {useState} from 'react'
interface props {
   user: User
}

const ManageAccount = ({user}:props)=>{
  const [level,setLevel] = useState<String>("") 
  if(user.level === 1){
    setLevel("Gold")
  }
  return(
    <>
     <p>You are a {level} memeber</p>
    </>
  )
}


export default ManageAccount