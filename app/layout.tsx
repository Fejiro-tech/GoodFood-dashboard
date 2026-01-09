"use client";

import { useState } from "react";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Image from "next/image";
import logo from "../public/logo.svg";
import { AiOutlineClose } from "react-icons/ai";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body
    
      >
        <div className="min-h-screen max-w-360 mx-auto flex bg-white">

          {/* Desktop Sidebar */}
          <div className="w-64 bg-[#F1F2F7] hidden lg:flex flex-col">
            <div className="h-18 w-54 flex items-center justify-center border-b border-gray-200">
              <Image src={logo} alt="Logo" height={30} width={120} />
            </div>
            <Sidebar />
          </div>

          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/30 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Mobile Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-[#F1F2F7] z-50 transform transition-transform duration-300 lg:hidden ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="h-18 flex items-center justify-between px-6 border-b border-gray-200">
              <Image src={logo} alt="Logo" height={30} width={120} />
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 hover:bg-gray-200 rounded-lg"
              >
                <AiOutlineClose size={22} />
              </button>
            </div>
            <Sidebar />
          </div>

          {/* Main area */}
          <div className="flex-1 flex flex-col">
            <TopBar setSidebarOpen={setSidebarOpen} />
            <main className="flex-1">{children}</main>
          </div>

        </div>
      </body>
    </html>
  );
}
