import React from 'react'
import { Link } from 'react-router-dom'

// let itemStyle = 
const Navbar = () => {
  return (
    <div className='mt-4'>
      <div className="py-3 flex justify-between items-center">
        <div className=''><img src="#" alt="logo" className='w-[120px]'/></div>
        <div className='flex gap-3 items-center'>
          <Link className='no-underline color-inherit font-regular text-md' to='/?cat=art'>ART</Link>
          <Link className='no-underline color-inherit font-regular text-md' to='/?cat=tech'>TECH</Link>
          <Link className='no-underline color-inherit font-regular text-md' to='/?cat=business'>BUSINESS</Link>
          <Link className='no-underline color-inherit font-regular text-md' to='/?cat=food'>FOOD</Link>
          <Link className='no-underline color-inherit font-regular text-md' to='/?cat=design'>DESIGN</Link>
          <span className='cursor-pointer font-semibold opacity-80 text-lg'>John</span>
          <span className='cursor-pointer font-semibold opacity-80 text-lg'>Logout</span>
          <span className='cursor-pointer font-semibold opacity-80 text-lg'>
            <Link to='/write' className='underline text-darkOrange hover:bg-lightOrange py-2 px-3 rounded-md hover:text-black underline-offset-2'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
