import { heebo } from "@/app/fonts"
import React from "react"

interface Props{
    onClick: ()=>void,
    children: React.ReactNode
}

const CancelButton = ({onClick,children}:Props)=>{
   return(
    <button className= 'md:ml-2 mt-5 bg-yellow-400 w-3/4 lg:w-2/4 rounded-sm hover:bg-yellow-600 hover:shadow-lg shadow-yellow-500' onClick={onClick}>{children}</button>
   )
}

export default CancelButton