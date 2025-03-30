import { Result } from '../../types/countryMatchesTypes';
import style from './LastMatch.module.scss';
import cn from 'classnames';

type Props = {
  match: Result;
};
export const LastMatch: React.FC<Props> = ({ match }) => {
  const getResult = () => {
    switch (match) {
      case 'L':
        return <span className={cn(style.match, style.match__red)}>L</span>;
      case 'W':
        return <span className={cn(style.match, style.match__green)}>W</span>;
      case 'D':
        return <span className={cn(style.match, style.match__yellow)}>D</span>;
    }
  };
  return getResult();
};
