export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-4 py-3 border-b border-gray-300 bg-white">
        <div className="text-2xl font-bold">
          <span>Life</span>
          <span className="text-emerald-500">Spend</span>
        </div>

        <div className="text-base">
          <button className="w-max rounded-lg px-3 bg-green-200 text-emerald-500">
            Main
          </button>
          <button className="w-max ml-3 rounded-lg px-3 bg-green-200 text-emerald-500">
            Statistic
          </button>
        </div>

        <div>
          <select
            name="months"
            id="months"
            className="h-7 text-white bg-taupe-700 rounded-sm"
          >
            <option value="Jun">June 2026</option>
            <option value="Jul">July 2026</option>
            <option value="Aug">August 2026</option>
          </select>

          <button className="ml-2">Profile</button>
        </div>
      </header>
    </>
  );
}
