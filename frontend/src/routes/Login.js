import React from 'react'
import { Link } from 'react-router-dom'

let inputStyle = 'p-3 border-0 border-b-2 border-b-gray-300'
const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-lightOrange flex-col'>
      <h1 className='text-5xl text-darkOrange mb-6'>Login</h1>
      <form className='flex flex-col p-12 bg-white gap-5 w-96'>
        <input type="text" placeholder='username' className={inputStyle} />
        <input type="password" placeholder='password' className={inputStyle} />
        <button className='p-3 border-0 bg-primaryColor text-white cursor-pointer'>Login</button>
        <p className='text-md text-red-700 text-center'>Error</p>
        <span className='text-md text-center text-secondaryBlack'>Don't have an account? <Link to='/register'>Register</Link></span>
      </form>
    </div>
  )
}

export default Login
