import React from "react";

type LayoutProps = {
  leftContent: React.ReactNode;
  middleContent: React.ReactNode;
  rightContent: React.ReactNode;
};

export const Layout = ({
  leftContent,
  middleContent,
  rightContent,
}: LayoutProps) => {
  return (
    <div className="flex w-screen fixed top-0 left-0 h-screen overflow-y-auto font-mono list-none md:list-disc  md:bg-gray-900 ">


      <div className="w-1/6 ">
        <div className="h-full px-3 py-4  ">
          <div className="fixed ">{leftContent}</div>
        </div>
      </div>


      <div className="w-4/6 ">
        <div className="h-full px-3 py-4 dark:bg-teal-900">
          <div className="fixed w-full">{middleContent}</div>
        </div>
      </div>
      
      <div className="w-1/6 ">
        <div className="h-full items-center px-3 py-4 ">
          <div className="fixed ">{rightContent}</div>
        </div>
      </div>
    </div>
  );
};
