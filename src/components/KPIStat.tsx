interface KPIStatProps {
    label: string;
    value: string | number;
}

const KPIStat = ({ label, value }: KPIStatProps) => {
    return (
        <div className="
      rounded-2xl p-6
      bg-gray-900/80 backdrop-blur
      border border-gray-800
       transition
  hover:-translate-y-1
  hover:shadow-lg
  hover:shadow-violet-500/10
    ">
            <p className="text-sm text-gray-400 mb-1">{label}</p>
            <p className="text-2xl font-semibold text-white tracking-tight">{value}</p>
        </div>
    );
};

export default KPIStat;
