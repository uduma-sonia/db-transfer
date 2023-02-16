import React from 'react'
import dynamic from 'next/dynamic'

const [Navbar, ImportForm, ExportForm, Footer] = [
  dynamic(() => import('../Layout/Navbar')),
  dynamic(() => import('@components/MySql/ImportForm')),
  dynamic(() => import('@components/MySql/ExportForm')),
  dynamic(() => import('@containers/Layout/Footer')),
]

export default function MySqlView() {
  return (
    <div>
      <Navbar />
      <ImportForm />
      <ExportForm />
      <Footer />
    </div>
  )
}
