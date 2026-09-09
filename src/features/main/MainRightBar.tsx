import { useEffect, useMemo, useState } from 'react';
import { useMonth } from '../../context/MonthContext';
import type { Spend } from '../../types/types';
import getStorage from '../../storage/storage';
import { getSpendsByUser } from '../../api/spends';
import { calculateRightBarInfo } from '../../functions/spendsCalculation';
import RightBarInfo from './rightBar/RightBarInfo';
import RightBarList from './rightBar/RightBarList';

export default function MainRightBar() {
  const { month } = useMonth();
  const { id } = getStorage();
  const [spends, setSpends] = useState<Spend[] | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  useEffect(() => {
    getSpendsByUser(id).then(setSpends);
  }, [id])

  const filteredSpends = useMemo(() => {
    if(!spends) return null;
    if(!categoryFilter || categoryFilter === 'all') return spends;
    return spends.filter(e => e.category === categoryFilter);
  }, [spends, categoryFilter])

  const spendInfo = useMemo(() => {
    if (!spends) return null;
    
    return {
      bars: calculateRightBarInfo(spends, month),
    };
  }, [spends, month]);

  if (!spends || !spendInfo) return null;

  return (
    <div>
      <RightBarInfo info={spendInfo.bars}/>

      <RightBarList info={filteredSpends} filter={categoryFilter} onSelect={setCategoryFilter}/>
    </div>
  );
}
