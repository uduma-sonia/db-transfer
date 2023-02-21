import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { databaseApi } from '@/lib/psql-api'
import toast, { Toaster } from 'react-hot-toast'

const schema = z.object({
  user: z.string().min(1),
  password: z.string().min(1),
  hostname: z.string().min(1),
  port: z.string().min(1),
  database: z.string().min(1),
  id: z.string().min(1),
})

type ImportFormSchema = z.infer<typeof schema>

export default function ExportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ImportFormSchema>({
    resolver: zodResolver(schema),
  })

  const onSubmit = useCallback(async (data: ImportFormSchema) => {
    try {
      setIsSubmitting(true)
      const result = await databaseApi.exportPSql(data)

      if (result) {
        toast('Import successful', {
          duration: 40000,
          style: {
            border: '1px solid #15d64c',
            color: '#15d64c',
          },
        })
        console.log(result)
      }
    } catch (error: any) {
      console.log(error)
      toast('Error', {
        duration: 40000,
        style: {
          border: '1px solid #d62515',
          color: '#d62515',
        },
      })
    } finally {
      setIsSubmitting(false)
    }
  }, [])

  return (
    <div className="max-w-[1300px] mx-auto px-5 md:px-12 xl:px-20 mt-20">
      <Toaster />
      <div className="mt-10">
        <h2 className="text-dark text-xl font-semibold">
          Export to New MySQL Database
        </h2>
        <p className="text-sm text-dark mt-2 max-w-[400px]">
          Bacon ipsum dolor amet fatback rump boudin hamburger t-bone salami
          chicken chislic pork belly ham meatball buffalo sausage.
        </p>
      </div>

      <form
        className="max-w-[600px] mt-10 bg-gray-50 shadow-lg lg:px-7 py-7 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <label
            className="text-sm text-dark font-medium mb-2 pl-2"
            htmlFor="_user"
          >
            User
            {errors && errors?.user && (
              <span className="text-red-500 text-[10px]"> *</span>
            )}
          </label>

          <input
            className="border border-slate-400 h-[45px] bg-transparent rounded-lg text-sm px-4 outline-none"
            id="_user"
            {...register('user')}
            placeholder="User"
            type="text"
          />
        </div>

        <div className="flex flex-col pt-5">
          <label
            className="text-sm text-dark font-medium mb-2 pl-2"
            htmlFor="_hostname"
          >
            Host name
            {errors && errors?.hostname && (
              <span className="text-red-500 text-[10px]"> *</span>
            )}
          </label>
          <input
            className="border border-slate-400 h-[45px] bg-transparent rounded-lg text-sm px-4 outline-none"
            id="_hostname"
            placeholder="Host name"
            type="text"
            {...register('hostname')}
          />
        </div>

        <div className="flex flex-col pt-5">
          <label
            className="text-sm text-dark font-medium mb-2 pl-2"
            htmlFor="_port"
          >
            Port
            {errors && errors?.port && (
              <span className="text-red-500 text-[10px]"> *</span>
            )}
          </label>
          <input
            className="border border-slate-400 h-[45px] bg-transparent rounded-lg text-sm px-4 outline-none"
            id="_port"
            placeholder="Port"
            type="text"
            {...register('port')}
          />
        </div>

        <div className="flex flex-col pt-5">
          <label
            className="text-sm text-dark font-medium mb-2 pl-2"
            htmlFor="_database"
          >
            Database
            {errors && errors?.database && (
              <span className="text-red-500 text-[10px]"> *</span>
            )}
          </label>
          <input
            className="border border-slate-400 h-[45px] bg-transparent rounded-lg text-sm px-4 outline-none"
            id="_database"
            placeholder="Database"
            type="text"
            {...register('database')}
          />
        </div>

        <div className="flex flex-col pt-5">
          <label
            className="text-sm text-dark font-medium mb-2 pl-2"
            htmlFor="_id"
          >
            ID
            {errors && errors?.id && (
              <span className="text-red-500 text-[10px]"> *</span>
            )}
          </label>
          <input
            className="border border-slate-400 h-[45px] bg-transparent rounded-lg text-sm px-4 outline-none"
            id="_id"
            placeholder="ID"
            type="text"
            {...register('id')}
          />
        </div>

        <div className="flex flex-col pt-5">
          <label
            className="text-sm text-dark font-medium mb-2 pl-2"
            htmlFor="_password"
          >
            Password
            {errors && errors?.password && (
              <span className="text-red-500 text-[10px]"> *</span>
            )}
          </label>
          <input
            className="border border-slate-400 h-[45px] bg-transparent rounded-lg text-sm px-4 outline-none"
            id="_password"
            placeholder="* * * * * * *"
            type="password"
            {...register('password')}
          />
        </div>

        <button
          type="submit"
          className="mt-10 bg-primary hover:bg-[#7e46b3e0] text-white rounded-lg w-full py-4 2xl:py-5 shadow-lg"
        >
          {isSubmitting ? 'Exporting...' : 'Export'}
        </button>
      </form>
    </div>
  )
}
