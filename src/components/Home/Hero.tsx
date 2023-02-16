import React from 'react'
import { scroller } from 'react-scroll'
import { useRouter } from 'next/router'

export default function Hero() {
  const router = useRouter()

  const scrollTarget = (target: string) =>
    scroller.scrollTo(target, { smooth: true, duration: 700 })

  const scrollToPage = async (target: string) => {
    if (router.pathname !== '/') {
      await router.push('/')
    }
    scrollTarget(target)
  }
  return (
    <div className="max-w-[1300px] mx-auto px-5 md:px-12 xl:px-20">
      <div className="py-[100px] lg:py-[150px]">
        <h1 className="text-4xl md:text-5xl 2xl:text-7xl text-center text-dark font-black">
          DATABASE TRANSFER
        </h1>
        <p className="text-slate-800 leading-6 2xl:text-lg max-w-[700px] mx-auto text-center mt-10">
          Bacon ipsum dolor amet fatback rump boudin hamburger t-bone salami
          chicken chislic pork belly ham meatball buffalo sausage. Flank fatback
          biltong ground round kielbasa tri-tip cow jerky. Boudin burgdoggen
          tri-tip ball tip chuck porchetta beef.
        </p>

        <div className="text-center mt-10">
          <button
            className="bg-primary hover:bg-[#7e46b3e0] text-white rounded-lg w-48 2xl:w-56 py-4 2xl:py-5 shadow-lg"
            onClick={() => scrollToPage('relational_db')}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
