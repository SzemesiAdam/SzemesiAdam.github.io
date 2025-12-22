import { useState, useEffect } from 'react'
import './App.css'

export function App() {

  function hozzaad(){
    
  }

  return (
    //ide kerül az oldal törzse
    <>
      <div onClick={hozzaad()} className='plus'>
        <h3>Írj fel egy új idézetett ami szebbé tette a napod.</h3>
        <div>
          Új
        </div>
      </div>
      <div className='container'>

      </div>
    </>
  )
}

export default App
