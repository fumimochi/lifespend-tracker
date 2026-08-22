import { createContext, useContext, useState, type ReactNode } from 'react';

type MonthContextValue = {
  month: string;
  setMonth: (month: string) => void;
};

const MonthContext = createContext<MonthContextValue | null>(null);

export function MonthProvider({ children }: { children: ReactNode }) {
  const [month, setMonth] = useState('Aug');

  return <MonthContext value={{ month, setMonth }}>{children}</MonthContext>;
}

export function useMonth() {
  const ctx = useContext(MonthContext);

  if (!ctx) throw new Error('useMonth must be used within a MonthProvider');

  return ctx;
}
