import { FormikProps } from 'formik';
import styles from './LoginPage.module.scss';
import { InputType } from '../../types/InputType';

type Props = {
  formik: FormikProps<{ email: string; password: string }>;
  setInput: React.Dispatch<React.SetStateAction<InputType>>;
};

export const EmailPage: React.FC<Props> = ({ formik, setInput }) => {
  return (
    <>
      <p className={styles.container__login_paragraph}>
        Please enter your email
      </p>
      <input
        type="text"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="email"
        placeholder="Email address"
        className={styles.container__login_input}
      />

      {formik.touched.email && formik.errors.email && (
        <div className={styles.container__login_error}>
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
        className={styles.container__login_btn}
      >
        CONTINUE
      </button>
    </>
  );
};
