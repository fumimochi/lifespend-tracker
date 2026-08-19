type FormFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
};

export default function FormField({
  id,
  name,
  label,
  type = 'text',
  required,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1 mt-4">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>

      <input
        type={type}
        id={id}
        name={name}
        required={required}
        className="border h-7 ronded-sm px-3 py-2 bg-taupe-700 text-mist-400 focus:outline-none"
      />
    </div>
  );
}
