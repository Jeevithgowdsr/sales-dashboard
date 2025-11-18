"use client";
import SalesChart from "../components/SalesChart";


export default function DashboardPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Sales Dashboard</h1>
      <SalesChart />
    </div>
  );
}
