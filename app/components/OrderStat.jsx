"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const orderData = [
  { day: '01', last6Days: 380, lastWeek: 360 },
  { day: '02', last6Days: 350, lastWeek: 330 },
  { day: '03', last6Days: 360, lastWeek: 350 },
  { day: '04', last6Days: 420, lastWeek: 400 },
  { day: '05', last6Days: 460, lastWeek: 440 },
  { day: '06', last6Days: 520, lastWeek: 500 },
];

export default function OrderStats() {
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
        <span className="text-sm text-red-500">↓ 2.1%</span>
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
              domain={[300, 550]}
            />
            <Line 
              type="basis" 
              dataKey="lastWeek" 
              stroke="#D1D5DB" 
              strokeWidth={2.5}
              dot={false}
            />
            <Line 
              type="basis" 
              dataKey="last6Days" 
              stroke="#5A6ACF" 
              strokeWidth={2.5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-6 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#5A6ACF]"></div>
          <span className="text-xs text-gray-600">Last 6 days</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#D1D5DB]"></div>
          <span className="text-xs text-gray-600">Last Week</span>
        </div>
      </div>
    </div>
  );
}