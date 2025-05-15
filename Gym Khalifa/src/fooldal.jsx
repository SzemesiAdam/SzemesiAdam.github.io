function Fooldal(props){
    return(
        <>
        <section id="fooldal" style={{display: "block"}}>
            <header>
                <div className='title'>
                    <img src="/gym_khalifaicon.png" className='logo'/>
                    <button onClick={() => {props.setItem('rolunk')}}>Rólunk</button>
                </div>
            </header>
            <div className='fooldalcontainer' id="fooldalcontainerbg">
                <div className='containeritem'>
                    <h3>Üdvözlünk a Gym Khalifában!</h3>
                    <div className='item70'>
                        <p>
                        Itt nem csak edzünk – itt stílust, erőt és közösséget építünk.
                        </p>
                        <p>
                        A Gym Khalifa egy olyan hely, ahol minden ismétlés számít, minden izzadságcsepp 
                        közelebb visz a célodhoz, és minden belépésed egy új lehetőség önmagad legjobb verziójára.
                        </p>
                        <p>
                        Legyen szó kezdőkről vagy haladókról, erőemelőkről vagy funkcionális edzést kedvelőkről 
                        – nálunk megtalálod a helyed. Modern géppark, tapasztalt edzők és egy motiváló közeg vár 
                        rád nap mint nap.
                        </p>
                        <h4>Csatlakozz hozzánk, és építsd fel a saját legendádat!</h4>
                    </div>
                </div>
                <div className='containeritem'>
                    <img src="public/fooldalkep.jpg" className='fooldalkep'/>
                </div>
            </div>
        </section>
        </>
    )
}
export default Fooldal