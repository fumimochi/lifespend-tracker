export default function MainLeftBar() {
  return (
    <div className="flex flex-col gap-6 bg-white rounded-2xl px-6 pt-6 pb-15 h-fit shadow-sm w-full max-w-sm">
      <h1 className="font-bold text-2xl">New spend</h1>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="sum"
          className="text-gray-500 text-xs font-medium tracking-wide"
        >
          AMOUNT
        </label>
        <input
          type="number"
          id="sum"
          placeholder="0.00"
          className="border border-gray-700 rounded-lg px-3 py-3 bg-gray-800 text-white placeholder-gray-400"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="desc"
          className="text-gray-500 text-xs font-medium tracking-wide"
        >
          DESCRIPTION
        </label>
        <input
          type="text"
          id="desc"
          placeholder="For instance: protein, lunch..."
          className="border border-gray-700 rounded-lg px-3 py-3 bg-gray-800 text-white placeholder-gray-400"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-500 text-xs font-medium tracking-wide">
          CATEGORY
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center gap-2 justify-center h-11 border rounded-lg border-green-400 bg-green-50 text-green-700">
            <span>🍕 Food</span>
          </button>
          <button className="flex items-center gap-2 justify-center h-11 border rounded-lg border-gray-200 bg-gray-50 text-gray-700">
            <span>🏋️ Sport</span>
          </button>
          <button className="flex items-center gap-2 justify-center h-11 border rounded-lg border-gray-200 bg-gray-50 text-gray-700">
            <span>💊 Health</span>
          </button>
          <button className="flex items-center gap-2 justify-center h-11 border rounded-lg border-gray-200 bg-gray-50 text-gray-700">
            <span>📦 Other</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="date"
          className="text-gray-500 text-xs font-medium tracking-wide"
        >
          DATE
        </label>
        <input
          type="date"
          id="date"
          min="2026-01-01"
          max="2030-01-01"
          className="border border-gray-700 rounded-lg px-3 py-3 bg-gray-800 text-white"
        />
      </div>

      <button className="h-12 bg-black rounded-lg text-white font-medium hover:cursor-pointer hover:bg-gray-800 transition-colors">
        + Add spent
      </button>
    </div>
  );
}
