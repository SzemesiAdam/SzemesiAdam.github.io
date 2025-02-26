import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mega_girl from './mega_girl'
import Ph_profil from './ph_profil'
import Ph_site from './ph_site'

let elozolap = 0;
let menuallas = false;

window.addEventListener("scroll", function() {
  let navbar = document.getElementById("navbar");
  if (window.scrollY > 700) { // Ha 50px-nél többet görgetsz
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
});

function App() {
  //js függvények helye
  const oldalak = ["mega_girl", "profil", "site", "menu"];
  const alcimek = ["Mega_girl", "Ph_video", "Ph_site"];
  const [alcim, setAlcim] = useState("Mega_girl");

  function order(item){
    for(let i = 0; i < oldalak.length; i++){
        if(item != oldalak[i]){
          document.getElementById(oldalak[i]).style.display = "none";
        }
        else{
            setAlcim(alcimek[i]);
            document.getElementById(oldalak[i]).style.display = "block";
            if(window.innerWidth <= 680){
                if(item != "menu"){elozolap = i}
                if(menuallas == false){
                    menuallas = true; 
                    document.querySelector(".mobilmenu").style.transform = 'rotate(90deg)';
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
      <nav id='navbar'>
        <div className='menubar'>
          <button onClick={() => order("mega_girl")}>Mega_girl</button>
          <button onClick={() => order("profil")}>Ph_profil</button>
          <button onClick={() => order("site")}>Ph_site</button>
        </div>
        <div onClick={() => order("menu")} className="mobilmenu">
            <span id="e"></span><span id="e"></span><span id="e"></span>
        </div>
      </nav>
      {/* mobilmenu */}
      <section id="menu" style={{display: "none"}}>
          <div className="menupage">
            <button onClick={() => order("mega_girl")}>Mega_girl</button>
            <button onClick={() => order("profil")}>Ph_porfil</button>
            <button onClick={() => order("site")}>Ph_site</button>
          </div>
      </section>
      <header>
        <div className='title'>
          <h1>Links_x</h1>
          <h4>{alcim}</h4>
        </div>
      </header>
      <Mega_girl/>
      <Ph_profil/>
      <Ph_site/>
      <footer>
        <p>Készítette: <span style={{color: 'yellow'}}>Fulcrum</span></p>
      </footer>
    </>
  )
}

export default App
