'use client'
import ButtonTab from "@/components/loginPage/ButtonTab"
import { useState} from "react"
import Login from "@/components/loginPage/Login"
import SignUp from "@/components/loginPage/SignUp"

const LoginPage = ()=>{
  //state
    const [loginActive,setLoginActive] = useState(true)
  const [signUpActive, setSignUpActive] = useState(false)

  const handleActiveTab = ()=>{
    setLoginActive(signUpActive)
    setSignUpActive(loginActive)
  }

  return(
    <div className="w-full flex flex-col items-center">
      <div className="flex w-full flex  items-center">
          <div className="flex w-full">
            <ButtonTab onClick={handleActiveTab} isActive={loginActive}>Log In</ButtonTab>
            <ButtonTab onClick={handleActiveTab} isActive={signUpActive}>Sign Up</ButtonTab>
          </div>
      
      </div>
      <div className="w-3/4 flex flex-col justify-center items-center ">
        {loginActive && <Login/>}
        {!loginActive && <SignUp handleUser={handleActiveTab}/>}
      </div>
    </div>
  )
}

export default LoginPage