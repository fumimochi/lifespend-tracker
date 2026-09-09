import { useId, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormField from '../components/FormField';
import { useUser } from '../context/UserContext';
import { registerUser } from '../api/users';
import { checkUserExist, hashPassword } from '../api/client';

export default function RegisterPage() {
  const emailId = useId();
  const passId = useId();
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const data = new FormData(e.currentTarget);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    const hashedPassword = (await hashPassword(password)) as string;
    const budget = Number(data.get('budget'));

    try {
      const existing = await checkUserExist(email);
      if (existing) throw new Error('User with such email already exists');

      const user = await registerUser({ name, email, hashedPassword, budget });
      setUser(user);
      navigate('/login', { replace: true });
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError(`Haven't managed to create an account. Try once more.`);
    }
  }

  return (
    <>
      <div className="mx-auto mt-24 py-15 flex flex-col items-center bg-white rounded-2xl shadow-sm w-sm">
        <div className="text-2xl font-bold">
          <span>Life</span>
          <span className="text-emerald-500">Spend</span>
        </div>
        <span className="text-mist-600 text-sm">
          Create an account - it's for free
        </span>

        <form
          onSubmit={handleSubmit}
          className="mt-6 px-15 w-full flex flex-col text-gray-500"
        >
          <FormField id="name" name="name" label="NAME" required 
          inputHeight={1}/>

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

          <FormField
            id="budget"
            name="budget"
            label="MONTHLY BUDGET"
            type="number"
            required
            inputHeight={1}
          />

          {error && <p className="text-xs text-red-500 mt-2">{error}</p>}

          <button
            type="submit"
            className="w-auto my-6 h-7 rounded-sm text-white bg-black hover:cursor-pointer"
          >
            Create account
          </button>

          <Link
            to="/login"
            className="text-xs text-emerald-500 text-right mt-1"
          >
            Already have an account? Log in
          </Link>
        </form>
      </div>
    </>
  );
}
