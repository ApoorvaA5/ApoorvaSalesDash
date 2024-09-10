import React, { useState } from "react";  // Add this import to ensure it's a module

interface FilterControlsProps {
  onFilter: (startDate: string, endDate: string, region: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({ onFilter }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [region, setRegion] = useState("All Regions");

  const handleFilter = () => {
    onFilter(startDate, endDate, region);
  };

  return (
    <div className="flex space-x-4 p-4">
      <input
        type="date"
        className="border p-2"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        className="border p-2"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <select
        className="border p-2"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option>All Regions</option>
        <option>North America</option>
        <option>Europe</option>
        <option>Asia</option>
        <option>South America</option>
        <option>Africa</option>
      </select>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleFilter}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterControls;
export{}