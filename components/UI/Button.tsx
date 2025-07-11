import React from "react"
import { Heebo } from "next/font/google"
import { heebo } from "@/app/fonts"

interface ButtonInterface {
    children : React.ReactNode,
    onClick?: ()=> void
}
const Button = ({children, onClick}: ButtonInterface)=>{

  return <button className= {`${heebo.className} mt-3 rounded-sm p-2 bg-green-500 w-3/4`} onClick={onClick}>{children}</button>
}


export default Button