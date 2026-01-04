import { analyticsData } from "../data/analytics";
import KPIStat from "../components/KPIStat";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import {useState} from "react";
import Filters from "../components/Filters.tsx";

const AnalyticsDashboard = () => {
    const [range, setRange] = useState(30)
    const [source, setSource] = useState("all")

    const latestDate = new Date(
        analyticsData[analyticsData.length - 1].date
    );

    const filteredData = analyticsData.filter(d => {
        const recordDate = new Date(d.date);
        const diffInDays =
            (latestDate.getTime() - recordDate.getTime()) /
            (1000 * 60 * 60 * 24);

        return (
            diffInDays <= range &&
            (source === "all" || d.source === source)
        );
    });


    const totalUsers = filteredData.reduce((sum, d) => sum + d.users, 0);
    const totalActive = filteredData.reduce((sum, d) => sum + d.activeUsers, 0);
    const totalRevenue = filteredData.reduce((sum, d) => sum + d.revenue, 0);
    const conversionRate = totalUsers === 0 ? "0.0" : ((totalActive / totalUsers) * 100).toFixed(1);

    return (
        <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-semibold">Analytics Dashboard</h1>
                <p className="text-gray-400 text-sm">
                    Overview of user growth, engagement, and revenue performance
                </p>
            </div>
            <Filters
                range={range}
                source={source}
                onRangeChange={setRange}
                onSourceChange={setSource}
            />


            <div className="grid gap-6 md:grid-cols-4 mb-10">
                <KPIStat label="Total Users" value={totalUsers} />
                <KPIStat label="Active Users" value={totalActive} />
                <KPIStat label="Conversion Rate" value={`${conversionRate}%`} />
                <KPIStat label="Revenue" value={`$${totalRevenue.toLocaleString()}`} />
            </div>
            {filteredData.length === 0 && (
                <div className="text-center text-gray-500 py-20">
                    No data available for selected filters.
                </div>
            )}

            <div className="grid gap-6 md:grid-cols-2">
                <LineChart data={filteredData} />
                <BarChart data={filteredData} />
                <PieChart data={filteredData} />
            </div>
        </div>
    );
};

export default AnalyticsDashboard;
