import {
    PieChart as RePieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import type {AnalyticsRecord} from "../types/analytics";

interface Props {
    data: AnalyticsRecord[];
}

const COLORS = ["#a78bfa", "#8b5cf6", "#6d28d9"];

const PieChart = ({ data }: Props) => {
    const sourceData = ["organic", "paid", "referral"].map((source) => ({
        name: source,
        value: data.filter((d) => d.source === source).length,
    }));

    return (
        <div className="h-72 p-6 rounded-2xl bg-gray-900/80 border border-gray-800">
            <h3 className="mb-4 font-medium">Traffic Sources</h3>
            <ResponsiveContainer width="100%" height="100%">
                <RePieChart>
                    <Pie
                        data={sourceData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={50}
                        outerRadius={80}
                    >
                        {sourceData.map((_, i) => (
                            <Cell key={i} fill={COLORS[i]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </RePieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PieChart;
