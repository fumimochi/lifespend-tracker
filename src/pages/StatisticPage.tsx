import StatisticByCategory from '../features/statistic/StatisticByCategory';
import StatisticGraphForCurrentMonth from '../features/statistic/StatisticGraphForCurrentMonth';
import StatisticInfoBars from '../features/statistic/StatisticInfoBars';
import StatisticTopSpendsList from '../features/statistic/StatisticTopSpendsList';

const categories = [
  {
    key: 'food',
    icon: '🍕',
    label: 'Food',
    amount: 489,
    percent: 58,
    color: 'bg-orange-400',
  },
  {
    key: 'sport',
    icon: '🏋️',
    label: 'Sport',
    amount: 202,
    percent: 24,
    color: 'bg-emerald-500',
  },
  {
    key: 'health',
    icon: '💊',
    label: 'Health',
    amount: 92,
    percent: 11,
    color: 'bg-red-400',
  },
  {
    key: 'other',
    icon: '📦',
    label: 'Other',
    amount: 59,
    percent: 7,
    color: 'bg-gray-400',
  },
];

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const weekData = [45, 0, 0, 0, 0, 0, 0];

const topSpends = [
  { icon: '🍕', label: 'Restaurant with friends', date: '5 June', amount: 120 },
  { icon: '🏋️', label: 'Gym abonement', date: '1 June', amount: 90 },
  { icon: '📦', label: 'Headphones', date: '17 June', amount: 89 },
  { icon: '🍕', label: 'Weekly groceries', date: '14 June', amount: 75 },
  { icon: '🏋️', label: 'Protein 2kg', date: '10 June', amount: 62 },
];

export default function StatisticPage() {
  const spent = 842;
  const budget = 1200;
  const percentOfBudget = Math.round((spent / budget) * 100);
  const maxWeekValue = Math.max(...weekData) || 1;
  return (
    <>
      <StatisticInfoBars />

      <div className="mt-6 flex flex-wrap justify-around gap-6">
        <StatisticByCategory />

        <StatisticGraphForCurrentMonth />

        <StatisticTopSpendsList />
      </div>
    </>
  );
}
