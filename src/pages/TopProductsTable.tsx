import React from "react";
import { ProductData } from "../types";

interface TopProductsTableProps {
  data: ProductData[];
}

const TopProductsTable: React.FC<TopProductsTableProps> = ({ data }) => {
  return (
    <div className="bg-white p-4 shadow-md">
      <h2 className="text-xl font-bold mb-4">Top Products</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Units Sold</th>
            <th className="px-4 py-2">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.unitsSold}</td>
              <td className="border px-4 py-2">{product.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProductsTable;