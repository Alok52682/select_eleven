import { use } from "react";
import PlayerCard from "../Player/PlayerCard";

const AvailablePlayers = ({ playersPromise, availableBalance, setAvailableBalance, selectedPlayers, setSelectedPlayers }) => {

    const players = use(playersPromise)
    return (
        <div className="max-w-300 mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    players?.map(player => <PlayerCard
                        key={player.id}
                        availableBalance={availableBalance}
                        setAvailableBalance={setAvailableBalance}
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                        player={player} />)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;