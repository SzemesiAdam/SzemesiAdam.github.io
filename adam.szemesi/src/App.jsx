import { useState } from 'react'
import './App.css'

function App() {
  //js függvények helye
  const oldalak = ["fooldal", "ismerjmeg", "refmunkak", "menu"]
  // const alcimek = ["Köszöntelek a weboldalon!", "Túrak", "Tervek", "Motorok"]
  // const [alcim, setAlcim] = useState("Köszöntelek a weboldalon!")

  function order(item){
    for(let i = 0; i < oldalak.length; i++){
        if(item != oldalak[i]){
            document.getElementById(oldalak[i]).style.display = "none";
        }
        else{
            document.getElementById(oldalak[i]).style.display = "block";
            setAlcim(alcimek[i]);
            if(window.innerWidth <= 700){
                if(item != "menu"){elozolap = i}
                if(menuallas == false){
                    menuallas = true; 
                    document.querySelector('.mobilmenu').style.transform = 'rotate(90deg)';
                    document.body.style.overflow = "hidden";
                }
                else{
                    document.getElementById("menu").style.display = "none";
                    document.getElementById(oldalak[elozolap]).style.display = "block";
                    setAlcim(alcimek[elozolap]);
                    menuallas = false;
                    document.querySelector('.mobilmenu').style.transform = 'rotate(0deg)';
                    document.body.style.overflow = "visible";
                }
            }
            window.scrollTo({
                top: 0, // A lap tetejére ugrik
                // behavior: 'smooth' Simább görgetés smooth
            });
        }
    }
  }

  return (
    <>
      <nav>
        <div className='menubar'>
          <button onClick={() => order('fooldal')}>Főoldal</button>
          <button onClick={() => order('ismerjmeg')}>Ismerj meg</button>
          <button onClick={() => order('refmunkak')}>Referenciamunkák</button>
        </div>
        <div onClick={() => order('menu')}>
          <span id='e'></span><span id='e'></span><span id='e'></span>
        </div>
      </nav>
      
    </>
  )
}

export default App
