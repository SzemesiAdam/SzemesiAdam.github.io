function Ph_site(){
    const tartalom = [
        {
            nev: 'Connoisseur',
            kep: 'Connoisseur.jpg',
            link: 'https://www.connoisseurpmvs.com/previews/',
            // https://www.connoisseurpmvs.com/
        },
        {
            nev: 'hentai.tv',
            kep: 'hentai.tv.jpg',
            link: 'https://hentai.tv/',
        }
    ];
    return(
        <>
            <section id="site" style={{display: "none"}}>
                <h3>Porn Sites</h3>
                <div className="container">
                    {tartalom.map((item) => ( 
                        <a href={item.link} target="_blank">
                            <div className="item">
                                <div className="itembg">
                                        <img src={item.kep} className="itemimg"/>
                                </div>
                                <div className="itemtitle">
                                    <h2>{item.nev}</h2>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Ph_site