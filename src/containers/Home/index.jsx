import React from 'react'
import Navbar from '../Layout/Navbar'
import dynamic from 'next/dynamic'

const [Hero] = [dynamic(() => import('@components/Home/Hero'))]

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  )
}
