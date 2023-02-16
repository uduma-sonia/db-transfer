import React from 'react'
import dynamic from 'next/dynamic'

const [Navbar, ImportForm] = [
  dynamic(() => import('../Layout/Navbar')),
  dynamic(() => import('@components/MySql/ImportForm')),
]

export default function MySqlView() {
  return (
    <div>
      <Navbar />
      <ImportForm />
    </div>
  )
}
