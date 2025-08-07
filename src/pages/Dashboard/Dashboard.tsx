import StatsCardList from "@/components/dashboard/cards/StatsCardList";
import { ChartBarMultiple } from "@/components/dashboard/chart/BarChart";
import MembersList from "@/components/dashboard/Members/MembersList";
import TrendingPost from "@/components/dashboard/post/TrendingPost";
import TrendingNewsList from "@/components/dashboard/sidebar/news/TrendingNewsList";
import Revenue from "@/components/dashboard/sidebar/revenue/Revenue";
import WatchList from "@/components/dashboard/sidebar/WatchList";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 ">
      <div className="col-span-1 md:col-span-2 w-[772px] flex flex-col gap-6">
        <StatsCardList />
        <ChartBarMultiple />

        <TrendingPost />
        <MembersList />
      </div>

      <div className="col-span-1 w-[330px] flex flex-col gap-4">
        <WatchList />
        <Revenue />
        <TrendingNewsList />
      </div>
    </div>
  );
};

export default Dashboard;
