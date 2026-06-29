import { use } from "react";
import Player from "../player/player";

const AvailablePlayers = ({ playersPromise, abailableBalance, setAvailableBalance }) => {

    const players = use(playersPromise)
    console.log(players)
    return (
        <div className="max-w-300 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    players?.map(player => <Player
                        key={player.id}
                        abailableBalance={abailableBalance}
                        setAvailableBalance={setAvailableBalance}
                        player={player} />)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;