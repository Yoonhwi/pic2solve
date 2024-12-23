import { FaCameraRetro } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import { PiGitDiffBold } from "react-icons/pi";
import { Button } from "@/components/ui/button";

const descriptions = [
  {
    icon: <FaCameraRetro size={50} className="text-primary" />,
    title: "Capture",
    description: "문제를 캡쳐해 올려보세요",
  },
  {
    icon: <RiRobot2Line size={50} className="text-primary" />,
    title: "Solve",
    description: "AI가 문제를 해결해드려요",
  },
  {
    icon: <FaBook size={44} className="text-primary" />,
    title: "Question",
    description: "해당유형의 문제를 추천해드려요",
  },
  {
    icon: <PiGitDiffBold size={44} className="text-primary" />,
    title: "Level",
    description: "다양한 난이도의 문제를 드려요",
  },
];

const MainEnglishCard = () => {
  return (
    <div className="w-[420px] h-[600px] bg-background shadow-md rounded-md p-4 flex flex-col gap-4">
      <h1 className="font-bold text-2xl">영어 문제, 쉽고 빠르게 AI 로 해결!</h1>
      <p className="text-muted-foreground text-lg">
        실전 문제풀이로 더 빠르게 학습하세요
      </p>

      <div className="grid grid-cols-2 gap-4 text-text-light">
        {descriptions.map((v) => {
          return (
            <div
              className="bg-background shadow-md rounded-md p-4 flex flex-col"
              key={v.title}
            >
              <div className="w-full flex justify-between items-center h-[50px]">
                {v.icon}
                <span className="text-lg flex-1 text-center">{v.title}</span>
              </div>
              <span className="text-lg">{v.description}</span>
            </div>
          );
        })}
      </div>

      <Button className="flex-1 text-4xl">ENGLISH JOIN</Button>
    </div>
  );
};

export default MainEnglishCard;
