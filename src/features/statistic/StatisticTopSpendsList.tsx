export default function StatisticTopSpendsList() {
  return (
    <div className="my-6 bg-white shadow-sm p-5 rounded-2xl mx-auto w-full max-w-4xl">
      <p className="font-bold mb-4">Top spends for this month</p>
      <ul className="flex flex-col gap-3">
        <li key={0} className="flex justify-between items-center">
          <span className="flex items-center gap-2">📦 TV</span>
          <span className="text-gray-500 text-sm">13 August</span>
          <span className="font-bold">$400</span>
        </li>
        <li key={1} className="flex justify-between items-center">
          <span className="flex items-center gap-2">🍕 Pancakes</span>
          <span className="text-gray-500 text-sm">05 August</span>
          <span className="font-bold">$93</span>
        </li>
        <li key={2} className="flex justify-between items-center">
          <span className="flex items-center gap-2">📦 Headphones</span>
          <span className="text-gray-500 text-sm">08 June</span>
          <span className="font-bold">$89</span>
        </li>
        <li key={3} className="flex justify-between items-center">
          <span className="flex items-center gap-2">🍕 Products</span>
          <span className="text-gray-500 text-sm">23 June</span>
          <span className="font-bold">$61</span>
        </li>
        <li key={4} className="flex justify-between items-center">
          <span className="flex items-center gap-2">🏋️ Gym abonement</span>
          <span className="text-gray-500 text-sm">20 July</span>
          <span className="font-bold">$45</span>
        </li>
      </ul>
    </div>
  );
}
