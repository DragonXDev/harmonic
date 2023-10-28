import dynamic from 'next/dynamic';
import { FC } from 'react';

// import MiniCalendar from "@/components/calendar/MiniCalendar";
import PieChartCard from "./components/PieChartCard";
import Upload from "./components/Upload";



type Props = {};

const DashboardPage: FC<Props> = () => {
    return (
        <>
        
                {/* Traffic chart & Pie Chart */}
                <div className="grid grid-cols-1 gap-5 pt-5 rounded-[20px] md:grid-cols-2">
                    <PieChartCard />
                    <Upload/>
                </div>

        </>
    );
}

export default DashboardPage;