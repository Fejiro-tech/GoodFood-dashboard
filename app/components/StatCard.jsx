import React from 'react'

const StatCard = ({ title, value, btnText, date, percentage }) => {
  return (
    <div className="bg-white p-6 space-y-4 ">
        <div className='flex justify-between'>
            <p className="text-gray-500 text-sm">{title}</p>
            <button className='border-2 border-[#F1F2F7] px-2 py-1 text-sm text-[#5A6ACF]'>{btnText}</button>
        </div>
      
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
      <p>{percentage}</p>
      <p className='mt-6'>{date}</p>
    </div>
  )
}

export default StatCard