import { Match } from "../../types/countryMatchesTypes";
import { MatchItem } from "../MatchItem";

type Props = {
    matches: Match[];
}

export const MatchesList: React.FC<Props> = ({ matches }) => {
    return (
        <div className="match_item">
        {matches.map(match => <MatchItem key={match.teamA.teamLogo} match={match} />)}
        </div>
    )
};