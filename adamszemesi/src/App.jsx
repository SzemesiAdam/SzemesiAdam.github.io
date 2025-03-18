import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
        <nav>
          <button onClick={() => order('fooldal')}>Főoldal</button>
          <button onClick={() => order('imerjmeg')}>Ismerj meg</button>
          <button onClick={() => order('refmunkak')}>Referenciamunkák</button>
        </nav>
    </>
  )
}

export default App
