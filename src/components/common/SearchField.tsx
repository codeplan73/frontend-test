import { IoIosSearch } from "react-icons/io";

const SearchField = ({
  className,
  iconClass,
}: {
  className?: string;
  iconClass: string;
}) => {
  return (
    <div className="flex items-center gap-4 relative">
      <input
        type="text"
        placeholder="Search"
        className={`border pl-8 bg-white border-none focus-visible:ring-0  px-3 py-1 ${className}`}
      />
      <IoIosSearch className={`${iconClass}`} />
    </div>
  );
};

export default SearchField;
