import { use } from "react";

const AvailablePlayers = ({ playersPromise }) => {

    const players = use(playersPromise)
    console.log(players)
    return (
        <div className="max-w-[1200px] mx-auto">
            <h3>Available players</h3>
        </div>
    );
};

export default AvailablePlayers;