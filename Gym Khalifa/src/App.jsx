import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [alcim, setAlcim] = useState("Köszöntelek a weboldalon!")


  return (
    <>
      <nav>
        
      </nav>
      <header>
        <div className='title'>
          <img src="/gym_khalifaicon.png" className='logo'/>
          <h4>{alcim}</h4>
        </div>
      </header>
    </>
  )
}

export default App
