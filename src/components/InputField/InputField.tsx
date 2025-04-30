import { useField } from 'formik';
import { MdError } from 'react-icons/md';
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const InputField = ({ label, ...inputProps }: InputFieldProps) => {
  const [field, meta] = useField(inputProps.name);
  const hasError = meta.touched && meta.error;

  const inputId = inputProps.id || inputProps.name;

  return (
    <div className="relative flex flex-col gap-1 text-lg">
      <label
        htmlFor={inputId}
        className="block font-bold text-[var(--color-grey-20)]"
      >
        {label}
      </label>
      <input
        id={inputId}
        {...field}
        {...inputProps}
        className={`box-border w-full rounded-lg border-1 border-[var(--color-grey-50)] bg-[var(--color-grey-80)] p-3 text-[var(--color-grey-20)] transition-colors ${hasError && 'border-[var(--color-red)]'}`}
        aria-invalid={hasError ? 'true' : 'false'}
        aria-describedby={hasError ? `${inputId}-error` : undefined}
      />
      {hasError && (
        <div
          id={`${inputId}-error`}
          className="absolute top-full right-0 flex p-1 text-sm text-[var(--color-red)]"
          role="alert"
          aria-live="assertive"
          tabIndex={-1}
        >
          <MdError className="mr-1" />
          {meta.error}
        </div>
      )}
    </div>
  );
};
