import { statisticIcons } from "../../../../shared/data/statistic-icons";

export default function StatisticsBox({ title, icon, result }: { title: string, icon: string, result: string | number }) {
    return (
        <>
            <div className="grow shrink-0 rounded-lg shadow bg-primary-900 h-28 ring-1 ring-primary-800 flex items-center px-4 py-6">
                {/* Statistic icon */}
                {statisticIcons[icon]}
                {/* Name */}
                <div className="ms-4">
                    <h4 className="uppercase text-gray-400 font-bold text-sm">{title}</h4>
                    <p className="text-white text-2xl font-medium leading-8">{result}</p>
                </div>
            </div>
        </>
    )
}