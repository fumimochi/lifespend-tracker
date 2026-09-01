import { Category, type Spend } from '../../types/types';

type StatisticTopSpendsListProps = {
  info: Spend[];
};

export default function StatisticTopSpendsList({
  info,
}: StatisticTopSpendsListProps) {
  return (
    <div className="my-6 bg-white shadow-sm p-5 rounded-2xl mx-auto w-full max-w-4xl">
      <p className="font-bold mb-4">Top spends for this month</p>
      <ul className="flex flex-col gap-3">
        {info.map((item) => {
          return (
            <li key={item.id} className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                {Category[item.category] + ' ' + item.title}
              </span>
              <span className="text-gray-500 text-sm">{item.date}</span>
              <span className="font-bold">${item.amount}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
