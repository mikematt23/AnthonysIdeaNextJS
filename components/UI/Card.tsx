import React from "react"

interface CardInterface {
  children : React.ReactNode
}

const Card = ({children}:CardInterface)=>{
  return(
    <div className="bg-gray-100 w-3/4 h-[45rem] rounded-lg flex justify-center pt-5">
      {children}
    </div>
  )
}

export default Card