const RevenueItem = ({
  label,
  value,
  image,
}: {
  label: string;
  value: string;
  image: string;
}) => {
  return (
    <div className="flex items-center justify-between border-[1px] rounded-[12px] px-4 py-3">
      <div className="flex flex-col items-start justify-center">
        <p className="text-[18px] font-bold text-[#3B3B45]">{value}</p>
        <p className="text-[#A3A3A6] text-[12px] font-semibold">{label}</p>
      </div>
      <img src={image} className="w-[[48px] h-[48px]" alt="" />
    </div>
  );
};

export default RevenueItem;
