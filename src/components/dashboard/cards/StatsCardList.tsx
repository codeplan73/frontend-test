import icons from "@/constants/icons";
import StatsCard from "@/components/dashboard/cards/StatsCard";

const StatsCardList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <StatsCard
        value="52"
        label="Total Channel"
        image={icons.cardIcon1}
        className="hover:bg-[#E0FAF5]"
      />
      <StatsCard
        value="125"
        label="New Members"
        image={icons.cardIcon2}
        className="hover:bg-[#EFF2FE]"
      />
      <StatsCard
        value="789"
        label="All Impressions"
        image={icons.cardIcon3}
        className="hover:bg-[#FFF0E0]"
      />
    </div>
  );
};

export default StatsCardList;
