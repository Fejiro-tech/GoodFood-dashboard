
export default function Rating() {
  return (
    <div className="py-6 md:py-10 px-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base md:text-lg font-semibold">Your Rating</h3>
      </div>
      <p className="text-xs md:text-sm text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur</p>

      
      <div className="relative h-48 md:h-64 flex items-center justify-center mb-8 max-w-xs mx-auto md:max-w-none">
        
        <div className="absolute left-1 bottom-20 md:bottom-26 w-24 h-24 md:w-28 md:h-28 z-100">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="48" cy="48" r="40" fill="#6B7FED" stroke="none" className="md:hidden"/>
            <circle cx="56" cy="56" r="46" fill="#6B7FED" stroke="none" className="hidden md:block"/>
            <circle cx="48" cy="48" r="46" fill="none" stroke="#6B7FED" strokeWidth="2" strokeDasharray="170 290" strokeLinecap="round" className="md:hidden"/>
            <circle cx="56" cy="56" r="52" fill="none" stroke="#6B7FED" strokeWidth="2" strokeDasharray="190 327" strokeLinecap="round" className="hidden md:block"/>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg md:text-xl font-bold text-white">85%</div>
              <div className="text-[10px] md:text-xs text-gray-500">Hygiene</div>
            </div>
          </div>
        </div>


        <div className="absolute left-20 md:left-26 top-8 md:top-10 w-32 h-32 md:w-38 md:h-38 z-10">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="64" cy="64" r="52" fill="#F59E0B" stroke="none" className="md:hidden"/>
            <circle cx="76" cy="76" r="62" fill="#F59E0B" stroke="none" className="hidden md:block"/>
            <circle cx="64" cy="64" r="60" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="240 377" strokeLinecap="round" className="md:hidden"/>
            <circle cx="76" cy="76" r="72" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="280 452" strokeLinecap="round" className="hidden md:block"/>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-white">85%</div>
              <div className="text-xs md:text-sm text-gray-500">Food Taste</div>
            </div>
          </div>
        </div>

        
        <div className="absolute left-0 top-32 md:top-38 w-28 h-28 md:w-32 md:h-32">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="56" cy="56" r="46" fill="#06B6D4" stroke="none" className="md:hidden"/>
            <circle cx="64" cy="64" r="52" fill="#06B6D4" stroke="none" className="hidden md:block"/>
            <circle cx="56" cy="56" r="52" fill="none" stroke="#06B6D4" strokeWidth="2" strokeDasharray="230 327" strokeLinecap="round" className="md:hidden"/>
            <circle cx="64" cy="64" r="60" fill="none" stroke="#06B6D4" strokeWidth="2" strokeDasharray="260 377" strokeLinecap="round" className="hidden md:block"/>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg md:text-xl font-bold text-white">92%</div>
              <div className="text-[10px] md:text-xs text-gray-500">Packaging</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}