import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

let inputStyle = 'p-3 border-0 border-b-2 border-b-gray-300'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      setError(null)
      await axios.post('/auth/register', inputs)
      navigate('/login')
    }
    catch (err) {
      setError(err.response.data)
    }

  }


  return (
    <div className='flex items-center justify-center h-screen bg-lightOrange flex-col'>
      <h1 className='text-5xl text-primaryColor mb-6'>Register</h1>
      <form className='flex flex-col p-12 bg-white gap-5 w-96'>
        <input type="text" placeholder='username' className={inputStyle} name='username' required onChange={handleChange} />
        <input type="email" placeholder='email' className={inputStyle} name='email' required onChange={handleChange} />
        <input type="password" placeholder='password' className={inputStyle} name='password' required onChange={handleChange} />
        <button className='p-3 border-0 bg-primaryColor text-white cursor-pointer' onClick={handleSubmit}>Register</button>
        {error && <p className='text-md text-red-700 text-center'>{error}</p>}
        <span className='text-md text-center text-secondaryBlack'>Do you have an account? <Link to='/login'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register
