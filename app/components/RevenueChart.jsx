"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "01", current: 30, last: 20 },
  { day: "02", current: 20, last: 30 },
  { day: "03", current: 28, last: 18 },
  { day: "04", current: 26, last: 28 },
  { day: "05", current: 32, last: 26 },
  { day: "06", current: 35, last: 18 },
  { day: "07", current: 29, last: 18 },
  { day: "08", current: 20, last: 30 },
  { day: "09", current: 22, last: 18 },
  { day: "10", current: 26, last: 18 },
  { day: "11", current: 32, last: 25 },
  { day: "12", current: 35, last: 20 },
];

export default function RevenueChart() {
  const [showCurrent, setShowCurrent] = useState(true);
  const [showLast, setShowLast] = useState(true);

  return (
    <div className="bg-white px-4 md:px-8">
      <ResponsiveContainer width="100%" height={200} className="md:h-[250px]">
        <BarChart 
          data={data}
          barGap={8}
          barCategoryGap="5%"
          margin={{ left: -20, right: 10 }}
          className="md:barGap-[20] md:barCategoryGap-[10%]"
        >
          <XAxis 
            dataKey="day" 
            tick={{ fill: "#4b5563", fontSize: 10, fontWeight: 500 }}
            className="md:text-xs"
          />
          <Tooltip 
            contentStyle={{ fontSize: '12px' }}
            cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
          />
          {showCurrent && (
            <Bar dataKey="current" fill="#6366f1" barSize={6} radius={[4, 4, 0, 0]} className="md:barSize-[10]" />
          )}
          {showLast && (
            <Bar dataKey="last" fill="#e5e7eb" barSize={6} radius={[4, 4, 0, 0]} className="md:barSize-[10]" />
          )}
        </BarChart>
      </ResponsiveContainer>

      <div className="flex flex-wrap gap-4 md:gap-6 mt-4 lg:mt-10 ">
        <button
          onClick={() => setShowCurrent(!showCurrent)}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${showCurrent ? 'bg-[#5A6ACF]' : 'bg-gray-300'}`}></div>
          <span className={`text-[10px] md:text-xs ${showCurrent ? 'text-gray-600' : 'text-gray-400'}`}>
            Last 6 days
          </span>
        </button>
        <button
          onClick={() => setShowLast(!showLast)}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${showLast ? 'bg-[#D1D5DB]' : 'bg-gray-300'}`}></div>
          <span className={`text-[10px] md:text-xs ${showLast ? 'text-gray-600' : 'text-gray-400'}`}>
            Last Week
          </span>
        </button>
      </div>
    </div>
  );
}