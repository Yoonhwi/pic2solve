import BaseLayoutHeader from "./basy-layout.header";

interface BaseLayoutProps {
  children: Readonly<React.ReactNode>;
}
const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen text-lg">
      <BaseLayoutHeader />
      <div className="flex flex-1 justify-center py-2">
        <div className="w-content">{children}</div>
      </div>
    </div>
  );
};

export default BaseLayout;
