import React from "react"
interface Button{
    onClick?: ()=>void,
    children: React.ReactNode,
     type?: "button" | "submit" | "reset";
}

const SubmitButton = ({onClick, children, type}:Button)=>{
    return(
      <button type={type} className=" mt-5 bg-green-400 w-3/4 rounded-sm hover:bg-green-800 hover:shadow-lg shadow-green-500" onClick={onClick}>
        {children}
      </button>
    )
}

export default SubmitButton