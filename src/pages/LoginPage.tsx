import { useId, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormField from '../components/FormField';
import { loginUser } from '../api/users';
import { useUser } from '../context/UserContext';
import { hashPassword } from '../api/client';

export default function LoginPage() {
  const emailId = useId();
  const passId = useId();
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const data = new FormData(e.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    const hashedPassword = await hashPassword(password);

    try {
      const user = await loginUser(email, hashedPassword);

      if (!user) {
        setError('Invalid email or password');
        return;
      }

      setUser(user);
      navigate('/', { replace: true });
    } catch {
      setError('Unable to login. Try once more.');
    }
  }

  return (
    <>
      <div className="mx-auto mt-24 py-15 flex flex-col items-center bg-white rounded-2xl shadow-sm w-sm">
        <div className="text-2xl font-bold">
          <span>Life</span>
          <span className="text-emerald-500">Spend</span>
        </div>
        <span className="text-mist-600 text-sm">Log in to your account</span>

        <form
          onSubmit={handleSubmit}
          className="mt-6 w-full px-15 flex flex-col text-gray-500"
        >
          <FormField
            id={emailId}
            name="email"
            label="EMAIL"
            type="email"
            required
            inputHeight={1}
          />

          <FormField
            id={passId}
            name="password"
            label="PASSWORD"
            type="password"
            required
            inputHeight={1}
          />

          <a href="" className="text-xs text-emerald-500 text-right mt-1">
            Forgot password?
          </a>

          {error && <p className="text-xs text-red-500 mt-2">{error}</p>}

          <button
            type="submit"
            className="w-auto my-6 h-7 rounded-sm text-white bg-black hover:cursor-pointer"
          >
            Login
          </button>

          <Link
            to="/register"
            className="text-xs text-emerald-500 text-right mt-1"
          >
            Dont have an account yet? Registrate here
          </Link>
        </form>
      </div>
    </>
  );
}
