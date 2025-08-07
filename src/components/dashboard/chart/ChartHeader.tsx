const ChartHeader = () => {
  return (
    <div className="flex items-center justify-between w-full gap-2">
      <h2 className="text-[20px] font-bold text-[#3B3B45]">Overview</h2>
      <div className="flex items-center gap-2">
        <p className="text-white bg-secondary rounded-[12px] font-semibold px-4 py-1 text-xs">
          Robin Hood
        </p>
        <p className="text-[#818187] bg-[#F6F6F6] rounded-[12px] font-semibold px-4 py-1 text-xs">
          Amreitrade
        </p>
        <p className="text-[#818187] bg-[#F6F6F6] rounded-[12px] font-semibold px-4 py-1 text-xs">
          Fidelity
        </p>
        <p className="text-[#818187] bg-[#F6F6F6] rounded-[12px] font-semibold px-4 py-1 text-xs">
          Charles
        </p>
      </div>
    </div>
  );
};

export default ChartHeader;
