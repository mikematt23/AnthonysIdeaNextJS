import React from "react"

interface CardInterface {
  children : React.ReactNode
}

const Card = ({children}:CardInterface)=>{
  return(
    <div className="bg-gray-100 w-3/4 h-[40rem] md:h-[45rem] rounded-lg">
      {children}
    </div>
  )
}

export default Card