import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

export type User = {
  id?: string;
  name: string;
  email: string;
  hashedPassword: string;
  budget?: number;
};

type UserContextValue = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
  }, [user]);

  return <UserContext value={{ user, setUser }}>{children}</UserContext>;
}

export function useUser() {
  const ctx = useContext(UserContext);

  if (!ctx) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return ctx;
}
