import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4 fixed top-0 left-0 w-full text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Sales Dashboard</h1>
      <div className="flex items-center space-x-4">
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;