import { analyticsData } from "../data/analytics";
import KPIStat from "../components/KPIStat";
import LineChart from "../components/LineChart";

const AnalyticsDashboard = () => {
    const totalUsers = analyticsData.reduce((sum, d) => sum + d.users, 0);
    const totalActive = analyticsData.reduce((sum, d) => sum + d.activeUsers, 0);
    const totalRevenue = analyticsData.reduce((sum, d) => sum + d.revenue, 0);
    const conversionRate = ((totalActive / totalUsers) * 100).toFixed(1);

    return (
        <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
            <h1 className="text-3xl font-semibold mb-8">Analytics Dashboard</h1>

            <div className="grid gap-6 md:grid-cols-4 mb-10">
                <KPIStat label="Total Users" value={totalUsers} />
                <KPIStat label="Active Users" value={totalActive} />
                <KPIStat label="Conversion Rate" value={`${conversionRate}%`} />
                <KPIStat label="Revenue" value={`$${totalRevenue.toLocaleString()}`} />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                <LineChart data={analyticsData} />
                {/*<BarChart data={analyticsData} />*/}
                {/*<PieChart data={analyticsData} />*/}
            </div>
        </div>
    );
};

export default AnalyticsDashboard;
