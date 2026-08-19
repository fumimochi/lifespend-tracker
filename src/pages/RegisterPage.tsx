import { useId } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormField from '../components/FormField';

export default function RegisterPage() {
  const emailId = useId();
  const passId = useId();
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name');
    const email = data.get('email');
    const password = data.get('password');
    const budget = data.get('budget');

    navigate('/', { replace: true });
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
          <FormField id="name" name="password" label="NAME" required />

          <FormField
            id={emailId}
            name="email"
            label="EMAIL"
            type="email"
            required
          />

          <FormField
            id={passId}
            name="password"
            label="PASSWORD"
            type="password"
            required
          />

          <FormField
            id="budget"
            name="budget"
            label="MONTHLY BUDGET"
            type="number"
            required
          />

          <button className="w-auto my-6 h-7 rounded-sm text-white bg-black hover:cursor-pointer">
            Create account
          </button>

          <Link to="/login" className="text-xs text-emerald-500 text-right mt-1">
            Already have an account? Log in
          </Link>
        </form>
      </div>
    </>
  );
}
