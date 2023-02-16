import React from 'react'
import Image from 'next/image'

export default function Databases() {
  const dbList = [
    {
      label: 'MySQL',
      image: '/images/mysql-logo.png',
      description:
        'Relational database management system (RDBMS) developed by Oracle that is based on structured query language (SQL).',
    },
    {
      label: 'PostgreSQL',
      image: '/images/postgresql-logo.png',
      description:
        'powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads.',
    },
  ]

  return (
    <div className="max-w-[1300px] mx-auto px-5 md:px-12 xl:px-20">
      <h2 className="text-2xl text-dark font-semibold">
        Relational Database Management Systems
      </h2>

      <div className="grid grid-cols-3 gap-14 mt-10">
        {dbList.map((item) => {
          return (
            <div className="flex gap-5" key={item.label}>
              <div className="border border-slate-300 bg-slate-100 shadow-lg w-[60px] h-[60px] rounded-full flex justify-center items-center">
                <Image
                  alt=""
                  src={item.image}
                  width={40}
                  height={40}
                  priority
                />
              </div>

              <div className="w-4/5">
                <h4 className="font-semibold text-dark">{item.label}</h4>
                <p className="text-sm text-slate-600 mt-3">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
