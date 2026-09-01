import { NavLink, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useMonth } from '../context/MonthContext';

export default function Header() {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const { month, setMonth } = useMonth();

  function handleLogout() {
    setUser(null);
    navigate('/login', { replace: true });
  }

  return (
    <>
      <header className="flex justify-between items-center px-4 py-3 border-b border-gray-300 bg-white">
        <div className="text-2xl font-bold">
          <span>Life</span>
          <span className="text-emerald-500">Spend</span>
        </div>

        <div className="text-base">
          <NavLink
            to="/"
            className={(isActive) =>
              `w-max rounded-lg px-3 py-1.5 ${isActive ? 'bg-emerald-500 text-white' : 'bg-green-200 text-emerald-500'}`
            }
          >
            Main
          </NavLink>
          <NavLink
            to="/statistic"
            className={(isActive) =>
              `w-max ml-3 rounded-lg px-3 py-1.5 ${isActive ? 'bg-emerald-500 text-white' : 'bg-green-200 text-emerald-500'}`
            }
          >
            Statistic
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          <select
            name="months"
            id="months"
            value={month}
            className="h-7 text-white bg-taupe-700 rounded-sm"
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="June">June 2026</option>
            <option value="July">July 2026</option>
            <option value="August">August 2026</option>
          </select>

          <NavLink to="/profile" className="ml-2">
            Profile
          </NavLink>

          <button
            onClick={handleLogout}
            title="Log out"
            className="ml-2 text-4xl hover:cursor-pointer"
          >
            🚪
          </button>
        </div>
      </header>
    </>
  );
}
