import React from "react";

type NavigationOption = {
  label: string;
  value: string;
};

type RightsideLayoutProps = {
  options: NavigationOption[];
};

export const RightsideLayout: React.FC<RightsideLayoutProps> = ({
  options,
}) => {
  return (
    <div>
      <h3>Navigation</h3>
      <ul className="flex flex-col items-center space-y-6 bg-gray-800 rounded-lg py-8 px-6 shadow-lg h-screen fixed top-0 right-0 w-1/6 ">
        {options.map((option) => (
          <li key={option.value} className="text-white w-full text-center py-3 px-5 rounded-md hover:bg-teal-600 hover:text-gray-100 transition-all duration-300 cursor-pointer">
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
  
};
