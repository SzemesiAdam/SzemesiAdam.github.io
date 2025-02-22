import { useState } from 'react'
import './App.css'
import Fooldal from './Fooldal.jsx'
import Turak from './Turak.jsx'
import Tervek from './Tervek.jsx'
import Motorok from './Motorok.jsx'

let elozolap = 0;
let menuallas = false;

function App() {
  //js függvények helye
  const oldalak = ["fooldal", "turak", "tervek", "motorok", "menu"]
  const alcimek = ["Köszöntelek a weboldalon!", "Túrak", "Tervek", "Motorok"]
  const [alcim, setAlcim] = useState("Köszöntelek a weboldalon!")

  function order(item){
    for(let i = 0; i < oldalak.length; i++){
        if(item != oldalak[i]){
            document.getElementById(oldalak[i]).style.display = "none";
        }
        else{
            document.getElementById(oldalak[i]).style.display = "block";
            setAlcim(alcimek[i]);
            if(window.innerWidth <= 600){
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
        <div className="menubar">
            <button onClick={() => order("fooldal")}>Főoldal</button>
            <button onClick={() => order("turak")}>Túrák</button>
            <button onClick={() => order("tervek")}>Tervek</button>
            <button onClick={() => order("motorok")}>Motorok</button>
        </div>
        <div onClick={() => order("menu")} className="mobilmenu">
            <span id="e"></span><span id="e"></span><span id="e"></span>
        </div>
    </nav>
    {/* mobilmenu */}
    <section id="menu" style={{display: "none"}}>
        <div className="menupage">
            <button onClick={() => order("fooldal")}>Főoldal</button>
            <button onClick={() => order("turak")}>Túrák</button>
            <button onClick={() => order("tervek")}>Tervek</button>
            <button onClick={() => order("motorok")}>Motorok</button>
        </div>
    </section>
    <header>
            <div className="title">
                <h1>Motoros túrák</h1>
                <h4>{alcim}</h4>
            </div>
    </header>
    <Fooldal/>
    <Turak/>
    <Tervek/>
    <Motorok/>
    <footer>
        <p>Készítette: <span style={{color: '#ff7c39'}}>Szemesi Ádám</span></p>
    </footer>
    </>
  )
}

export default App