interface FiltersProps {
    range: number;
    source: string;
    onRangeChange: (v: number) => void;
    onSourceChange: (v: string) => void;
}

const Filters = ({ range, source, onRangeChange, onSourceChange }: FiltersProps) => {
    return (
        <div className="flex flex-wrap gap-4 mb-8">
            <select
                value={range}
                onChange={(e) => onRangeChange(Number(e.target.value))}
                className="px-4 py-2 rounded-xl bg-gray-900 border border-gray-700"
            >
                <option value={7}>Last 7 days</option>
                <option value={30}>Last 30 days</option>
                <option value={90}>Last 90 days</option>
            </select>

            <select
                value={source}
                onChange={(e) => onSourceChange(e.target.value)}
                className="px-4 py-2 rounded-xl bg-gray-900 border border-gray-700"
            >
                <option value="all">All sources</option>
                <option value="organic">Organic</option>
                <option value="paid">Paid</option>
                <option value="referral">Referral</option>
            </select>
        </div>
    );
};

export default Filters;
