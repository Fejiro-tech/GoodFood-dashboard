"use client";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "01", current: 45, last: 30 },
  { day: "02", current: 30, last: 25 },
  { day: "03", current: 35, last: 40 },
  { day: "04", current: 25, last: 35 },
  { day: "05", current: 45, last: 35 },
  { day: "06", current: 55, last: 35 },
  { day: "07", current: 45, last: 35 },
  { day: "08", current: 45, last: 35 },
  { day: "09", current: 45, last: 35 },
  { day: "10", current: 45, last: 35 },
  { day: "11", current: 45, last: 35 },
  { day: "12", current: 55, last: 35 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white px-8">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart 
          data={data}
          barGap={6}          
          barCategoryGap="10%" 
        >
          <XAxis dataKey="day" 
          tick={{ fill: "#4b5563", fontSize: 12, fontWeight: 500 }}
          />
          <Tooltip />
          <Bar dataKey="current" fill="#6366f1" barSize={10} />
          <Bar dataKey="last" fill="#e5e7eb" barSize={10} />
        </BarChart>
      </ResponsiveContainer>

       <div className="flex  gap-6 mt-6">
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
