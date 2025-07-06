'use client'
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../store/store'
import NavBar from "@/components/UI/NavBar";
import Card from "@/components/UI/Card";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
        <NavBar/>
        </>
          <div className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center items-center pt-20`}>
            <Card>
              {children}
            </Card>
        </div>
      </PersistGate>
    </Provider>
  )
}