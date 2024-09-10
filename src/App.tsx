// src/App.tsx
import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SalesOverviewGraph from "./pages/SalesOverviewGraph";
import SalesByRegionMap from "./pages/SalesByRegionMap";
import TopProductsTable from "./pages/TopProductsTable";
import FilterControls from "./components/FilterControls";
import { salesData, productData } from "./services/mockData";

const App: React.FC = () => {
  const [filteredData, setFilteredData] = useState(salesData);
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const filterData = (startDate: string, endDate: string, region: string) => {
    let filtered = salesData;
    if (region !== "All Regions") {
      filtered = filtered.filter((data) => data.region === region);
    }
    if (startDate && endDate) {
      filtered = filtered.filter(
        (data) =>
          new Date(data.date) >= new Date(startDate) &&
          new Date(data.date) <= new Date(endDate)
      );
    }
    setFilteredData(filtered);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-64 p-8">
        {/* Header */}
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8"/>
        {/* Filter Controls */}
        <FilterControls onFilter={filterData} />

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Sales Overview Graph */}
          <SalesOverviewGraph data={filteredData} />

          {/* Sales by Region Map */}
          <SalesByRegionMap />

          {/* Top Products Table */}
          <div className="lg:col-span-2">
            <TopProductsTable data={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
