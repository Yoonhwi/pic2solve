import { ThemeSwitcher } from "@/components/controls/theme-switcher";

const BaseLayoutHeader = () => {
  return (
    <div className="flex justify-center bg-secondary py-4 shadow-md">
      <div className="w-[1280px] flex justify-between">
        <h1>Header</h1>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default BaseLayoutHeader;
