import type { calculateBars } from "../../functions/statCalculation";

type StatisticInfoBarsProps = {
  month: string;
  info: ReturnType<typeof calculateBars>
};

export default function StatisticInfoBars({
  month, info
}: StatisticInfoBarsProps) {
  return (
    <div className="mt-10 flex flex-wrap justify-around gap-6">
      <div className="bg-white shadow-sm rounded-2xl p-5 w-55">
        <p className="text-gray-600">Total for {month}</p>
        <p className="text-2xl font-medium">${info.total}</p>
        <p className="text-gray-500 text-sm">{info.transAmount} transactions</p>
      </div>
      <div className="bg-white shadow-sm rounded-2xl p-5 w-55">
        <p className="text-gray-600">Average spend</p>
        <p className="text-2xl font-medium">${info.avg}</p>
        <p className="text-gray-500 text-sm">for single transaction</p>
      </div>
      <div className="bg-white shadow-sm rounded-2xl p-5 w-55">
        <p className="text-gray-600">The biggest spend</p>
        <p className="text-2xl font-medium text-red-600">${info.biggest}</p>
        <p className="text-gray-500 text-sm">{info.biggestDescription}</p>
      </div>
    </div>
  );
}
