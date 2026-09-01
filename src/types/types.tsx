export type User = {
  id?: string;
  name: string;
  email: string;
  hashedPassword: string;
  budget?: number;
};

export type Spend = {
  id: string;
  amount: number;
  category: 'food' | 'sport' | 'health' | 'other';
  title: string;
  date: string;
};

export enum Category {
  sport = '🏋️',
  food = '🍕',
  health = '💊',
  other = '📦',
}

export enum WeekDays {
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun',
}

export enum Months {
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
}
