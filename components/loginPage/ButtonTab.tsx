'use client'
import React from "react"
import { useState, useEffect } from "react"

interface ButtonTabInterface {
    children: React.ReactNode,
    isActive: boolean,
    onClick: ()=> void
}

const ButtonTab = ({children, isActive, onClick}:ButtonTabInterface)=>{
    const [style,setSyle] = useState("p-3 border border-blue w-1/2 flex justify-center rounded-sm")  
    useEffect(()=>{
      if(isActive){
        setSyle("p-3 border border-blue w-1/2 flex justify-center rounded-sm shadow-lg shadow-green-500/50 ")
      }else{
        setSyle("p-3 border border-blue w-1/2 flex justify-center rounded-sm")
      }
    },[isActive])
    return(
      <div className={style} onClick={onClick}>
        {children}
      </div>
    )
}


export default ButtonTab