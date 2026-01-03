import {
    LineChart as ReLineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import type {AnalyticsRecord} from "../types/analytics";

interface Props {
    data: AnalyticsRecord[];
}

const LineChart = ({ data }: Props) => {
    return (
        <div className="h-72 p-6 rounded-2xl bg-gray-900/80 border border-gray-800">
            <h3 className="mb-4 font-medium">Users Over Time</h3>
            <ResponsiveContainer width="100%" height="100%">
                <ReLineChart data={data}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="users"
                        stroke="#a78bfa"
                        strokeWidth={2}
                    />
                </ReLineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChart;
