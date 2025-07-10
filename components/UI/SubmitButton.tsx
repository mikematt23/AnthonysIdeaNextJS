import React from "react"
interface Button{
  
    children: React.ReactNode,
     type?: "button" | "submit" | "reset";
}

const SubmitButton = ({ children, type}:Button)=>{
    return(
      <button type={type} className=" mt-5 bg-green-500 w-3/4 lg:w-2/4 rounded-sm hover:bg-green-600 hover:shadow-lg shadow-green-500">
        {children}
      </button>
    )
}

export default SubmitButton