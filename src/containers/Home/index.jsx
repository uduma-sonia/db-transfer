import React from 'react'
import dynamic from 'next/dynamic'

const [Navbar, Hero, Databases, Footer] = [
  dynamic(() => import('../Layout/Navbar')),
  dynamic(() => import('@components/Home/Hero')),
  dynamic(() => import('@components/Home/Databases')),
  dynamic(() => import('../Layout/Footer')),
]

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Databases />
      <Footer />
    </div>
  )
}
