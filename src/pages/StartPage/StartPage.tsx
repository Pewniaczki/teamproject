import styles from './StartPage.module.scss';
import { LoginPage } from '../LoginPage/LoginPage';
import { RegistrationPage } from '../RegistrationPage/RegistrationPage';

export type Open = 'signup' | 'login' | 'start';

type Props = {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;  
  setIsOpen: React.Dispatch<React.SetStateAction<Open>>;
  isOpen: Open;
};

export const StartPage: React.FC<Props> = ({
  setIsAuthenticated,
  isOpen,
  setIsOpen,
}) => {
  // const [isOpen, setIsOpen] = useState<Open>('start');

  return (
    <div className={styles.container}>
      <div className={styles.container__img} />

      <div className={styles.container__start}>
        <img
          className={styles.container__start_img}
          src=".\UI_Elements\Name_logo.svg"
          alt="logo image"
        />

        <div className='ml-[1%] '>
          {isOpen === 'start' && (
            <div className={styles.container__start_container}>
              <p className={styles.container__start_paragraph}>
                REGISTER OR LOG IN
              </p>
              <div className={styles.container__start_element}>
                <p className={styles.container__start_element_paragraph}>
                  New to WinZone?
                </p>
                <button
                  onClick={() => setIsOpen('signup')}
                  className={styles.container__start_element_btn}
                >
                  SIGN UP
                </button>
              </div>
              <div className={styles.container__start_element}>
                <p className={styles.container__start_element_paragraph}>
                  New to WinZone?
                </p>
                <button
                  onClick={() => setIsOpen('login')}
                  className={styles.container__start_element_btn}
                >
                  LOG IN
                </button>
              </div>
            </div>
          )}
          {isOpen === 'login' && (
            <LoginPage
              setIsOpen={setIsOpen}
              setIsAuthenticated={setIsAuthenticated}
            />
          )}
          {isOpen === 'signup' && <RegistrationPage setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};
