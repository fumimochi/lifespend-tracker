export default function StatisticByCategory() {
  return (
    <div className="bg-white shadow-sm p-5 rounded-2xl w-full max-w-md">
      <p className="font-bold mb-4">By category</p>
      <ul className="flex flex-col gap-6">
        <li
          key="food"
          className="grid grid-cols-[110px_1fr_50px_40px] items-center gap-3"
        >
          <label htmlFor="food_progress" className="text-lg">
            🍕 Food
          </label>
          <progress
            id="food_progress"
            max="100"
            value="58"
            className="w-full h-2 rounded-full overflow-hidden bg-gray-200"
          >
            58%
          </progress>
          <span>$489</span>
          <span>58%</span>
        </li>
        <li
          key="food"
          className="grid grid-cols-[110px_1fr_50px_40px] items-center gap-3"
        >
          <label htmlFor="sport_progress" className="text-lg">
            🏋️ Sport
          </label>
          <progress
            id="sport_progress"
            max="100"
            value="24"
            className="w-full h-2 rounded-full overflow-hidden bg-gray-200"
          >
            58%
          </progress>
          <span>$202</span>
          <span>24%</span>
        </li>
        <li
          key="food"
          className="grid grid-cols-[110px_1fr_50px_40px] items-center gap-3"
        >
          <label htmlFor="health_progress" className="text-lg">
            💊 Health
          </label>
          <progress
            id="health_progress"
            max="100"
            value="11"
            className="w-full h-2 rounded-full overflow-hidden bg-gray-200"
          >
            11%
          </progress>
          <span>$92</span>
          <span>11%</span>
        </li>
        <li
          key="food"
          className="grid grid-cols-[110px_1fr_50px_40px] items-center gap-3"
        >
          <label htmlFor="other_progress" className="text-lg">
            📦 Other
          </label>
          <progress
            id="other_progress"
            max="100"
            value="7"
            className="w-full h-2 rounded-full overflow-hidden bg-gray-200"
          >
            7%
          </progress>
          <span>$59</span>
          <span>7%</span>
        </li>
      </ul>
    </div>
  );
}
