import { InputType } from '../../types/InputType';
import { LoginStatus } from '../../types/loginStatus';
import styles from './LoginPage.module.scss';
import { FormikProps } from 'formik';

type Props = {
  isButtonDisabled: boolean;
  loginStatus: LoginStatus;
  setInput: React.Dispatch<React.SetStateAction<InputType>>;
  formik: FormikProps<{ email: string; password: string }>;
};

export const PasswordPage: React.FC<Props> = ({
  isButtonDisabled,
  formik,
  loginStatus,
}) => {
  return (
    <>
      <p className={styles.container__login_paragraph}>Enter your password</p>

      <input
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="password"
        placeholder="Password"
        className="mb-8 w-full rounded-md border-1 border-[var(--color-grey-50)] bg-inherit p-2 text-[var(--color-grey-30)]"
      />

      {formik.touched.password && formik.errors.password && (
        <div className={styles.container__login_error}>
          {formik.errors.password}
        </div>
      )}

      <button
        type="submit"
        onClick={() => formik.setTouched({ ...formik.touched, password: true })}
        disabled={isButtonDisabled}
        aria-disabled={isButtonDisabled}
        tabIndex={isButtonDisabled ? -1 : 0}
        className={styles.container__login_btn}
        title={
          isButtonDisabled ? 'Fill out all required fields first.' : undefined
        }
      >
        {loginStatus === 'pending' ? 'Logging in...' : 'CONTINUE'}
      </button>
    </>
  );
};
