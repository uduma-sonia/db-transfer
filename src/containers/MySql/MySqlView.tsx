import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const [Navbar, ImportForm, ExportForm, Footer] = [
  dynamic(() => import('../Layout/Navbar')),
  dynamic(() => import('@components/MySql/ImportForm')),
  dynamic(() => import('@components/MySql/ExportForm')),
  dynamic(() => import('@containers/Layout/Footer')),
]

export default function MySqlView() {
  const router = useRouter()
  const { im } = router.query

  return (
    <div>
      <Navbar />
      <div className={`${im !== 'true' ? 'block' : 'hidden'}`}>
        <ImportForm />
      </div>
      <div className={`${im === 'true' ? 'block' : 'hidden'}`}>
        <ExportForm />
      </div>
      <Footer />
    </div>
  )
}
