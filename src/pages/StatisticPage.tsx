import { useEffect, useMemo, useState } from 'react';
import { useMonth } from '../context/MonthContext';
import StatisticByCategory from '../features/statistic/StatisticByCategory';
import StatisticGraphForCurrentMonth from '../features/statistic/StatisticGraphForCurrentMonth';
import StatisticInfoBars from '../features/statistic/StatisticInfoBars';
import StatisticTopSpendsList from '../features/statistic/StatisticTopSpendsList';
import type { Spend } from '../types/types';
import getStorage from '../storage/storage';
import {
  calculateBars,
  calculateByCategory,
  calculateGraphData,
  calculateTopSpends,
} from '../functions/statCalculation';
import { getSpendsByUser } from '../api/spends';

export default function StatisticPage() {
  const { month } = useMonth();
  const { id } = getStorage();
  const [spends, setSpends] = useState<Spend[] | null>(null);

  useEffect(() => {
    getSpendsByUser(id).then(setSpends);
  }, []);

  const stats = useMemo(() => {
    if (!spends) return null;

    return {
      bars: calculateBars(spends),
      byCategory: calculateByCategory(spends),
      graph: calculateGraphData(spends),
      topList: calculateTopSpends(spends),
    };
  }, [spends]);

  if (!spends || !stats) return null;

  return (
    <>
      <StatisticInfoBars month={month} info={stats.bars} />

      <div className="mt-6 flex flex-wrap justify-around gap-6">
        <StatisticByCategory info={stats.byCategory} />

        <StatisticGraphForCurrentMonth month={month} info={stats.graph} />

        <StatisticTopSpendsList info={stats.topList} />
      </div>
    </>
  );
}
