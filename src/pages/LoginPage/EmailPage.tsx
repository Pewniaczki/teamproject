import { FormikProps } from 'formik';
// import styles from './LoginPage.module.scss';
import { InputType } from '../../types/InputType';

type Props = {
  formik: FormikProps<{ email: string; password: string }>;
  setInput: React.Dispatch<React.SetStateAction<InputType>>;
};

export const EmailPage: React.FC<Props> = ({ formik, setInput }) => {
  return (
    <>
      <p className='font-normal text-lg text-[var(--color-grey-20)] mb-3'>
        Please enter your email
      </p>

      <input
        type="text"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="email"
        placeholder="Email address"
        className='bg-inherit border-1 border-[var(--color-grey-50)] w-full p-2 rounded-s mb-8 text-[var(--color-grey-20)]'
      />

      {formik.touched.email && formik.errors.email && (
        <div className='text-[var(--color-grey-40)]'>
          {formik.errors.email}
        </div>
      )}

      <button
        type="button"
        onClick={() => {
          formik.setTouched({ email: true });

          if (!formik.errors.email && formik.touched.email) {
            setInput('password');
          }
        }}
        className='border-1 border-[var(--color-grey-40)] bg-[var(--color-grey-70)] h-12 w-full text-[var(--color-grey-40)] font-bold'
      >
        CONTINUE
      </button>
    </>
  );
};
