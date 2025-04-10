import {useRef, useState } from 'react'
import './App.css'
import Fooldal from './Fooldal.jsx'
import Filmek from './Filmek.jsx'
import Sorozatok from './Sorozatok.jsx'
import Jatekok from './Jatekok.jsx'

let elozolap = 0;
let menuallas = false;

window.addEventListener("scroll", function() {
    if (window.scrollY > 650) { // Ha 50px-nél többet görgetsz
        document.getElementById("navbar").classList.add("scrolled");
    } else {
        document.getElementById("navbar").classList.remove("scrolled");
    }
});

function App() {
  //js függvények helye
  const oldalak = ["fooldal", "filmek", "sorozatok", "jatekok", "menu"]
  const alcimek = ["Köszöntelek a weboldalon!", "Filmek", "Sorozatok", "Játékok"]
  const [alcim, setAlcim] = useState("Köszöntelek a weboldalon!")

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
      <header>
        <div className="title">
          <h1>WatchIt</h1>
          <h4>{alcim}</h4>
        </div>
      </header>
      <div>
        <nav id='navbar'>
            <div className="menubar">
                <button onClick={() => order("fooldal")}>Főoldal</button>
                <button onClick={() => order("filmek")}>Filmek</button>
                <button onClick={() => order("sorozatok")}>Sorozatok</button>
                <button onClick={() => order("jatekok")}>Játékok</button>
            </div>
        </nav>
      </div>
      <Fooldal/>
      <Filmek/>
      <Sorozatok/>
      <Jatekok/>
      <footer>
        <h3>Készítette: <span style={{color: "goldenrod"}}>Szemesi Ádám</span></h3>
      </footer>
    </>
  )
}

export default App
