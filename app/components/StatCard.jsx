import React from "react";
import Image from "next/image";
import arrowUpIcon from "./../../public/arrowup.svg";

const StatCard = ({ title, value, btnText, date, percentage }) => {
  return (
    <div className="bg-white p-6 space-y-4">
      <div className="flex justify-between">
        <p className="text-gray-500 text-sm">{title}</p>
        <button className="border-2 border-[#F1F2F7] px-2 py-1 text-sm text-[#5A6ACF]">
          {btnText}
        </button>
      </div>

      <h3 className="text-2xl font-bold">{value}</h3>

      {percentage && (
        <div className="flex items-center gap-2">
          <span className="text-sm flex items-center gap-2">
            <Image src={arrowUpIcon} width={10} height={10} alt="icon" />

            <span className="text-green-600 font-bold">
              {percentage.split(" ")[0]}
            </span>

            <span className="text-gray-500">
              {percentage.split(" ").slice(1).join(" ")}
            </span>
          </span>
      </div>
    )}


      <p className="mt-6 text-sm text-gray-500">{date}</p>
    </div>
  );
};

export default StatCard;
