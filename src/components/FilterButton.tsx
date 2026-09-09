type FilterButtonProps = {
  typeOfButton?: string,
  name: string;
  title: string;
  filter: any;
  isActive: boolean,
}

export default function FilterButton({ 
  typeOfButton = 'default',
  name, 
  title, 
  filter, 
  isActive,
}: FilterButtonProps) {
  return (
    <button
      className={`border-gray-200 hover:cursor-pointer opacity-100 hover:opacity-80 transition-opacity duration-300
      ${typeOfButton === 'creation' ? 'flex items-center gap-2 justify-center h-11 border rounded-xl' : 'border rounded-2xl py-1 px-4'}
    ${isActive ? 'bg-green-500 text-white' : 'bg-gray-50 text-gray-700'}`}
      name={name}
      type="button"
      onClick={() => {
        filter(name);
      }}
    >
      {title}
    </button>
  );
}
