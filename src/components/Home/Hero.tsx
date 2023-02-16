import React from 'react'

export default function Hero() {
  return (
    <div className="max-w-[1300px] mx-auto px-5 md:px-12 xl:px-20">
      <div className="pt-[120px]">
        <h1 className="text-5xl text-center text-dark font-black">
          DATABASE TRANSFER
        </h1>
        <p className="text-slate-800 leading-6 max-w-[700px] mx-auto text-center mt-10">
          Bacon ipsum dolor amet fatback rump boudin hamburger t-bone salami
          chicken chislic pork belly ham meatball buffalo sausage. Flank fatback
          biltong ground round kielbasa tri-tip cow jerky. Boudin burgdoggen
          tri-tip ball tip chuck porchetta beef.
        </p>

        <div className="text-center mt-10">
          <button className="bg-primary hover:bg-[#7e46b3e0] text-white rounded-lg w-48 py-4 shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
