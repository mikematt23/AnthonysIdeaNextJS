'use client';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import { heebo, bebas } from '@/app/fonts';

interface ModalInterface {
    isOpen: Boolean,
    onClose:()=>void,
    message: String
}

const Modal = ({isOpen, onClose, message}: ModalInterface)=>{
  const [mount, setMount] = useState<Boolean>(false)
  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;
  const modalRoot = document.getElementById("modal");
  if (!modalRoot || !isOpen) return null;
  return (
     ReactDOM.createPortal(<div className='flex flex-col justify-center items-center fixed w-full  h-full bg-gray-600/75 '>
       <div className='rounded-md bg-yellow-200/85 w-3/4 md:w-1/2 h-[20rem] flex flex-col justify-center items-center'>
         <p className={`${bebas.className} text-4xl`}>{message}</p>
         <div className='pt-5 flex justify-center w-1/2 md:w-1/5'>
           <Button onClick={onClose}>Close</Button>
         </div>
       </div>
     </div>,modalRoot)
  )
}

export default Modal