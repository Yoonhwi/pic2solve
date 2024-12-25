import BaseLayout from "../base-layout";
import MathRank from "./rank";
import MathQuestion from "./question";

const MathPage = () => {
  return (
    <BaseLayout parentStyle={"pt-[100px] relative"}>
      <div className="absolute inset-0 bg-[url('/images/classroom.jpg')] bg-cover bg-center opacity-10" />
      <div className="w-[1280px] flex flex-col flex-1 justify-center items-center z-10">
        <div className="flex-1 flex w-full py-6 gap-2">
          <MathQuestion />
          <MathRank />
        </div>
      </div>
    </BaseLayout>
  );
};

export default MathPage;
