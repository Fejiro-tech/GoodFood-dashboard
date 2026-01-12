"use client";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function OrderTimeChart() {
  const data = [
    { name: "Afternoon", value: 40, color: "#6B7FED", time: "1pm -4pm", number: "1,890" },
    { name: "Evening", value: 32, color: "#E8ECFD" },
    { name: "Morning", value: 28, color: "#9BA9F3" },
  ];

  const legendColors = {
    Afternoon: "#6B7FED",
    Evening: "#9BA9F3",
    Morning: "#E8ECFD",
  };

  const [selectedSlice, setSelectedSlice] = useState(null);

  return (
    <div className="relative mt-6">
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            dataKey="value"
            startAngle={0}
            endAngle={360}
            onClick={(entry) => setSelectedSlice(entry)}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {selectedSlice && (
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-full bg-[#37375C] text-white p-4 rounded-lg shadow-lg border border-gray-200 ">
          <h4 className="font-bold ">{selectedSlice.name}</h4>
           <p className="text-gray-400 pb-2">{selectedSlice.time}</p>
          <p className="">{selectedSlice.number} orders</p>
        </div>
      )}

      <div className="flex justify-center gap-8 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-1">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: legendColors[item.name] }}
              ></div>
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
            <span className="text-sm font-semibold">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
