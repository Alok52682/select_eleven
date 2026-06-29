import SPlayerCard from "./SPlayerCard";

const SelectedPlayers = ({ selectedPlayers, removePlayer }) => {
    return (
        <div className="max-w-300 mx-auto">
            {
                selectedPlayers?.map(player => <SPlayerCard
                    key={player.id}
                    removePlayer={removePlayer}
                    player={player} />)
            }
        </div>
    );
};

export default SelectedPlayers;