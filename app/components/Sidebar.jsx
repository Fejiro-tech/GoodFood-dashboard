"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import dashboardLogo from "../../public/dashboard.svg";
import buyLogo from "../../public/buy.svg";
import docLogo from "../../public/doc.svg";
import chatLogo from "../../public/chat.svg";
import settingsIcon from "../../public/setting.svg";
import walletIcon from "../../public/wallet.svg";
import accountIcon from "../../public/profile.svg";
import helpIcon from "../../public/info.svg";

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/", icon: dashboardLogo },
    { name: "Food Order", href: "/orders", icon: buyLogo },
    { name: "Manage Menu", href: "/menu", icon: docLogo },
    { name: "Customer Review", href: "/customers", icon: chatLogo },
  ];

  const otherNavbtns = [
     { name: "Settings", href: "/settings", icon: settingsIcon },
    { name: "Payment", href: "/payment", icon: walletIcon },
    { name: "Account", href: "/account", icon: accountIcon },
    { name: "Help", href: "/help", icon: helpIcon },
  ]

  return (
    <aside className="bg-[#F1F2F7] w-64 p-10 h-screen">
      <nav className="space-y-2 text-gray-600">
        <p className="text-gray-400 mb-6 text-sm">MENU</p>

        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex gap-4 items-center px-4 py-2 rounded-lg transition
                ${
                  isActive
                    ? "bg-[#E8ECFD] text-[#5A6ACF] font-semibold"
                    : "hover:bg-white"
                }
              `}
            >
              <Image src={item.icon} alt={item.name} width={20} height={24} />
              <span>{item.name}</span>
            </Link>
          );
        })}

        <p className="pt-8 text-sm text-gray-400">OTHERS</p>

        {otherNavbtns.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
            key={item.name}
             href={item.href}
             className={`flex gap-4 items-center px-4 py-2 rounded-lg transition
                ${
                  isActive
                    ? "bg-[#E8ECFD] text-[#5A6ACF] font-semibold"
                    : "hover:bg-white"
                }
                `}

             >
              <Image src={item.icon} alt={item.name} width={20} height={24} />
              <span>{item.name}</span>
            </Link>
          )

        })}
        
      </nav>
    </aside>
  );
};

export default Sidebar;
