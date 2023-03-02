import React from 'react'
import { FaArrowRight, FaArrowLeft, FaArrowDown } from 'react-icons/fa'

interface Props {
  isImporting?: boolean
  isExporting?: boolean
}

export default function Loader({ isImporting, isExporting }: Props) {
  return (
    <div className="fixed w-full h-full left-0 top-0 bg-[#e9d5ff8f] flex justify-center items-center">
      {isImporting && (
        <div className="bg-[#7e46b3e0] w-[200px] h-[130px] rounded-lg flex flex-col justify-center items-center gap-3">
          <FaArrowDown size="2rem" className="arrow_down" color="#ffffff" />
          <p className="text-white text-xs">Importing Database</p>
        </div>
      )}

      {isExporting && (
        <div className="bg-[#7e46b3e0] w-[200px] h-[130px] rounded-lg flex flex-col justify-center items-center gap-3">
          <FaArrowRight size="2rem" className="arrow_right" color="#ffffff" />
          <FaArrowLeft size="2rem" className="arrow_left" color="#ffffff" />
          <p className="text-white text-xs">Exporting Database</p>
        </div>
      )}
    </div>
  )
}
