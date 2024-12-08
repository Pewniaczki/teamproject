import cn from 'classnames';
import { useFormik } from 'formik';

import { validationSchema } from './validation-schema';
import './RegistrationPage.scss';

export const RegistrationPage = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.table(values);

      // API call or other form submission logic

      formik.resetForm();
    },
  });

  const hasFieldError = (fieldName: keyof typeof formik.errors) => {
    return formik.touched[fieldName] && formik.errors[fieldName];
  };

  const getInputClassNames = (fieldName: keyof typeof formik.values) => {
    const hasError = hasFieldError(fieldName);
    return cn('registration-form__input', {
      error: hasError,
    });
  };

  return (
    <form onSubmit={formik.handleSubmit} className="registration-form">
      <h2 className="registration-form__heading">Sign Up</h2>
      <div className="registration-form__input-group">
        <label htmlFor="username" className="registration-form__label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          className={getInputClassNames('username')}
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {hasFieldError('username') && (
          <div className="registration-form__error-message">
            {formik.errors.username}
          </div>
        )}
      </div>
      <div className="registration-form__input-group">
        <label htmlFor="firstName" className="registration-form__label">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          className={getInputClassNames('firstName')}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {hasFieldError('firstName') && (
          <div className="registration-form__error-message">
            {formik.errors.firstName}
          </div>
        )}
      </div>
      <div className="registration-form__input-group">
        <label htmlFor="lastName" className="registration-form__label">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          className={getInputClassNames('lastName')}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {hasFieldError('lastName') && (
          <div className="registration-form__error-message">
            {formik.errors.lastName}
          </div>
        )}
      </div>
      <div className="registration-form__input-group">
        <label htmlFor="email" className="registration-form__label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className={getInputClassNames('email')}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {hasFieldError('email') && (
          <div className="registration-form__error-message">
            {formik.errors.email}
          </div>
        )}
      </div>
      <div className="registration-form__input-group">
        <label htmlFor="password" className="registration-form__label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className={getInputClassNames('password')}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {hasFieldError('password') && (
          <div className="registration-form__error-message">
            {formik.errors.password}
          </div>
        )}
      </div>
      <div className="registration-form__input-group">
        <label htmlFor="confirmPassword" className="registration-form__label">
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          className={getInputClassNames('confirmPassword')}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {hasFieldError('confirmPassword') && (
          <div className="registration-form__error-message">
            {formik.errors.confirmPassword}
          </div>
        )}
      </div>
      <button type="submit" className="registration-form__button">
        Sign Up
      </button>
      <div className="registration-form__login">
        <span>Already have an account?</span>
        <a
          href="/team_project_frontend/login"
          className="registration-form__login-link"
        >
          Log in here
        </a>
      </div>
    </form>
  );
};
