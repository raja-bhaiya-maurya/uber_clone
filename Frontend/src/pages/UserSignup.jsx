import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})
  const [Firstname, setFirstname] = useState('')
  const [Lastname, setLastname] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      email: email,
      password: password
    })
    setFirstname('')
    setLastname('')
    setEmail('')
    setPassword('')
  }
  return (
   
      <div className='p-7 h-screen flex flex-col  justify-between'>
        <div>
          <img className=' w-14 mb-10 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/500px-Uber_logo_2018.svg.png" alt="UberLogo" />

          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <h3 className='text-base font medium mb-2'>
              What's your Name?
            </h3>
            <div className=' flex gap-3 mb-7'>
              <input className=' bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-base placeholder:text-base '
                type="text"
                required
                value={Firstname}
                onChange={(e) => {
                  setFirstname(e.target.value)
                }

                }

                placeholder='Firstname' />
              <input className=' bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-base placeholder:text-base'
                type="text"
                required
                value={Lastname}
                onChange={(e) => {
                  setLastname(e.target.value)
                }}

                placeholder='Lastname' />
            </div>
            <h3 className='text-lg font medium mb-2'>
              What's your Email?
            </h3>
            <input className=' bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }
              }
              placeholder='Enter your email' />
            <h3 className='text-lg font medium mb-2'>
              What's your password?
            </h3>
            <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }
              }
              placeholder='Enter the password' />

            <button className='bg-[#111] text-white  font-semibold mb-3 rounded px-4 py-2  w-full  text-lg placeholder:text-base' >Create User Account</button>


          </form>

          <p className='text-center'>Already have Account? <Link to='/login' className=' text-blue-600 ' >login here</Link></p>

        </div>
        <div>
          <Link to='/captain-login' className='bg-[#785006] text-white  font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base flex justify-center items-center'>
            Sign in as Captain
          </Link>

        </div>
      </div>
    
  )
}

export default UserSignup
