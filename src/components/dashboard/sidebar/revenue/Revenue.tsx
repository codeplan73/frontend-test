import SidebarMenuWrapper from "../SidebarMenuWrapper";
import icons from "@/constants/icons";
import RevenueItem from "./RevenueItem";

const Revenue = () => {
  return (
    <SidebarMenuWrapper title="Revenue">
      <div className="flex flex-col gap-4">
        <RevenueItem
          image={icons.facebook}
          label="Recently Added Pages"
          value="$4,000"
        />
        <RevenueItem
          image={icons.instagram}
          label="Video Monetization"
          value="$2,120"
        />
        <RevenueItem
          image={icons.linkedin}
          label="Community Buildup"
          value="$1,752"
        />
      </div>
    </SidebarMenuWrapper>
  );
};

export default Revenue;
