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
    <div className="flex w-screen fixed top-0 left-0 h-screen overflow-y-auto">
      <div className="w-1/4 ">
        <div className="h-full px-3 py-4 bg-gray-50 dark:bg-gray-800">
          <div>
            <p>Kombrazy</p>
          </div>
          <div className="fixed cursor-pointer">
            <div className="m-4 w-full "> {leftContent}</div>
          </div>
        </div>
      </div>
      <div className="w-4/6 ">
        <div className="h-full px-3 py-4 dark:bg-blue-950 dark:bg-opacity-35">
          <div className="fixed w-full">{middleContent}</div>
        </div>
      </div>
      <div className="w-1/6 ">
        <div className="h-full items-center px-3 py-4 bg-gray-50 dark:bg-gray-800">
          <div className="fixed ">{rightContent}</div>
        </div>
      </div>
    </div>
  );
};
