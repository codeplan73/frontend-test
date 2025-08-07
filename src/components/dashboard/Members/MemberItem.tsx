import { IoMdTrendingUp } from "react-icons/io";

const MemberItem = ({
  name,
  email,
  rating,
  image,
}: {
  name: string;
  email: string;
  rating: number;
  image: string;
}) => {
  return (
    <div className="flex flex-col items-center border border-slate-200 p-4 rounded-[12px]">
      <div className="flex items-center gap-[8px] flex-col">
        <img
          src={image}
          className="w-[40px] h-[40px] rounded-full object-cover bg-center"
          alt="user1"
        />
        <div className="flex flex-col items-center">
          <p className="text-[14px] font-bold text-[#3B3B45] text-nowrap">
            {name}
          </p>
          <p className="text-[#818187] font-light text-[11px]">{email}</p>
        </div>
      </div>
      <div className="flex items-center gap-[8px]">
        <IoMdTrendingUp className="text-green-700 w-[20px] h-[20px]" />
        <span className="text-[#3B3B45] text-[16px] font-bold">{rating}%</span>
      </div>
    </div>
  );
};

export default MemberItem;
