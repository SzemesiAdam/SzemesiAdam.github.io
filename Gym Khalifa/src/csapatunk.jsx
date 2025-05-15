function Csapatunk(){
    const csapat = [
        {
            nev: 'Nordin Khalifa',
            kep: 'Nordin Khalifa.jpg',
        },
        {
            nev: 'Komlosi Reni',
            kep: 'Komlosi Reni.jpg',
        },
        {
            nev: 'László Kata',
            kep: 'László Kata.jpg',
        },
        {
            nev: 'Lajos Seres',
            kep: 'Lajos Seres.jpg',
        },
        {
            nev: 'Barta Richárd',
            kep: 'Barta Richárd.jpg',
        }
    ]
    return(
        <>
            <section id="csapatunk" style={{display: "none"}}>
                <div className="hd" id="csapatunkheader">
                    <div className="overlay"></div>
                    <h1>Csapatunk</h1>
                </div>
                <div className="cardcontainer">
                    {csapat.map((item) => ( 
                        <div className="card" key={item.nev}>
                            <div className="cardbg">
                                <img src={item.kep} className="cardimg"/>
                            </div>
                            <div className="cardtitle">
                                <h2>{item.nev}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
export default Csapatunk