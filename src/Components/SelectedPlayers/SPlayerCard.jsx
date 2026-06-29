
const SPlayerCard = ({ player, removePlayer }) => {
    const { player_img, player_name, playing_role } = player;
    return (
        <div className="flex justify-between items-center border border-slate-200 rounded-lg p-3 mt-5 shadow-xs">
            <div className="flex gap-2.5 items-center">
                <img className="w-20 h-20 rounded-lg" src={player_img} alt="" />
                <div>
                    <h2 className="text-lg text-slate-700 font-bold mb-2">{player_name}</h2>
                    <span className="text-slate-500">{playing_role}</span>
                </div>
            </div>
            <button onClick={() => removePlayer(player)}><img src="https://i.ibb.co.com/23M35d61/Frame.png" alt="" /></button>
        </div>
    );
};

export default SPlayerCard;