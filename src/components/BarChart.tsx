import {
    BarChart as ReBarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import type {AnalyticsRecord} from "../types/analytics";

interface Props {
    data: AnalyticsRecord[];
}

const BarChart = ({ data }: Props) => {
    return (
        <div className="h-72 p-6 rounded-2xl bg-gray-900/80 border border-gray-800">
            <h3 className="mb-4 font-medium">Revenue Trend</h3>
            <ResponsiveContainer width="100%" height="100%">
                <ReBarChart data={data}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#8b5cf6" />
                </ReBarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChart;
