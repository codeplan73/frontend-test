import MemberItem from "./MemberItem";
import images from "@/constants/images";

const MembersList = () => {
  return (
    <div className="bg-white w-full flex flex-col gap-[20px] rounded-[16px] p-[24px]">
      <p className="text-[#3B3B45] text-[20px] leading-2 font-bold">
        Potential Members
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
        <MemberItem
          name="Wanda Parker"
          email="@ashing1234"
          rating={10.3}
          image={images.user6}
        />
        <MemberItem
          name="Terry Brown"
          email="@ashing1234"
          rating={9.8}
          image={images.user2}
        />
        <MemberItem
          name="Lucas Holmess"
          email="@ashing1234"
          rating={6.5}
          image={images.user3}
        />
        <MemberItem
          name="Janice Miller"
          email="@ashing1234"
          rating={8.6}
          image={images.user4}
        />
        <MemberItem
          name="Terry Brown"
          email="@ashing1234"
          rating={9.8}
          image={images.user5}
        />
      </div>
    </div>
  );
};

export default MembersList;
