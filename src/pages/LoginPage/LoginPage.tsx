import { FormikProvider, useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validationSchema } from './validation-schema';
import { useAuthStore } from '../../zustand/useLogged';
import { Open } from '../StartPage/StartPage';
import { PasswordPage } from './PasswordPage';
import { LoginStatus } from '../../types/loginStatus';
import { InputType } from '../../types/InputType';
import { EmailPage } from './EmailPage';
import axios from 'axios';

const BACKEND = import.meta.env.VITE_BACKEND_LOGIN_URL;

type Props = {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<Open>>;
};

export const LoginPage: React.FC<Props> = ({
  setIsAuthenticated,
  setIsOpen,
}) => {
  const [loginStatus, setLoginStatus] = useState<LoginStatus>('idle');
  const [input, setInput] = useState<InputType>('login');
  const { setLogged } = useAuthStore();
  const navigate = useNavigate();

  const handlerBack = () => {
    setInput('login');
    setIsOpen('start');
  };

  const formik = useFormik({
    initialValues: {
      email: 'patryk@outlook.com',
      password: '1q2w3e4r$R',
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoginStatus('pending');

      try {
        await axios.post(
          `${BACKEND}/login`,
          {
            email: values.email,
            password: values.password,
          },
          { withCredentials: true }
        );
        setLogged(true);

        setLoginStatus('success');
        setIsAuthenticated(true);
        formik.resetForm();
        navigate('/matches');
        formik.resetForm();
      } catch (error) {
        setLoginStatus('error');
        console.error(error);
      }
    },
  });

  const isButtonDisabled: boolean =
    !!formik.errors.password || !formik.values.password || formik.isSubmitting;

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <div onClick={handlerBack} className="mb-2 flex items-center gap-2">
          <img
            className="h-3 w-4"
            src=".\UI_Elements\arrow_back.svg"
            alt="back icon"
          />
          <p className="text-lg font-normal text-[var(--color-grey-0)]">
            SING UP
          </p>
        </div>

        {input === 'login' && <EmailPage formik={formik} setInput={setInput} />}

        {input === 'password' && (
          <PasswordPage
            formik={formik}
            isButtonDisabled={isButtonDisabled}
            loginStatus={loginStatus}
            setInput={setInput}
          />
        )}
      </form>
    </FormikProvider>
  );
};
