const StatsCard = ({
  className,
  value,
  label,
  image,
}: {
  className: string;
  value: string;
  label: string;
  image: string;
}) => {
  return (
    <div
      className={`bg-white transform transition-all p-4 rounded-[12px] flex items-center justify-between ${className}`}
    >
      <div className="flex flex-col">
        <p className="text-[25px] font-bold text-[#3B3B45]">{value}</p>
        <p className="text-xs text-[#A3A3A6]">{label}</p>
      </div>
      <img src={image} alt="Chat Icon" className="w-12 h-12" />
    </div>
  );
};

export default StatsCard;
