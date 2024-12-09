import cn from 'classnames';
import { useField } from 'formik';
import './InputField.scss';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const InputField = ({ label, name, ...inputProps }: InputFieldProps) => {
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;

  return (
    <div className="input-field">
      <label htmlFor={inputProps.id} className="input-field__label">
        {label}
      </label>
      <input
        {...field}
        {...inputProps}
        className={cn('input-field__input', {
          'input-field__input--error': hasError,
        })}
      />
      {hasError && (
        <div className="input-field__error-message">{meta.error}</div>
      )}
    </div>
  );
};
