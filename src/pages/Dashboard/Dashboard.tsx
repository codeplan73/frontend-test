import StatsCardList from "@/components/dashboard/StatsCardList";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div className="col-span-1 md:col-span-2">
        <StatsCardList />
      </div>

      <div className="col-span-1"></div>
    </div>
  );
};

export default Dashboard;
