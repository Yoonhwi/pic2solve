import { ClassValue } from "clsx";
import BaseLayoutHeader from "./basy-layout.header";
import { cn } from "@/lib/utils";

interface BaseLayoutProps {
  children: Readonly<React.ReactNode>;
  parentStyle?: ClassValue;
}

const BaseLayout = ({ children, parentStyle }: BaseLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen text-primary">
      <BaseLayoutHeader />
      <div className={cn("flex flex-col flex-1 items-center", parentStyle)}>
        <div className="w-content flex-1 flex flex-col">{children}</div>
      </div>
    </div>
  );
};

export default BaseLayout;
