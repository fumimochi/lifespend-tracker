import type { calculateRightBarInfo } from '../../../functions/spendsCalculation';

type HomeInfoBars = {
  info: ReturnType<typeof calculateRightBarInfo>;
};

export default function RightBarInfo({ info }: HomeInfoBars) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="flex flex-col bg-white shadow-sm rounded-2xl p-4 max-w-sm">
        <p className="text-gray-600">For {info.month}</p>
        <p className="text-2xl font-medium">${info.totalMonthSpends}</p>
        <p className="text-gray-500 text-sm">from ${info.budget} budget</p>
      </div>
      <div className="flex flex-col bg-white shadow-sm rounded-2xl p-4 max-w-sm">
        <p className="text-gray-600">Left</p>
        <p className="text-green-600 text-2xl font-medium">${info.left}</p>
        <p className="text-gray-500 text-sm">for the end of this month</p>
      </div>
      <div className="flex flex-col bg-white shadow-sm rounded-2xl p-4 max-w-sm">
        <p className="text-gray-600">Todays spends</p>
        <p className=" text-2xl font-medium">{info.todaysSpendsCount}</p>
        <p className="text-gray-500 text-sm">for ${info.totalToday}</p>
      </div>
    </div>
  );
}
