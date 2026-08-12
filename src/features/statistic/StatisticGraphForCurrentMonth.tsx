export default function StatisticGraphForCurrentMonth() {
  return (
    <div className="bg-white shadow-sm p-5 rounded-2xl w-full max-w-md flex flex-col gap-4">
      <p className="font-bold">Budget for June</p>

      <div>
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Spent</span>
          <span className="font-medium">$842/$1200</span>
        </div>

        <progress
          max="100"
          value="70"
          className="w-full h-2 rounded-full overflow-hidden bg-gray-200"
        ></progress>
        <div className="flex justify-between text-sm my-1">
          <span className="text-gray-500">70% of budget</span>
          <span className="text-emerald-600">left $358</span>
        </div>

        <hr className="border-gray-100" />

        <div>
          <p className="text-sm text-gray-600 mb-3">By day this week</p>
          <div className="flex items-end justify-between h-24 gap-2">
            <div key="Mon" className="flex flex-col items-center flex-1 gap-1">
              <div
                className="w-full bg-emerald-400 rounded-sm"
                style={{ height: '5px' }}
              />
              <span className="text-xs text-gray-500">Mon</span>
            </div>
            <div key="Tue" className="flex flex-col items-center flex-1 gap-1">
              <div
                className="w-full bg-emerald-400 rounded-sm"
                style={{ height: '76px' }}
              />
              <span className="text-xs text-gray-500">Tue</span>
            </div>
            <div key="Wed" className="flex flex-col items-center flex-1 gap-1">
              <div
                className="w-full bg-emerald-400 rounded-sm"
                style={{ height: '11px' }}
              />
              <span className="text-xs text-gray-500">Wed</span>
            </div>
            <div key="Thu" className="flex flex-col items-center flex-1 gap-1">
              <div
                className="w-full bg-emerald-400 rounded-sm"
                style={{ height: '52px' }}
              />
              <span className="text-xs text-gray-500">Thu</span>
            </div>
            <div key="Fri" className="flex flex-col items-center flex-1 gap-1">
              <div
                className="w-full bg-emerald-400 rounded-sm"
                style={{ height: '49px' }}
              />
              <span className="text-xs text-gray-500">Fri</span>
            </div>
            <div key="Sat" className="flex flex-col items-center flex-1 gap-1">
              <div
                className="w-full bg-emerald-400 rounded-sm"
                style={{ height: '80px' }}
              />
              <span className="text-xs text-gray-500">Sat</span>
            </div>
            <div key="Sun" className="flex flex-col items-center flex-1 gap-1">
              <div
                className="w-full bg-emerald-400 rounded-sm"
                style={{ height: '84px' }}
              />
              <span className="text-xs text-gray-500">Sun</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
