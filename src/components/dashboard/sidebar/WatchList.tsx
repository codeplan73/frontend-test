import { LineChat } from "./LineChart";
import SidebarMenuWrapper from "./SidebarMenuWrapper";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const WatchList = () => {
  return (
    <SidebarMenuWrapper title="Watchlist" link="#">
      <div className="flex flex-col gap-4">
        <div className="bg-[#F6F6F6] rounded-[12px] px-4 grid grid-cols-3 items-center justify-between">
          <div className="col-span-1 flex flex-col items-start justify-center gap-[8px]">
            <div className="flex gap-[24px] items-center">
              <p className="text-[18px] font-bold text-[#3B3B45]">AAPL</p>
              <AiOutlineArrowUp className="text-[#00A441]" />
            </div>
            <div>
              <p className="text-[#A3A3A6] text-[15px] font-semibold">
                $142.90
              </p>
              <p className="text-[#00A441] text-[12px] font-semibold">+0.78$</p>
            </div>
          </div>
          <div className="col-span-2 w-full h-[100px]">
            <LineChat />
          </div>
        </div>
        <div className="bg-[#F6F6F6] rounded-[12px] px-4 grid grid-cols-3 items-center justify-between">
          <div className="col-span-1 flex flex-col items-start justify-center gap-[8px]">
            <div className="flex gap-[24px] items-center">
              <p className="text-[18px] font-bold text-[#3B3B45]">BPL</p>
              <AiOutlineArrowDown className="text-[#FF5252]" />
            </div>
            <div>
              <p className="text-[#A3A3A6] text-[15px] font-semibold">
                $142.90
              </p>
              <p className="text-[#FF5252] text-[12px] font-semibold">-0.78$</p>
            </div>
          </div>
          <div className="col-span-2 w-full h-[100px]">
            <LineChat />
          </div>
        </div>
      </div>
    </SidebarMenuWrapper>
  );
};

export default WatchList;
