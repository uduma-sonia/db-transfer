import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const [Navbar, ImportForm, Footer] = [
  dynamic(() => import('../Layout/Navbar')),
  dynamic(() => import('@components/MySql/Process/ImportForm'), { ssr: true }),
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

      <Footer />
    </div>
  )
}
