const AuthPageWrapperItem = ({
  image,
  label,
}: {
  image: string;
  label: string;
}) => {
  return (
    <div className="flex items-center gap-4">
      <img src={image} alt="check" className="w-[24px] h-[24px]" />
      <p className="text-[#5B6871] text-md font-mulish">{label}</p>
    </div>
  );
};

export default AuthPageWrapperItem;
