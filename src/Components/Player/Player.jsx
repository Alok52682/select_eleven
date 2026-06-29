import userImg from '../../assets/user.png';
import report from '../../assets/report.png';
import { useState } from 'react';

const Player = ({ player, abailableBalance, setAvailableBalance, selectedPlayers, setSelectedPlayers }) => {

    const [isSelected, setSelected] = useState(false)

    const { player_img, player_name, player_country, playing_role, rating, price } = player;

    const handleSelected = (player) => {
        if (abailableBalance < parseInt(player.price)) {
            alert('Not enough Coin')
        }
        else if (selectedPlayers.length >= 6) {
            alert('You already selected maximum number of players!!')
        }
        else {
            const remainingBalance = abailableBalance - parseInt(player.price)
            const sPlayers = [...selectedPlayers, player]
            setSelectedPlayers(sPlayers)
            setAvailableBalance(remainingBalance)
            setSelected(true)
        }
    }

    return (
        <div className="card bg-base-100 p-6 shadow-lg">
            <figure className="">
                <img
                    className='rounded-lg w-full h-62.5 object-cover'
                    src={player_img}
                    alt="player image" />
            </figure>
            <div className="mt-4">
                <div className='flex'>
                    <img className='w-7 h-7' src={userImg} alt="" />
                    <h2 className="card-title ml-2">{player_name}</h2>
                </div>
                <div className='flex justify-between items-center mt-4 border-b-1 border-gray-400 pb-2'>
                    <div className='flex items-center'>
                        <img className='w-5 h-5 mr-1' src={report} alt="" />
                        <span>{player_country}</span>
                    </div>
                    <button className='btn'>{playing_role}</button>
                </div>
                <div className='flex items-center justify-between font-bold mb-4'>
                    <span>Rating</span>
                    <span>{rating}</span>
                </div>
                <div className='flex items-center justify-between'>
                    <span className=' font-bold'>Left-hand-bat</span>
                    <span>Right-hand-ball</span>
                </div>
                <div className="card-actions flex items-center justify-between">
                    <p>Price: ${price}</p>
                    <button disabled={isSelected && true} onClick={() => handleSelected(player)} className="btn">{isSelected ? 'Selected' : 'Choose player'}</button>
                </div>
            </div>
        </div>
    );
};

export default Player;