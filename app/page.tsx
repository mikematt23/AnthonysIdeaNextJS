"use client";

import Image from "next/image";
import Card from "../components/UI/Card"
import { useEffect, useState } from "react";




export default function Home() {
  return (
      <main className="pt-3">
        <div className="flex pl-4">
          <h1 className="text-2xl lg:text-6xl w-1/2">TIRED OF CLEANING UP DOG POO?</h1>

        </div>
        <div className="pt-5 flex">
          <img src="/yellowArrow.png" alt="yellow right arrow" className="w-[100px] h-[50px] pl-2 lg:w-[700px] lg:h-[150px]"/>
          <h2 className="text-md lg:text-5xl w-1/2 lg:pt-5">LET POO-BE-GONE HANDLE IT FOR YOU</h2>
        </div>
        <div className="flex flex-col items-center justify-center pt-5">
          <ul className="list-disc ">
            <li className="text-xs lg:text-lg">Weekly or Bi-weekly Dog waste removal</li>
            <li className="text-xs lg:text-lg">Reliable, Friendly, and Affordable</li>
            <li className="text-xs lg:text-lg">Perfect for busy dog owners</li>
          </ul>
        </div>
      </main>
  );
}
