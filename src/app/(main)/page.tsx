import BaseLayout from "./base-layout";

export default async function Page() {
  return (
    <BaseLayout parentStyle={"pt-[100px]"}>
      <div className="flex flex-col gap-2"></div>
    </BaseLayout>
  );
}
