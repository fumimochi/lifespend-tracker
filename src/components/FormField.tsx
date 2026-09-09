type FormFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  placeholder?: string;
  inputHeight?: number
};

export default function FormField({
  id,
  name,
  label,
  type = 'text',
  required,
  placeholder = '',
  inputHeight = 3
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1 mt-4">
      <label htmlFor={id} className="text-gray-500 text-xs font-medium tracking-wide">
        {label}
      </label>

      <input
        type={type}
        id={id}
        name={name}
        required={required}
        placeholder={placeholder ?? ''}
        className={`border border-gray-700 rounded-lg px-3 py-${inputHeight} bg-black text-white placeholder-gray-400`}
      />
    </div>
  );
}
