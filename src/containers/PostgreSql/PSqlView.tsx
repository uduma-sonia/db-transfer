import React from 'react'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const [Navbar, DropDown, ImportForm, ExportForm, Footer] = [
  dynamic(() => import('../Layout/Navbar')),
  dynamic(() => import('@components/PostgreSql/DropDown')),
  dynamic(() => import('@components/PostgreSql/ImportForm')),
  dynamic(() => import('@components/PostgreSql/ExportForm')),
  dynamic(() => import('@containers/Layout/Footer')),
]

export default function PSqlView() {
  const [formState, setFormState] = useState<string>('Import')
  return (
    <div>
      <Navbar />
      <DropDown formState={formState} setFormState={setFormState} />
      {formState === 'Import' ? (
        <ImportForm />
      ) : formState === 'Export' ? (
        <ExportForm />
      ) : null}
      <Footer />
    </div>
  )
}
