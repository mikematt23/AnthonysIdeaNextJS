'use client'
import React,{ useRef, forwardRef } from "react"

type Props = React.InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement,Props>((props,ref)=>{
  return(
    <input ref={ref} {...props} className="border-2 rounded-sm border-green-500 w-full md:w-3/4 focus:outline-green-700"/>
  )
})


export default Input