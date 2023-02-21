import React from 'react'
import dynamic from 'next/dynamic'

const [Navbar, ImportForm, ExportForm, Footer] = [
  dynamic(() => import('../Layout/Navbar')),
  dynamic(() => import('@components/PostgreSql/ImportForm')),
  dynamic(() => import('@components/PostgreSql/ExportForm')),
  dynamic(() => import('@containers/Layout/Footer')),
]

export default function PSqlView() {
  return (
    <div>
      <Navbar />
      <ImportForm />
      <ExportForm />
      <Footer />
    </div>
  )
}
