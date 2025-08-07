const NewsItem = ({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="flex items-center justify-between border-[1px] gap-[8px] rounded-[12px] px-4 py-3">
      <img
        src={image}
        className="w-[48px] h-[48px] rounded-[8px]"
        alt="post-image"
      />
      <div className="flex flex-col items-start justify-center">
        <p className="text-[14px] text-[#3B3B45] font-bold">{title}</p>
        <p className="text-[#818187] text-[12px] font-semibold">{text}</p>
      </div>
    </div>
  );
};

export default NewsItem;
