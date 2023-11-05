"use client";
import { FC, useState } from "react";
// import MiniCalendar from "@/components/calendar/MiniCalendar";
import PieChartCard from "./components/PieChartCard";
import Upload from "./components/Upload";
import LineGraph from "./components/LineChartCard";

type Props = {};

function DashboardPage() {
  const [graphData, setGraphData] = useState(null);
  const handleDataReceived = (data) => {
    setGraphData(data);
    console.log("WE DID IT!");
  };

  return (
    <>
      {/* Traffic chart & Pie Chart */}
      <div className="grid grid-cols-1 gap-5 pt-5 rounded-[20px] md:grid-cols-2">
        <PieChartCard />
        <Upload onDataReceived={handleDataReceived} />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-1">
        <LineGraph result={graphData} />
      </div>
    </>
  );
}

export default DashboardPage;
