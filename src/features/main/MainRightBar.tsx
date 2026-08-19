export default function MainRightBar() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="flex flex-col bg-white shadow-sm rounded-2xl p-4 max-w-sm">
          <p className="text-gray-600">For june</p>
          <p className="text-2xl font-medium">$842</p>
          <p className="text-gray-500 text-sm">from $1200 budget</p>
        </div>
        <div className="flex flex-col bg-white shadow-sm rounded-2xl p-4 max-w-sm">
          <p className="text-gray-600">Left</p>
          <p className="text-green-600 text-2xl font-medium">$358</p>
          <p className="text-gray-500 text-sm">for the end of this month</p>
        </div>
        <div className="flex flex-col bg-white shadow-sm rounded-2xl p-4 max-w-sm">
          <p className="text-gray-600">Todays spends</p>
          <p className=" text-2xl font-medium">3</p>
          <p className="text-gray-500 text-sm">for $124</p>
        </div>
      </div>

      <div className="flex gap-6 items-center flex-wrap bg-white shadow-sm rounded-2xl p-4 w-full max-w-2xl mt-5">
        <span className="text-gray-600">Filter:</span>
        <button className="border rounded-2xl border-gray-200 bg-green-500 text-white py-1 px-4 hover:cursor-pointer opacity-100 hover:opacity-80 transition-opacity duration-300">
          All
        </button>
        <button className="border rounded-2xl border-gray-200 bg-gray-50 text-gray-700 py-1 px-4 hover:cursor-pointer opacity-100 hover:opacity-80 transition-opacity duration-300">
          🍕 Food
        </button>
        <button className="border rounded-2xl border-gray-200 bg-gray-50 text-gray-700 py-1 px-4 hover:cursor-pointer opacity-100 hover:opacity-80 transition-opacity duration-300">
          🏋️ Sport
        </button>
        <button className="border rounded-2xl border-gray-200 bg-gray-50 text-gray-700 py-1 px-4 hover:cursor-pointer opacity-100 hover:opacity-80 transition-opacity duration-300">
          💊 Health
        </button>
        <button className="border rounded-2xl border-gray-200 bg-gray-50 text-gray-700 py-1 px-4 hover:cursor-pointer opacity-100 hover:opacity-80 transition-opacity duration-300">
          📦 Other
        </button>
      </div>

      <div className="mt-5">
        <ul>
          <li className="flex justify-between bg-white shadow-sm rounded-2xl p-3 w-full max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 bg-gray-200 rounded-sm flex items-center justify-center">
                <p className="text-2xl">📦</p>
              </div>
              <div className="flex flex-col">
                <span>Headphones</span>
                <span className="text-gray-500 text-sm">Other - 08 June</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-lg">$89</p>
              <button className="text-2xl">✖️</button>
            </div>
          </li>
          <li className="flex justify-between bg-white shadow-sm rounded-2xl p-3 w-full max-w-2xl mt-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 bg-green-200 rounded-sm flex items-center justify-center">
                <p className="text-2xl">🏋️</p>
              </div>
              <div className="flex flex-col">
                <span>Protein</span>
                <span className="text-gray-500 text-sm">Sport - 09 August</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-lg">$39</p>
              <button className="text-2xl">✖️</button>
            </div>
          </li>
          <li className="flex justify-between bg-white shadow-sm rounded-2xl p-3 w-full max-w-2xl mt-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 bg-amber-100 rounded-sm flex items-center justify-center">
                <p className="text-2xl">🍕</p>
              </div>
              <div className="flex flex-col">
                <span>Products</span>
                <span className="text-gray-500 text-sm">Food - 23 June</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-lg">$61</p>
              <button className="text-2xl">✖️</button>
            </div>
          </li>
          <li className="flex justify-between bg-white shadow-sm rounded-2xl p-3 w-full max-w-2xl mt-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 bg-amber-100 rounded-sm flex items-center justify-center">
                <p className="text-2xl">🍕</p>
              </div>
              <div className="flex flex-col">
                <span>Eating in cafe</span>
                <span className="text-gray-500 text-sm">Food - 21 June</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-lg">$18</p>
              <button className="text-2xl">✖️</button>
            </div>
          </li>
          <li className="flex justify-between bg-white shadow-sm rounded-2xl p-3 w-full max-w-2xl mt-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 bg-green-200 rounded-sm flex items-center justify-center">
                <p className="text-2xl">🏋️</p>
              </div>
              <div className="flex flex-col">
                <span>Gym abonement</span>
                <span className="text-gray-500 text-sm">Sport - 20 July</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-lg">$45</p>
              <button className="text-2xl">✖️</button>
            </div>
          </li>
          <li className="flex justify-between bg-white shadow-sm rounded-2xl p-3 w-full max-w-2xl mt-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 bg-pink-200 rounded-sm flex items-center justify-center">
                <p className="text-2xl">💊</p>
              </div>
              <div className="flex flex-col">
                <span>Vitamines</span>
                <span className="text-gray-500 text-sm">
                  Health - 20 August
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-lg">$22</p>
              <button className="text-2xl">✖️</button>
            </div>
          </li>
          <li className="flex justify-between bg-white shadow-sm rounded-2xl p-3 w-full max-w-2xl mt-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 bg-gray-200 rounded-sm flex items-center justify-center">
                <p className="text-2xl">📦</p>
              </div>
              <div className="flex flex-col">
                <span>TV</span>
                <span className="text-gray-500 text-sm">Other - 13 August</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-lg">$400</p>
              <button className="text-2xl">✖️</button>
            </div>
          </li>
          <li className="flex justify-between bg-white shadow-sm rounded-2xl p-3 w-full max-w-2xl mt-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 bg-amber-100 rounded-sm flex items-center justify-center">
                <p className="text-2xl">🍕</p>
              </div>
              <div className="flex flex-col">
                <span>Pancakes</span>
                <span className="text-gray-500 text-sm">Food - 05 August</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-lg">$93</p>
              <button className="text-2xl">✖️</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
