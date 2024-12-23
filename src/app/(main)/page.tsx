import { MainDesCard } from "@/components/pages";
import BaseLayout from "./base-layout";
import { CardFlip } from "@/components/common";

{
  /** 이미지 작가 storyset 출처 Freepik */
}
{
  /** 출처 Freepik */
}

export default async function Page() {
  return (
    <BaseLayout parentStyle={"pt-[100px] relative"}>
      <div className="absolute inset-0 bg-[url('/images/classroom.jpg')] bg-cover bg-center opacity-10" />
      <div className="w-[1280px] flex flex-col gap-2 flex-1 justify-center items-center z-10">
        <div className="flex gap-[40px]">
          <MainDesCard imgSrc="/images/math.png" alt="math" size={400} />
          <CardFlip
            parentStyle="w-[420px]"
            front={
              <MainDesCard
                imgSrc="/images/english.png"
                alt="english"
                size={320}
              />
            }
            back={<div>영어</div>}
          />
        </div>
      </div>
    </BaseLayout>
  );
}
