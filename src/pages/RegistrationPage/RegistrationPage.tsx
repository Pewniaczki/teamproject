import { FormikProvider, useFormik } from 'formik';

import { validationSchema } from './validation-schema';
import './RegistrationPage.scss';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';

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

  return (
    <FormikProvider value={formik}>
      <div className="registration-container">
        <form onSubmit={formik.handleSubmit} className="registration-form">
          <h2 className="registration-form__heading">Sign Up</h2>
          <div className="registration-form__input-group">
            <InputField
              label="Username:"
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <InputField
              label="First Name:"
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <InputField
              label="Last Name:"
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <InputField
              label="Email:"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <InputField
              label="Password:"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <InputField
              label="Confirm Password:"
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <Button
            type="submit"
            disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
          >
            Sign Up
          </Button>
        </form>
        <div className="registration-form__login">
          <span>Already have an account? </span>
          <a
            href="/team_project_frontend/login"
            className="registration-form__login-link"
          >
            Log in here
          </a>
        </div>
      </div>
    </FormikProvider>
  );
};
