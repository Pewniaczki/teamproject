import { FormikProps } from 'formik';
import { InputType } from '../../types/InputType';

type Props = {
  formik: FormikProps<{ email: string; password: string }>;
  setInput: React.Dispatch<React.SetStateAction<InputType>>;
};

export const EmailPage: React.FC<Props> = ({ formik, setInput }) => {
  return (
    <>
      <p className="mb-3 text-lg font-normal text-[var(--color-grey-20)]">
        Please enter your email
      </p>

      <input
        type="text"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="email"
        placeholder="Email address"
        className="mb-8 w-full rounded-s border-1 border-[var(--color-grey-50)] bg-inherit p-2 text-[var(--color-grey-20)]"
      />

      {formik.touched.email && formik.errors.email && (
        <div className="text-[var(--color-grey-40)]">{formik.errors.email}</div>
      )}

      <button
        type="button"
        onClick={() => {
          formik.setTouched({ email: true });

          if (!formik.errors.email && formik.touched.email) {
            setInput('password');
          }
        }}
        className="h-12 w-full cursor-pointer border-1 border-[var(--color-grey-40)] bg-[var(--color-grey-70)] font-bold text-[var(--color-grey-40)] hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary-20)] hover:text-[var(--color-secondary)] active:border-[var(--color-secondary)] active:bg-[var(--color-secondary-20)] active:text-[var(--color-secondary)]"
      >
        CONTINUE
      </button>
    </>
  );
};
