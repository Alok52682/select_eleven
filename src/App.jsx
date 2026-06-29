import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Navbar from './Components/Navbar/Navbar'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'


const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}


function App() {
  const [Available, setAvailable] = useState(true);

  const playersPromise = fetchPlayers()

  return (
    <>
      <Navbar />
      <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
        <h1 className='font-bold'>{Available ? 'Available Players' : 'Selected Players'}</h1>
        <div>
          <button onClick={() => setAvailable(true)} className={`py-3 px-4 border border-gray-400 rounded-l-xl md:w-30 border-r-0 ${Available && 'bg-amber-300'}`}>Available</button>
          <button onClick={() => setAvailable(false)} className={`py-3 px-4 border border-gray-400 rounded-r-xl border-l-0 md:w-30 ${!Available && 'bg-amber-300'}`}>Selceted <span>{0}</span></button>
        </div>
      </div>
      {Available ?
        <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
          <AvailablePlayers playersPromise={playersPromise} />
        </Suspense> :
        <SelectedPlayers />
      }
    </>
  )
}

export default App
