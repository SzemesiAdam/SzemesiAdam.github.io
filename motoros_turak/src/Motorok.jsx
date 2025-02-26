function Motorok(){
    const tart = [{
        nev: "Honda CB 500 1995",
        szoveg:(
            <p>
                A Honda CB 500  a Honda által 1993 és 2003 között 
                gyártott közepes méretű szabványos motorkerékpárok 
                családja voltak. Alacsony költségük, megbízhatóságuk 
                és jó kezelhetőségük miatt népszerűek voltak. 
                Az Egyesült Királyságban a Honda CB500 Cup versenyen 
                is részt vettek (a nevét 2009-ben Thundersport 
                500-ra változtatta, amikor a Suzuki GS500 és a 
                Kawasaki ER-5 is szerepelt).
            </p>
        ),
        kategoria: "Naked bike",
        teljesitmeny: "58.00 LE (42.3 kW)",
        hengerszam: "2",
        valto: "6 sebességes",
        uzemanyagkapacitas: "18 L",
        hajtas: "Lánc",
        kep: "./IMG_20241109_105747.jpg",
    }]
    return(
        <>
            <section id="motorok" style={{display: "none"}}>
                {tart.map((item) => (
                    <div key={item.nev} className="box">
                        <title>
                            <h2>{item.nev}</h2>
                        </title>
                        <div className="item">
                            {item.szoveg}
                            <table>
                                <tbody>
                                <tr>
                                    <td>Kategória</td>
                                    <td>{item.kategoria}</td>
                                </tr>
                                <tr>
                                    <td>Teljesítmény</td>
                                    <td>{item.teljesitmeny}</td>
                                </tr>
                                <tr>
                                    <td>Hengerek száma</td>
                                    <td>{item.hengerszam}</td>
                                </tr>
                                <tr>
                                    <td>Váltó</td>
                                    <td>{item.valto}</td>
                                </tr>
                                <tr>
                                    <td>Üzemanyag kapacitás</td>
                                    <td>{item.uzemanyagkapacitas}</td>
                                </tr>
                                <tr>
                                    <td>Hajtás</td>
                                    <td>{item.hajtas}</td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="boxkep">
                                <img src={item.kep} className="kep"/>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Motorok