import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
     <div className=' text-white bg-black flex'>
          <ul>
          <Link href='/'>
           <li className='pt-1'>
              <Image
              src={'/logo.png'}
              alt="logo"
              height={50}
              width={50}
              ></Image>
            </li></Link>
              </ul>
          <ul className='ml-auto flex space-x-6 pr-6 pt-4 pb-5'>
           <Link href='/'>  <li>Home</li>     </Link>
           <Link href='#'>  <li>AboutUs</li>  </Link>
           <Link href='#'>  <li>Blog</li>     </Link >
          </ul>
    </div>
  )
}

export default Header
