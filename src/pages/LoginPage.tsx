export default function LoginPage() {
  return (
    <>
      <div className="mx-auto mt-24 py-15 flex flex-col items-center bg-white rounded-2xl shadow-sm w-sm ">
        <div className="text-2xl font-bold">
          <span>Life</span>
          <span className="text-emerald-500">Spend</span>
        </div>
        <span className="text-mist-600 text-sm">Log in to your account</span>

        <div className="mt-6 flex flex-col">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              className="border h-7 rounded-sm px-3 py-2 bg-taupe-700 text-mist-400"
            />
          </div>

          <div className="flex flex-col gap-1 mt-4">
            <label htmlFor="pass" className="text-sm font-medium">
              PASSWORD
            </label>
            <input
              type="password"
              id="pass"
              className="border h-7 rounded-sm px-3 py-2 bg-taupe-700 text-mist-400"
            />
          </div>

          <a href="" className="text-xs text-emerald-500 text-right mt-1">
            Forgot password?
          </a>

          <button className="w-auto my-6 h-7 rounded-sm text-white bg-black hover:cursor-pointer">
            Login
          </button>

          <a href="" className="text-xs text-emerald-500 text-right mt-1">
            Dont have an account yet? Registrate here
          </a>
        </div>
      </div>
    </>
  );
}
