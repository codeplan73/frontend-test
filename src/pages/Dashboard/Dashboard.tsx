import StatsCardList from "@/components/dashboard/StatsCardList";
import { ChartBarMultiple } from "@/components/dashboard/chart/BarChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 ">
      <div className="col-span-1 md:col-span-2 w-[772px] flex flex-col gap-6">
        <StatsCardList />
        <ChartBarMultiple />
      </div>

      <div className="col-span-1 w-[330px]">
        <div className="bg-white">This is cool</div>
      </div>
    </div>
  );
};

export default Dashboard;
