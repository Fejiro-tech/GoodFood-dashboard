"use client"
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import Image from "next/image";
import arrowIcon from "./../../public/arrow.svg"

const orderData = [
  { day: '01', last6Days: 320, lastWeek: 300 },
  { day: '02', last6Days: 340, lastWeek: 380 },
  { day: '03', last6Days: 380, lastWeek: 340 },
  { day: '04', last6Days: 380, lastWeek: 370 },
  { day: '05', last6Days: 360, lastWeek: 400 },
  { day: '06', last6Days: 480, lastWeek: 420 },
];

export default function OrderStats() {
  const [showLast6Days, setShowLast6Days] = useState(true);
  const [showLastWeek, setShowLastWeek] = useState(true);

  return (
    <div className="py-6 md:py-10 px-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base md:text-lg font-semibold">Order</h3>
        <button className='border-2 border-[#F1F2F7] px-3 py-1.5 text-xs md:text-sm text-[#5A6ACF] hover:bg-[#F1F2F7] transition-colors rounded whitespace-nowrap'>
          View Report
        </button>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-2">2.568</h2>
      
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm text-red-600 flex gap-2 font-bold">
          <Image src={arrowIcon} width={10} height={10} alt="icon" />
          2.1%</span>
        <span className="text-sm text-gray-500">vs last week</span>
      </div>

      <p className="text-xs md:text-sm text-gray-500 mb-6">Sales from 1-6 Dec, 2020</p>

      <div className="mt-6">
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={orderData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="0" stroke="#F1F2F7" vertical={false} horizontal={true} />
            <XAxis 
              dataKey="day" 
              tick={{ fontSize: 11, fill: '#9CA3AF' }}
              axisLine={false}
              tickLine={false}
              interval={0}
            />
            <YAxis 
              tick={false}
              axisLine={false}
              tickLine={false}
              domain={[280, 500]}
            />
            {showLastWeek && (
              <Line 
                type="monotone" 
                dataKey="lastWeek" 
                stroke="#D1D5DB" 
                strokeWidth={2.5}
                dot={false}
              />
            )}
            {showLast6Days && (
              <Line 
                type="monotone" 
                dataKey="last6Days" 
                stroke="#5A6ACF" 
                strokeWidth={2.5}
                dot={false}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-4 md:gap-6 mt-6">
        <button
          onClick={() => setShowLast6Days(!showLast6Days)}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${showLast6Days ? 'bg-[#5A6ACF]' : 'bg-gray-300'}`}></div>
          <span className={`text-[10px] md:text-xs ${showLast6Days ? 'text-gray-600' : 'text-gray-400'}`}>
            Last 6 days
          </span>
        </button>
        <button
          onClick={() => setShowLastWeek(!showLastWeek)}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${showLastWeek ? 'bg-[#D1D5DB]' : 'bg-gray-300'}`}></div>
          <span className={`text-[10px] md:text-xs ${showLastWeek ? 'text-gray-600' : 'text-gray-400'}`}>
            Last Week
          </span>
        </button>
      </div>
    </div>
  );
}