import { Category } from '../../types/types';

export default function StatisticByCategory({ info }) {
  const totalValue = Object.entries(info).reduce((acc, cur) => {
    return acc + cur[1];
  }, 0);

  return (
    <div className="bg-white shadow-sm p-5 rounded-2xl w-full max-w-md">
      <p className="font-bold mb-4">By category</p>
      <ul className="flex flex-col gap-6">
        {Object.entries(info).map((item) => {
          const title = item[0].charAt(0).toUpperCase() + item[0].slice(1);
          const percent = Math.round((item[1] * 100) / totalValue);

          return (
            <li
              key={item[0]}
              className="grid grid-cols-[110px_1fr_50px_40px] items-center gap-3"
            >
              <label htmlFor={item[0] + '_progress'} className="text-lg">
                {Category[item[0]] + ' ' + title}
              </label>
              <progress
                id={item[0] + '_progress'}
                max="100"
                value={percent}
                className="w-full h-2 rounded-full overflow-hidden bg-gray-200"
              >
                {percent}%
              </progress>
              <span>${item[1]}</span>
              <span>{percent}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
