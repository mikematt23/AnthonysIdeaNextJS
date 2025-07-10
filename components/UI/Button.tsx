import React from "react"

interface ButtonInterface {
    children : React.ReactNode,
    onClick?: ()=> void
}
const Button = ({children, onClick}: ButtonInterface)=>{

  return <button className= " rounded-sm p-2 bg-green-500 w-1-4" onClick={onClick}>{children}</button>
}


export default Button