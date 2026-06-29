import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Navbar from './Components/Navbar/Navbar'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import { toast } from 'react-toastify'


const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}

const playersPromise = fetchPlayers()

function App() {
  const [Available, setAvailable] = useState(true);
  const [abailableBalance, setAvailableBalance] = useState(6000000000);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // console.log(selectedPlayers)

  const removePlayer = (p) => {
    const totalBal = abailableBalance + p.price;
    const remainingPlayers = selectedPlayers.filter(ply => ply.id !== p.id)
    setSelectedPlayers(remainingPlayers);
    setAvailableBalance(totalBal)
    toast('Player Removed!')
  }


  return (
    <>
      <Navbar abailableBalance={abailableBalance} />
      <div className='max-w-300 mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>{Available ? 'Available Players' : `Selected Players ${selectedPlayers.length}/6`}</h1>
        <div>
          <button onClick={() => setAvailable(true)} className={`py-3 px-4 border border-gray-400 rounded-l-xl md:w-30 border-r-0 ${Available && 'bg-amber-300'}`}>Available</button>
          <button onClick={() => setAvailable(false)} className={`py-3 px-4 border border-gray-400 rounded-r-xl border-l-0 ${!Available && 'bg-amber-300'}`}>Selceted <span>({selectedPlayers.length})</span></button>
        </div>
      </div>
      {Available ?
        <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
          <AvailablePlayers
            abailableBalance={abailableBalance}
            setAvailableBalance={setAvailableBalance}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            playersPromise={playersPromise} />
        </Suspense> :
        <SelectedPlayers selectedPlayers={selectedPlayers} removePlayer={removePlayer} />
      }
    </>
  )
}

export default App
