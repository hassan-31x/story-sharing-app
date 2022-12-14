import React from 'react'
import { Link } from 'react-router-dom'

let inputStyle = 'p-3 border-0 border-b-2 border-b-gray-300'
const Register = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-lightOrange flex-col'>
      <h1 className='text-5xl text-primaryColor mb-6'>Register</h1>
      <form className='flex flex-col p-12 bg-white gap-5 w-96'>
        <input type="text" placeholder='username' className={inputStyle} required />
        <input type="email" placeholder='email' className={inputStyle} required />
        <input type="password" placeholder='password' className={inputStyle} required />
        <button className='p-3 border-0 bg-primaryColor text-white cursor-pointer'>Register</button>
        <p className='text-md text-red-700 text-center'>Error</p>
        <span className='text-md text-center text-secondaryBlack'>Do you have an account? <Link to='/login'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register
