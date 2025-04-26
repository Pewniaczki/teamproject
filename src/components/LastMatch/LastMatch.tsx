import { Result } from '../../types/countryMatchesTypes';

type Props = {
  match: Result;
};
export const LastMatch: React.FC<Props> = ({ match }) => {
  const getResult = () => {
    switch (match) {
      case 'L':
        return <span className='inline-flex w-6.5 h-4.5 text-sm leading-3.5 font-light text-[var(--color-grey-0) items-center justify-center bg-[var(--color-red)]'>L</span>;
      case 'W':
        return <span className='inline-flex w-6.5 h-4.5 text-sm leading-3.5 font-light text-[var(--color-grey-0) items-center justify-center bg-[var(--color-green)]'>W</span>;
      case 'D':
        return <span className='inline-flex w-6.5 h-4.5 text-sm leading-3.5 font-light text-[var(--color-grey-0) items-center justify-center bg-[var(--color-yellow)]'>D</span>;
    }
  };
  return getResult();
};
