import Post from "./Post";

const TrendingPost = () => {
  return (
    <div className="bg-white w-full flex flex-col gap-[20px] rounded-[16px] p-[24px]">
      <p className="text-[#3B3B45] text-[20px] leading-2 font-bold">
        Trending Posts
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <Post
          title=" 8 Upcoming Influencer Marketing Trends and Benefits"
          body=" Marketing is evolving. It's changing from a one-way street to a two-way
        conversa…"
        />
        <Post
          title="How Influencer Marketing Affects Consumer Buying Behavior"
          body="As influencer marketing continues to grow, consumers have been turning to their…"
        />
      </div>
    </div>
  );
};

export default TrendingPost;
