import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Navbar from './Components/Navbar/Navbar'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'


const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}


function App() {

  const playersPromise = fetchPlayers()

  return (
    <>
      <Navbar />
      <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
        <AvailablePlayers playersPromise={playersPromise} />
      </Suspense>
      <SelectedPlayers />
    </>
  )
}

export default App
