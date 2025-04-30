import styles from './StartPage.module.scss';
import cn from 'classnames';
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
  return (
    <div className="flex content-stretch justify-end">
      <div className={cn(styles.container__img, 'hidden lg:block lg:w-1/2')} />

      <div className="w-full p-[1%] lg:w-[50%]">
        <img
          className="pb-[8%]"
          src=".\UI_Elements\Name_logo.svg"
          alt="logo image"
        />

        <div className="ml-[1%]">
          {isOpen === 'start' && (
            <div className="flex flex-col items-center justify-center">
              <p className="mb-[10%] text-center text-2xl font-normal text-[var(--color-grey-30)]">
                REGISTER OR LOG IN
              </p>
              <div className="mb-7.5 flex w-full flex-col bg-[var(--color-grey-70)] p-[2%]">
                <p className="p-[3%] text-center text-lg font-medium text-[var(--color-grey-20)]">
                  New to WinZone?
                </p>
                <button
                  onClick={() => setIsOpen('signup')}
                  className="border-1 border-[var(--color-secondary)] bg-[var(--color-grey-70)] px-2.5 py-4 text-[var(--color-secondary)] hover:bg-[var(--color-secondary-20)]"
                >
                  SIGN UP
                </button>
              </div>
              <div className="mb-7.5 flex w-full flex-col bg-[var(--color-grey-70)] p-[2%]">
                <p className="p-[3%] text-center text-lg font-medium text-[var(--color-grey-20)]">
                  New to WinZone?
                </p>
                <button
                  onClick={() => setIsOpen('login')}
                  className="border-1 border-[var(--color-secondary)] bg-[var(--color-grey-70)] px-2.5 py-4 text-[var(--color-secondary)] hover:bg-[var(----color-secondary-20)]"
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
