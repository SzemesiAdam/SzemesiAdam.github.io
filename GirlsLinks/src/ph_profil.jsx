function Ph_profil(){
    const tartalom = [
        {
            nev: 'MrPussyLicking',
            kep: 'MrPussyLicking.jpg',
            link: 'https://www.pornhub.com/model/mrpussylicking',
        },
        {
            nev: 'CloseUpFantasy',
            kep: 'CloseUpFantasy.jpg',
            link: 'https://www.pornhub.com/model/closeupfantasy',
        },
        {
            nev: 'Shaiden Rogue',
            kep: 'Shaiden Rogue.jpg',
            link: 'https://www.pornhub.com/model/shaiden-rogue',
        },
        {
            nev: 'MickLiter',
            kep: 'MickLiter.jpg',
            link: 'https://www.pornhub.com/model/mickliter',
        },
        {
            nev: 'Luna Vitaler',
            kep: 'Luna Vitaler.jpg',
            link: 'https://www.pornhub.com/model/luna-vitaler',
        }
    ];
    return(
        <>
            <section id="profil" style={{display: "none"}}>
                <h3>Pornhub Profiles</h3>
                <div className="container">
                    {tartalom.map((item) => (
                            <a href={item.link} target="_blank" key={item.nev}>
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

export default Ph_profil