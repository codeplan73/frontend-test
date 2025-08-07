import icons from "@/constants/icons";

const Post = ({ title, body }: { title: string; body: string }) => {
  return (
    <div className="border border-slate-200 flex flex-col gap-2 p-4 rounded-[12px]">
      <h4 className="text-[18px] font-bold text-[#3B3B45]">{title}</h4>
      <p className="text-[14px] text-[#818187] font-light">{body}</p>

      <div className="flex items-center gap-[12px] justify-start">
        <p className="bg-[#F6F6F6] rounded-[17px] py-1 px-2 flex items-center gap-2">
          <img src={icons.commentIcon} />
          <span className="text-[#3B3B45] font-medium text-[14px]">234</span>
        </p>
        <p className="bg-[#F6F6F6] rounded-[17px] py-1 px-2  flex items-center gap-2">
          <img src={icons.commentIcon} />
          <span className="text-[#3B3B45] font-medium text-[14px]">234</span>
        </p>
        <p className="bg-[#F6F6F6] rounded-[17px] py-1 px-2  flex items-center gap-2">
          <img src={icons.shareIcon} />
          <span className="text-[#3B3B45] font-medium text-[14px]">123</span>
        </p>
      </div>
    </div>
  );
};

export default Post;
