import { useState, useEffect} from 'react'
import './App.css'
import Fooldal from './fooldal.jsx'
import Rolunk from './rolunk.jsx'
import Araink from './araink.jsx'
import Csapatunk from './csapatunk.jsx'

function App() {
  //js függvények helye
  const oldalak = ["fooldal", "rolunk", "araink", "csapatunk"]
  const [item, setItem] = useState('fooldal')  

  function order(){
    for(let i = 0; i < oldalak.length; i++){
        if(item != oldalak[i]){
            document.getElementById(oldalak[i]).style.display = "none";
        }
        else{
            document.getElementById(oldalak[i]).style.display = "block";
            window.scrollTo({
                top: 0, // A lap tetejére ugrik
                // behavior: 'smooth' Simább görgetés smooth
            });
        }
    }
  }
  useEffect(() => {
    order()
  },[item])

  return (
    <>
      <nav>
        <button onClick={() => setItem('fooldal')}>Főoldal</button>
        <button onClick={() => setItem('araink')}>Áraink</button>
        <button onClick={() => setItem('csapatunk')}>Csapatunk</button>
      </nav>
      <Fooldal setItem={setItem}/>
      <Rolunk/>
      <Araink/>
      <Csapatunk/>
      <footer>
        <div className='icons'>
          <a href="https://www.facebook.com/gymkhalifa/" target='_blank'><img className='iconskep' src="public/facebook-removebg-preview.png"/></a>
          <a href="https://www.instagram.com/gym_khalifa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><img className='iconskep' src="public/instagram-removebg-preview.png"/></a>
          <a href="https://www.tiktok.com/@gym.khalifa?is_from_webapp=1&sender_device=pc" target='_blank'><img className='iconskep' src="public/tiktok-removebg-preview.png"/></a>
          <img className='iconskep' src="public/youtube-removebg-preview.png"/>
        </div>
        <div className='footeridezet'>
          <p>"Minden egyes ismétlés közelebb visz ahhoz, aki lenni akarsz."</p>
        </div>
        <div className='footertext'>
          <p><span style={{color: 'red'}}>Tel. szám:</span> 06 70 772 2772</p>
          <p><span style={{color: 'red'}}>Email cím:</span> gymkhalifa2020@gmail.com</p>
          <p><span style={{color: 'red'}}>Cím:</span> Kiskunhalas, Szilády Áron u. 5-7, 6400</p>
        </div>
      </footer>
    </>
  )
}

export default App
{/* <div className='boxitem'>
  <iframe className='terkep' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2749.8560497253925!2d19.478141900000004!3d46.431732700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743a1f91a082bb1%3A0x19c61ca055d78729!2sGym%20Khalifa!5e0!3m2!1shu!2shu!4v1747165233622!5m2!1shu!2shu" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div> */}