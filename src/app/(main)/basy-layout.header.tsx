import { ThemeSwitcher } from "@/components/controls/theme-switcher";

const BaseLayoutHeader = () => {
  return (
    <div className="flex justify-center h-[100px] shadow-md items-center">
      <div className="w-[1280px] flex justify-between">
        <h1 className="font-bold text-3xl">로고</h1>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default BaseLayoutHeader;
