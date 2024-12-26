import { Divider } from "@/components/common";
import { HiMiniTrophy } from "react-icons/hi2";

const MathRank = () => {
  return (
    <div className="w-[300px] flex flex-col gap-2">
      <div className="bg-background rounded-md h-[600px] flex flex-col px-[4px] shadow-sm">
        <div className="flex gap-4 items-center py-4 px-2">
          <HiMiniTrophy className="text-3xl text-yellow-500" />
          <h1 className="text-2xl font-bold relative top-[3px]">수학 랭킹</h1>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default MathRank;
