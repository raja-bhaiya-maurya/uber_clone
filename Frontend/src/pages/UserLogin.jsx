import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})


  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      email: email,
      password: password
    })

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
          <h3 className='text-lg font medium mb-2'>
            What's your Email?
          </h3>
          <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
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

          <button className='bg-[#111] text-white  font-semibold mb-3 rounded px-4 py-2  w-full  text-lg placeholder:text-base' >Login</button>


        </form>

        <p className='text-center'>New here? <Link to='/signup' className=' text-blue-600 ' >Create an Account</Link></p>

      </div>
      <div>
        <Link to='/captain-login' className='bg-[#785006] text-white  font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base flex justify-center items-center'>
          Sign in as Captain
        </Link>

      </div>
    </div>
  )
}

export default UserLogin
