import Navbar from "@/app/components/Navbar/Navbar";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import React, { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="w-full">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};

export default PageLayout;
