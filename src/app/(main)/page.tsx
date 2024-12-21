import { Button } from "@/components/ui/button";
import BaseLayout from "./base-layout";

export default async function Page() {
  return (
    <BaseLayout>
      <div className="flex flex-col gap-2">
        <Button>Button</Button>
        <Button>제출</Button>
      </div>
    </BaseLayout>
  );
}
