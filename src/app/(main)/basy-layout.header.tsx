import { ThemeSwitcher } from "@/components/controls/theme-switcher";

const BaseLayoutHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center h-[100px] items-center bg-transparent">
      <div className="w-[1280px] flex justify-between">
        <h1 className="font-bold text-3xl">로고</h1>
        <div className="flex gap-8 items-center text-lg">
          <span>문제풀이</span>
          <span>게시판</span>
          <span>공지사항</span>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default BaseLayoutHeader;
