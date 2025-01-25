import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Header/>
      <Link href='/login'>click me</Link>
  </div>
  )
}

export default page
