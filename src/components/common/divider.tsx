import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

const Divider = ({ style }: { style?: ClassValue }) => {
  return <div className={cn("h-[2px] bg-primary w-full rounded-md", style)} />;
};

export default Divider;
