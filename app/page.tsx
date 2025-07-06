"use client";

import Image from "next/image";
import Card from "../components/UI/Card"
import { useEffect, useState } from "react";




export default function Home() {
  const [message,setMessage] = useState('')
  useEffect(()=>{
    async function fetchData(){
      const responsae = await fetch(`/api/hello`)
      const json = await responsae.json()
      setMessage(json.message)
    }
    fetchData()
  },[])
  console.log(message)
  return (
      <main >
        <h1>home</h1>
      </main>
  );
}
