import cn from 'classnames';
import { FormikValues, useFormikContext } from 'formik';
import './InputField.scss';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputField = ({
  label,
  name,
  id,
  ...inputProps
}: InputFieldProps) => {
  const { touched, errors } = useFormikContext<FormikValues>();
  const fieldIdentifier = (id || name) as string;
  const hasInputError = (fieldName: keyof FormikValues) => {
    return touched[fieldName] && errors[fieldName];
  };

  const getInputClassNames = (fieldName: keyof FormikValues) => {
    const hasError = hasInputError(fieldName);
    return cn('input-field__input', {
      'input-field__input--error': hasError,
    });
  };
  return (
    <div className="input-field">
      <label htmlFor={id} className="input-field__label">
        {label}
      </label>
      <input
        name={name}
        id={id}
        {...inputProps}
        className={getInputClassNames(fieldIdentifier)}
      />
      {hasInputError(fieldIdentifier) && (
        <div className="input-field__error-message">
          {errors[fieldIdentifier] as string}
        </div>
      )}
    </div>
  );
};
