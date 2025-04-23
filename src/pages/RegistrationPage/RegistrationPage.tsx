import { FormikProvider, useFormik } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { validationSchema } from './validation-schema';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { Open } from '../StartPage/StartPage';
import axios from 'axios';

const BACKEND = import.meta.env.VITE_BACKEND_LOGIN_URL;

type SubmissionStatus = 'idle' | 'pending' | 'success' | 'error';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<Open>>;
};

export const RegistrationPage: React.FC<Props> = ({ setIsOpen }) => {
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>('idle');

  const formik = useFormik({
    initialValues: {
      username: '',
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setSubmissionStatus('pending');

      try {
        const res = await axios.post(`${BACKEND}/register`, values, {
          withCredentials: true,
        });
        console.log('red', res.data);

        setSubmissionStatus('success');
        formik.resetForm();
      } catch (error) {
        setSubmissionStatus('error');
        console.error(error);
      }
    },
  });

  const isButtonDisabled =
    !formik.dirty || !formik.isValid || formik.isSubmitting;

  return (
    <>
      <div
        onClick={() => setIsOpen('start')}
        className="mb-8 flex items-center gap-2"
      >
        <img
          className="h-3.5 w-4.5"
          src=".\UI_Elements\arrow_back.svg"
          alt="back icon"
        />
        <p className="text-2xl font-normal text-[var(--color-grey-30)]">
          SING UP
        </p>
      </div>

      <FormikProvider value={formik}>
        <div className="m-auto flex w-full max-w-[400px] flex-col gap-4 rounded-xl bg-[var(--color-grey-70)] p-5 shadow-md">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-8 text-[var(--color-grey-20)]"
          >
            <h2 className="text-center text-2xl">Sign Up</h2>
            {submissionStatus === 'success' && (
              <p className="text-center font-bold text-[var(--color-green)]">
                Registration successful! You can now{' '}
                <Link
                  to="/login"
                  className="font-bold text-[var(--color-green)] hover:no-underline"
                >
                  log in
                </Link>
                .
              </p>
            )}
            {submissionStatus === 'error' && (
              <p className="text-center font-bold text-[var(--color-red)]">
                Something went wrong. Please try again.
              </p>
            )}
            <div className="flex flex-col gap-4">
              <InputField
                label="Username:"
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
                aria-disabled={formik.isSubmitting}
              />

              <InputField
                label="name:"
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
                aria-disabled={formik.isSubmitting}
              />

              <InputField
                label="surname:"
                type="text"
                name="surname"
                value={formik.values.surname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
                aria-disabled={formik.isSubmitting}
              />

              <InputField
                label="Email:"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
                aria-disabled={formik.isSubmitting}
              />

              <InputField
                label="Password:"
                autoComplete="new-password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
                aria-disabled={formik.isSubmitting}
              />
              <InputField
                label="Confirm Password:"
                type="password"
                autoComplete="new-password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
                aria-disabled={formik.isSubmitting}
              />
            </div>

            <Button
              type="submit"
              disabled={isButtonDisabled}
              aria-disabled={isButtonDisabled}
              tabIndex={isButtonDisabled ? -1 : 0}
              title={
                isButtonDisabled
                  ? 'Fill out all required fields first.'
                  : undefined
              }
            >
              {submissionStatus === 'pending' ? 'Signing up...' : 'Signup'}
            </Button>
          </form>
        </div>
      </FormikProvider>
    </>
  );
};
