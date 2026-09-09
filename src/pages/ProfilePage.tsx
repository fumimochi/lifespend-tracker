export default function ProfilePage() {
  return (
    <div>
      <div className="mt-10 flex flex-wrap justify-around gap-6">
        <div className="bg-white shadow-sm rounded-2xl p-6 w-full max-w-sm flex flex-col gap-5">
          <h2 className="font-bold text-lg">Profile</h2>

          <div className="flex flex-col items-start gap-2">
            <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center text-white text-2xl font-bold">
              VL
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">Vladyslav</span>
              <span className="text-xs font-medium bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full">
                Pro
              </span>
            </div>
            <span className="text-gray-400 text-sm">vlad@example.com</span>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-gray-500 text-xs font-medium tracking-wide uppercase"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              defaultValue="Vladyslav"
              className="border border-gray-700 rounded-lg px-3 py-3 bg-gray-800 text-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-gray-500 text-xs font-medium tracking-wide uppercase"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              defaultValue="vlad@example.com"
              className="border border-gray-700 rounded-lg px-3 py-3 bg-gray-800 text-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="budget"
              className="text-gray-500 text-xs font-medium tracking-wide uppercase"
            >
              Monthly budget $
            </label>
            <input
              type="number"
              id="budget"
              defaultValue={1200}
              className="border border-gray-700 rounded-lg px-3 py-3 bg-gray-800 text-white"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full max-w-sm">
          <div className="bg-white shadow-sm rounded-2xl p-6 flex flex-col gap-4">
            <h2 className="font-bold text-lg">Account statistic</h2>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Spends amount</span>
                <span className="font-medium">248</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Total spent</span>
                <span className="font-medium">$9,842</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Best month</span>
                <span className="font-medium">June 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Аccount created</span>
                <span className="font-medium">Jan 2026</span>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-2xl p-6 flex flex-col gap-4">
            <h2 className="font-bold text-lg">Security</h2>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="current-pass"
                className="text-gray-500 text-xs font-medium tracking-wide uppercase"
              >
                Current password
              </label>
              <input
                type="password"
                id="current-pass"
                defaultValue="password"
                className="border border-gray-700 rounded-lg px-3 py-3 bg-gray-800 text-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="new-pass"
                className="text-gray-500 text-xs font-medium tracking-wide uppercase"
              >
                New password
              </label>
              <input
                type="password"
                id="new-pass"
                placeholder="••••••••"
                className="border border-gray-700 rounded-lg px-3 py-3 bg-gray-800 text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
