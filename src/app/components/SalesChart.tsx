"use client";

import { useState } from "react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie,
  XAxis, YAxis, Tooltip, Legend, CartesianGrid
} from "recharts";

const mockData = [
  { year: 2022, sales: Math.floor(Math.random() * 5000) + 2000 },
  { year: 2023, sales: Math.floor(Math.random() * 5000) + 2000 },
  { year: 2024, sales: Math.floor(Math.random() * 5000) + 2000 },
];

export default function SalesChart() {
  const [threshold, setThreshold] = useState(0);
  const [chartType, setChartType] = useState("bar");

  const filteredData = mockData.filter((d) => d.sales >= threshold);

  return (
    <div className="space-y-6">
      {/* Threshold Filter */}
      <div>
        <label className="block mb-2 font-medium">Sales Threshold</label>
        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value))}
          className="border p-2 rounded"
          placeholder="Enter minimum sales"
        />
      </div>

      {/* Chart Type Buttons */}
      <div className="flex gap-3">
        {["bar", "line", "pie"].map((type) => (
          <button
            key={type}
            onClick={() => setChartType(type)}
            className={`px-4 py-2 rounded ${
              chartType === type ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Render Chart */}
      {chartType === "bar" && (
        <BarChart width={500} height={300} data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#3b82f6" />
        </BarChart>
      )}

      {chartType === "line" && (
        <LineChart width={500} height={300} data={filteredData}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#ef4444" />
        </LineChart>
      )}

      {chartType === "pie" && (
        <PieChart width={500} height={300}>
          <Pie
            data={filteredData}
            dataKey="sales"
            nameKey="year"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#10b981"
            label
          />
          <Tooltip />
        </PieChart>
      )}
    </div>
  );
}
