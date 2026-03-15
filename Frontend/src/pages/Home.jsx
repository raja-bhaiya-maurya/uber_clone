import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      <div className='  bg-right  bg-cover  bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen flex pt-5 justify-between flex-col w-screen bg-red-400'>
        <img className=' w-14 ml-8 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/500px-Uber_logo_2018.svg.png" alt="UberLogo" />
        <div className='bg-white pb-7 py-4 px-4 '>
          <h2 className='font-bold text-3xl'>
            Get started with Uber

          </h2 >
          <Link to='/login' className=' items-center flex justify-center  w-full bg-black text-white py-3 rounded mt-5'> continue </Link>
        </div>
      </div>



    </div>
  )
}

export default Home
