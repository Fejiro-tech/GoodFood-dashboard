"use client";

import StatCard from "./components/StatCard";
import RevenueChart from "./components/RevenueChart";
import FoodList from "./components/FoodList";
import Rating from "./components/Rating";
import OrderTimeChart from "./components/OrderTimeChart";
import OrderStat from "./components/OrderStat";

export default function Home() {
  return (
    <main className="p-4 lg:p-8 bg-white ">
      <h2 className="text-xl lg:text-2xl font-semibold pl-6 py-8">
        Dashboard
      </h2>

      <div className="flex flex-col lg:flex-row border-b-2 border-[#F1F2F7]">
        <div className="flex-2 lg:border-r-2 border-[#F1F2F7] lg:pr-8 pb-8">
          <StatCard
            title="Revenue"
            value="IDR 7.852.000"
            percentage="2.1% vs last week"
            btnText="View Report"
            date="Sales from 1-12 Dec, 2020"
          /> 
          <RevenueChart />
        </div>

        <div className="flex-1 lg:pl-8 pb-8">
          <StatCard
            title="Order Time"
            value="Afternoon"
            btnText="View Report"
            date="From 1-6 Dec, 2020" percentage={undefined}  />
          <OrderTimeChart />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:px-8 lg:border-r-2 lg:border-[#F1F2F7]">
          <Rating />
        </div>

        <div className="lg:px-12 lg:border-r-2 lg:border-[#F1F2F7]">
          <FoodList />
        </div>

        <div className="flex-1 lg:pl-10">
          <OrderStat />
        </div>
      </div>
    </main>
  );
}
