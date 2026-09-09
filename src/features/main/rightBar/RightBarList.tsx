import { removeSpend } from '../../../api/spends';
import FilterButton from '../../../components/FilterButton';
import { Category, Months } from '../../../types/types';

function remove(e: MouseEvent, id: string,) {
  e.preventDefault();
  if(e.target.value === 'xmark') {
    removeSpend(id);
  } else {
    return null;
  }
}

export default function RightBarList({ info, filter, onSelect }) {

  return (
    <div>
      <div className="flex gap-6 items-center flex-wrap bg-white shadow-sm rounded-2xl p-4 w-full max-w-2xl mt-5">
        <span className="text-gray-600">Filter:</span>
        <FilterButton
          title="All"
          name="all"
          filter={onSelect}
          isActive={filter === 'all' || filter === null}
        />

        <FilterButton
          title="🍕 Food"
          name="food"
          filter={onSelect}
          isActive={filter === 'food'}
        />
        <FilterButton
          title="🏋️ Sport"
          name="sport"
          filter={onSelect}
          isActive={filter === 'sport'}
        />
        <FilterButton
          title="💊 Health"
          name="health"
          filter={onSelect}
          isActive={filter === 'health'}
        />
        <FilterButton
          title="📦 Other"
          name="other"
          filter={onSelect}
          isActive={filter === 'other'}
        />
      </div>

      <div className="mt-5">
        <ul>
          {info.map((i) => {
            const dateInArray = i.date.split('-');
            return (
              <li
                className="flex justify-between bg-white shadow-sm rounded-2xl p-3 w-full max-w-2xl mt-3"
                key={i.id} onClick={(e) => remove(e, i.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-10 bg-gray-200 rounded-sm flex items-center justify-center">
                    <p className="text-2xl">{Category[i.category]}</p>
                  </div>
                  <div className="flex flex-col">
                    <span>{i.title}</span>
                    <span className="text-gray-500 text-sm">
                      {i.category.split('')[0].toUpperCase() +
                        i.category.slice(1)}{' '}
                      {'- ' + dateInArray[0] + ' ' + Months[Number(dateInArray[1]) - 1]}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-lg">${i.amount}</p>
                  <button className="text-2xl hover:cursor-pointer" value='xmark'>✖️</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
