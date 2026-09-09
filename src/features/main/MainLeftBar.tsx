import { useState } from 'react';
import FormField from '../../components/FormField';
import FilterButton from '../../components/FilterButton';
import { Category, type Spend } from '../../types/types';
import { addSpend } from '../../api/spends';
import getStorage from '../../storage/storage';

type categoryType = keyof typeof Category;

export default function MainLeftBar() {
  const [error, setError] = useState<string | null>(null);
  const [categoryCreation, setCategoryCreation] =
    useState<categoryType>('food');

  async function handleSumbit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const data = new FormData(e.currentTarget);
    const amount = data.get('amount') as string;
    const desc = data.get('desc') as string;
    const date = data.get('date') as string;
    const { id } = getStorage();

    const newSpend: Spend = {
      id: '',
      userId: id,
      amount: Number(amount),
      category: categoryCreation,
      title: desc,
      date: date.split('-').reverse().join('-'),
    };

    try {
      console.log(newSpend)
      addSpend(newSpend);
    } catch {
      setError(
        'Unknown error with spend creation. Try to renew fields before sending.',
      );
    }
  }

  return (
    <div className="flex flex-col gap-6 bg-white rounded-2xl px-6 pt-6 pb-15 h-fit shadow-sm w-full max-w-sm">
      <h1 className="font-bold text-2xl">New spend</h1>
      <form onSubmit={handleSumbit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <FormField
            type="number"
            name="amount"
            id="amount"
            label="AMOUNT"
            placeholder="0.00"
            required
          />

          <FormField
            type="text"
            name="desc"
            id="desc"
            label="DESCRIPTION"
            placeholder="For instance: protein, lunch..."
            required
          />

          <FormField type="date" name="date" id="date" label="DATE" required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-500 text-xs font-medium tracking-wide">
            CATEGORY
          </label>
          <div className="grid grid-cols-2 gap-3">
            <FilterButton
              typeOfButton="creation"
              name="food"
              title="🍕 Food"
              filter={setCategoryCreation}
              isActive={categoryCreation === 'food'}
            />

            <FilterButton
              typeOfButton="creation"
              name="sport"
              title="🏋️ Sport"
              filter={setCategoryCreation}
              isActive={categoryCreation === 'sport'}
            />

            <FilterButton
              typeOfButton="creation"
              name="health"
              title="💊 Health"
              filter={setCategoryCreation}
              isActive={categoryCreation === 'health'}
            />

            <FilterButton
              typeOfButton="creation"
              name="other"
              title="📦 Other"
              filter={setCategoryCreation}
              isActive={categoryCreation === 'other'}
            />
          </div>
        </div>

        <button className="h-12 bg-black rounded-lg text-white font-medium hover:cursor-pointer hover:bg-gray-800 transition-colors">
          + Add spent
        </button>

        {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
}
