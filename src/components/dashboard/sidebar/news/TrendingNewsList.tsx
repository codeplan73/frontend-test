import SidebarMenuWrapper from "../SidebarMenuWrapper";
import images from "@/constants/images";
import NewsItem from "./NewsItem";

const TrendingNewsList = () => {
  return (
    <SidebarMenuWrapper title="Trending News">
      <div className="flex flex-col gap-[12px]">
        <NewsItem
          image={images.russiaPostImg}
          title="Russia & Ukraine War"
          text="Marketing is evolving. It's chang..."
        />
        <NewsItem
          image={images.elonPostImg}
          title="Elon Musk bought Twitter"
          text="Twitter is the most useful social pl..."
        />
        <NewsItem
          image={images.crisisPostImg}
          title="Fuel Crisis Everywherer"
          text="Due to covid situation in 2020 the..."
        />
      </div>
    </SidebarMenuWrapper>
  );
};

export default TrendingNewsList;
