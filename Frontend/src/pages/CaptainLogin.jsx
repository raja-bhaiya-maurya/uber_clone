import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
   const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})
  
  
    const submitHandler=(e)=>{
      e.preventDefault()
      setCaptainData({
        email:email,
        password:password
      })
      
      setEmail('')
      setPassword('')
    }
  return (
    <div className='p-7 h-screen flex flex-col  justify-between'>
       <div>
         <img className=' w-14 mb-10 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/500px-Uber_logo_2018.svg.png" alt="UberLogo" />

     <form onSubmit={(e)=>{
      submitHandler(e)
     }}>
 <h3 className='text-base font medium mb-2'>
        What's your Name?
      </h3>
      <div className=' flex gap-3 mb-7'>
        <input className=' bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm '
       type="text" 
       required 
      
       placeholder='Firstname' />
       <input className=' bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm'
       type="text" 
       required 
      
       placeholder='Lastname' />
      </div>
      

      <h3 className='text-base font medium mb-2'>
        What's your Email?
      </h3>
      <input className=' bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
       type="email" 
       required 
      placeholder='Enter your email' />
      <h3  className='text-base font medium mb-2'>
        What's your password?
      </h3>
      <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
        type="password"
         required 
       
         placeholder='Enter the password' />
      
      <button className='bg-[#111] text-white  font-semibold mb-3 rounded px-4 py-2  w-full  text-base ' >Login</button>


     </form>
       
      <p className='text-center'>New here? <Link  to='/captain-signup'className=' text-blue-600 ' >Register as a Captain</Link></p>

       </div>
       <div>
        <Link to='/login' className='bg-[#117a07] text-white  font-semibold mb-7 rounded px-4 py-2  w-full text-base  flex justify-center items-center'>
          Sign in as User
        </Link>
          
       </div>
    </div>
  )
}

export default CaptainLogin
