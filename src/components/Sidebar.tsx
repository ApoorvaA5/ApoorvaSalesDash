// src/components/Sidebar.tsx
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white h-full w-64 fixed top-0 left-0 pt-16">
      <nav className="flex flex-col p-4 space-y-4">
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Overview
        </a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Sales by Region
        </a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Top Products
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
