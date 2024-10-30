import React from "react";

type MenuOption = {
  label: string;
  value: string;
};

type LeftsideLayoutProps = {
  options: MenuOption[];
  onMenuSelect: (option: string) => void;
};

export const LeftsideLayout: React.FC<LeftsideLayoutProps> = ({
  options,
  onMenuSelect,
}) => {
  return (
    <div>
      <ul className="flex flex-col items-center space-y-6 bg-gray-800 rounded-lg py-8 px-6 shadow-lg h-screen fixed top-0 left-0 w-1/6 "> 
        {options.map((option) => (
          <li  key={option.value} onClick={() => onMenuSelect(option.value)} className="text-white w-full text-center py-3 px-5 rounded-md hover:bg-teal-600 hover:text-gray-100 transition-all duration-300 cursor-pointer">
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
