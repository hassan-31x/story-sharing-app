import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/authContext.js'

// let itemStyle = 
const Navbar = () => {

  const location = useLocation()
  const write = location.pathname

  const {currentUser, logout} = useContext(AuthContext)
  
  return (
    <div className='mt-4'>
      <div className="py-3 flex justify-between items-center">
        <Link to='/'><div className=''><img src="#" alt="logo" className='w-[120px]'/></div></Link>
        <div className='flex gap-3 items-center'>
          <Link className='no-underline color-inherit font-regular text-md' to='/?cat=art'>ART</Link>
          <Link className='no-underline color-inherit font-regular text-md' to='/?cat=tech'>TECH</Link>
          <Link className='no-underline color-inherit font-regular text-md' to='/?cat=business'>BUSINESS</Link>
          <Link className='no-underline color-inherit font-regular text-md' to='/?cat=food'>FOOD</Link>
          <Link className='no-underline color-inherit font-regular text-md' to='/?cat=design'>DESIGN</Link>
          <span className='cursor-pointer font-semibold opacity-80 text-lg'>{currentUser?.username}</span>
          {currentUser ? 
          <span className='cursor-pointer font-semibold opacity-80 text-lg' onClick={logout}>Logout</span> :
          <Link className='cursor-pointer font-semibold opacity-80 text-lg' to='/login'>Login</Link>}
          <span className='cursor-pointer font-semibold opacity-80 text-lg'>
            <Link to={currentUser ? '/write' : '/login'} className={`underline text-darkOrange hover:bg-lightOrange py-2 px-3 rounded-md hover:text-black underline-offset-2 ${write === '/write' ? 'hidden' : 'block'}`}>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
