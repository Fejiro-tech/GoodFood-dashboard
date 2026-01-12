import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import arrowLogo from "../../public/arrowdown.svg";
import notifLogo from "../../public/notif.svg";
import burgerImg from "../../public/burger.png";

const TopBar = ({ setSidebarOpen }) => {
  return (
    <header className="flex items-center h-18 bg-white border-b border-gray-200 px-2">
      
      <button 
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden p-4 hover:bg-gray-100 rounded-full transition-colors ml-2"
      >
        <FiMenu className="w-6 h-6" />
      </button>

     
      <div className="flex-1 lg:px-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full max-w-200 lg:max-w-150 bg-[#F1F2F7] px-4 py-2 rounded-md outline-none"
        />
      </div>

      <div className="flex items-center lg:gap-4 gap-2 px-4 lg:px-10">
        <div className="bg-[#FFE6CC] h-12 w-12 rounded-full flex items-center justify-center">
          <Image src={burgerImg} alt="burger" width={24} height={20} />
        </div>

        <p className="flex items-center gap-2 text-sm font-medium">
          <span className="hidden lg:flex">Delicious Burger</span>
          <Image src={arrowLogo} alt="arrow" width={10} height={10} />
        </p>
        
        <Image src={notifLogo} alt="notification" width={16} height={16} className="ml-4"/>
      </div>
    </header>
  );
};

export default TopBar;