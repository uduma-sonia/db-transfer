import React from 'react'
import Image from 'next/image'
import { BiLinkExternal } from 'react-icons/bi'
import Link from 'next/link'

export default function Databases() {
  const dbList = [
    {
      label: 'MySQL',
      image: '/images/mysql-logo.png',
      description:
        'Relational database management system (RDBMS) developed by Oracle that is based on structured query language (SQL).',
      route: '/',
    },
    {
      label: 'PostgreSQL',
      image: '/images/postgresql-logo.png',
      description:
        'Powerful object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads.',
      route: '/',
    },
  ]

  return (
    <div className="max-w-[1300px] mx-auto px-5 md:px-12 xl:px-20">
      <h2 className="text-2xl text-dark font-semibold">
        Relational Database Management Systems
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 mt-10">
        {dbList.map((item) => {
          return (
            <Link
              key={item.label}
              className="hover:bg-slate-200  p-3 rounded-2xl"
              href={item.route}
              passHref
            >
              <div className="flex gap-5">
                <div className="border border-slate-300 bg-slate-100 shadow-lg w-[60px] h-[60px] rounded-full flex justify-center items-center">
                  <Image
                    alt=""
                    src={item.image}
                    width={40}
                    height={40}
                    priority
                  />
                </div>

                <div className="w-4/5 pt-2">
                  <div className="flex item-center gap-2">
                    <h4 className="font-semibold text-dark">{item.label}</h4>
                    <p>
                      <BiLinkExternal size="0.6rem" />
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
