import { use } from "react";
import Player from "../player/player";

const AvailablePlayers = ({ playersPromise }) => {

    const players = use(playersPromise)
    console.log(players)
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    players?.map(player => <Player key={player.id} player={player} />)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;