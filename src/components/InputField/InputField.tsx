import cn from 'classnames';
import { FormikValues, useFormikContext } from 'formik';

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
  const hasFieldError = (fieldName: keyof FormikValues) => {
    return touched[fieldName] && errors[fieldName];
  };

  const getInputClassNames = (fieldName: keyof FormikValues) => {
    const hasError = hasFieldError(fieldName);
    return cn('registration-form__input', {
      error: hasError,
    });
  };
  return (
    <div className="registration-form__input-group">
      <label htmlFor={id} className="registration-form__label">
        {label}
      </label>
      <input
        name={name}
        id={id}
        {...inputProps}
        className={getInputClassNames(fieldIdentifier)}
      />
      {hasFieldError(fieldIdentifier) && (
        <div className="registration-form__error-message">
          {errors[fieldIdentifier] as string}
        </div>
      )}
    </div>
  );
};
