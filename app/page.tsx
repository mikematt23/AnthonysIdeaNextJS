"use client";

import Image from "next/image";
import Card from "../components/UI/Card"
import { useEffect, useState } from "react";
import { Unbounded } from "next/font/google";
import { useSelector } from "react-redux"
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";

const unbounded = Unbounded({
  subsets:["latin"]
})


export default function Home() {
  const isLoggedIn = useSelector((state:RootState)=> state.user.isLoggedIn)
  const router = useRouter()
  useEffect(()=>{
    if(isLoggedIn){
      router.push("/profile")
    }
  },[])
  return (
      <main className="pt-3">
        <div className="flex pl-4">
          <h1 className={`${unbounded.className} text-xl lg:text-6xl w-1/2 md:pl-8`}>TIRED OF CLEANING UP DOG POO?</h1>
          <img className="w-[150px] h-[75px] pl-2 lg:w-[900px] lg:h-[150px]" src="/download"/>
        </div>
        <div className="pt-8 flex">
          <img src="/yellowArrow.png" alt="yellow right arrow" className="w-[150px] h-[75px] pl-2 lg:w-[900px] lg:h-[150px]"/>
          <h2 className={`${unbounded.className} text-md lg:text-5xl w-1/2 lg:pt-5`}>POO-BE-GONE CAN HANDLE IT FOR YOU</h2>
        </div>
        <div className="flex flex-col items-center justify-center pt-15">
          <ul className="list-disc ">
            <li className="text-xs lg:text-lg">Weekly or Bi-weekly Dog waste removal</li>
            <li className="text-xs lg:text-lg">Reliable, Friendly, and Affordable</li>
            <li className="text-xs lg:text-lg">Perfect for busy dog owners</li>
          </ul>
        </div>
      </main>
  );
}
