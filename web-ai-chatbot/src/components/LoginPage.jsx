import React, { useState } from 'react'

import { useNavigate } from 'react-router'

const LoginPage = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [showPwd,setShowPwd]=useState(false);

    const navigate=useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        const validateEmail= "user123"
        const validatePassword= "pass123"

        if(!email || !password){
            alert("please fill in all the fields");
            return;
        }

        if (email === validateEmail && password===validatePassword){
            localStorage.setItem("isAuthenticated", true)
            alert("login Succesfull")
            navigate("/main");
            
        }
        else{
            alert("Please type correct password")
        }
    }



    

  return (
    <>
   <div className="flex justify-center items-center min-h-screen  bg-gray-100">
      <form className="bg-white shadow-md rounded w-120 px-8 pt-6 pb-8 ">
    <h1 className='text-center text-3xl pb-4 font-semibold'>Log In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded w-full px-3 py-2 mb-4 placeholder-gray-500 hover:border-blue-400"
          />
        <input
          
          placeholder="Password"
          value={password}
          type={showPwd ? "text" : password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded w-full px-3 py-2 mb-4 placeholder-gray-500 hover:border-blue-400"
          />
           <button
                type="button"
                onClick={() => setShowPwd((s) => !s)}
                className="rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50"
                aria-pressed={showPwd}
                aria-label={showPwd ? "Hide password" : "Show password"}
              />
                {showPwd ? "Hide" : "Show"}
                
        <button
          onClick={handleSubmit}

          className="w-full bg-gray-300 text-blue py-2 rounded hover:bg-gray-600 "
          >
          Login
        </button>
      </form>
    </div>
            </>
)
}

export default LoginPage