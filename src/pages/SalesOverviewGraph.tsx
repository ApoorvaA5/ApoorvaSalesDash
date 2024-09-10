// src/components/SalesOverviewGraph.tsx
import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { SalesData } from "../types";

// Registering required components from Chart.js
ChartJS.register(
  CategoryScale,   // x-axis scale
  LinearScale,     // y-axis scale
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SalesOverviewGraphProps {
  data: SalesData[];
}

const SalesOverviewGraph: React.FC<SalesOverviewGraphProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Sales",
        data: data.map((item) => item.totalSales),
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div className="bg-white p-4 shadow-md">
      <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
      <Line data={chartData} />
    </div>
  );
};

export default SalesOverviewGraph;
