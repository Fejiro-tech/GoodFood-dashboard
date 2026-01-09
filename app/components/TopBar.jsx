import Image from "next/image";
import arrowLogo from "../../public/arrowdown.svg";
import notifLogo from "../../public/notif.svg";
import burgerImg from "../../public/burger.png";
import logo from "../../public/logo.svg";

const TopBar = () => {
  return (
    <header className="flex items-center h-[72px] bg-white border-b border-gray-200">
    
      <div className="flex-1 px-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full max-w-[625px] bg-[#F1F2F7] px-4 py-2 rounded-md outline-none"
        />
      </div>


      <div className="flex items-center gap-8 px-10">

      <div className="bg-[#FFE6CC] h-12 w-12 rounded-full flex items-center justify-center">
        <Image src={burgerImg} alt="burger" width={24} height={20} />
      </div>


        <p className="flex items-center gap-2 text-sm font-medium">
          Delicious Burger
          <Image src={arrowLogo} alt="arrow" width={10} height={10} />
        </p>
        
        <Image src={notifLogo} alt="notification" width={16} height={16} />
      </div>

    </header>
  );
};

export default TopBar;
