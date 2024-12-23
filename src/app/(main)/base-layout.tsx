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
      <div className={cn("flex flex-1 justify-center", parentStyle)}>
        <div className="w-content">{children}</div>
      </div>
    </div>
  );
};

export default BaseLayout;
