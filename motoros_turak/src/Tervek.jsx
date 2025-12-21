import { useState } from "react";

function Tervek(){
    const csillagtart = [
        // {
        //     cim: '',
        //     cim2: '',
        //     kep: '',
        //     szoveg: ,
        //     utvonal: '',
        //     megallok: ,
        //     szallas: ,
        //     programok: ,
        // },
        {
            cim: 'Sirok csillag túra',
            cim2: 'Fedezd fel a Mátra szívét',
            kep: 'sirok.jpg',
            szoveg: (
                <>
                    <p>
                        Ha szereted a kanyargós utakat, a lenyűgöző panorámát és a 
                        történelmi helyszíneket, akkor a Siroki csillagtúra neked 
                        való! Sirok, a festői kis falu a Mátra lábánál, tökéletes 
                        kiindulópont egy izgalmas motoros kalandhoz.
                    </p>
                    <p>
                        A túra során bejárhatod a Mátrai szerpentineket, 
                        megcsodálhatod a Siroki várat, és élvezheted a vidéki utak 
                        nyugalmát. Útba ejtheted Parádsasvárat, ahol egy kávé 
                        mellett gyönyörködhetsz a tájban, vagy felfedezheted a 
                        híres Kékestetőt, Magyarország legmagasabb pontját.
                    </p>
                    <p>
                        A Siroki csillagtúra garantáltan felejthetetlen élményt 
                        nyújt minden motoros számára. Pattanj nyeregbe, és indulj 
                        útnak a Mátra varázslatos vidékein!
                    </p>
                </>
            ),
            utvonal: "https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d694203.0817481116!2d19.148368819569264!3d47.18270726953253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x4743a0d5b46d16f9%3A0x400c4290c1e1390!2sKiskunhalas!3m2!1d46.435440899999996!2d19.483428399999998!4m5!1s0x4743da6108f61c3f%3A0x400c4290c1e1180!2sKecskem%C3%A9t!3m2!1d46.896371099999996!2d19.6896861!4m5!1s0x4741064d7c358985%3A0x400c4290c1e13c0!2zSsOhc3piZXLDqW55!3m2!1d47.500184499999996!2d19.9062865!4m5!1s0x47408a7d2f45a063%3A0x400c4290c1e3270!2sSirok!3m2!1d47.9319682!2d20.1944831!5e0!3m2!1shu!2shu!4v1740834774832!5m2!1shu!2shu",
            megallok: (
                <>
                    <ul>
                        <li>Cegléd - SHell kút</li>
                    </ul>
                </>
            ),
            szallas: (
                <>
                    <ul>
                        <li><a href="https://www.varcamping.hu/rolunk" target="_blank">VÁR-CAMPING</a></li>
                    </ul>
                </>
            ),
            programok: "",
            elson: "https://www.google.com/maps/embed?pb=!1m44!1m12!1m3!1d85455.59106575917!2d20.15224624977366!3d47.984970585778385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m29!3e0!4m5!1s0x47408a7d2f45a063%3A0x400c4290c1e3270!2sSirok!3m2!1d47.9319682!2d20.1944831!4m3!3m2!1d48.0110457!2d20.1202871!4m3!3m2!1d48.051223799999995!2d20.153619499999998!4m3!3m2!1d48.022757999999996!2d20.293351899999998!4m3!3m2!1d47.9090038!2d20.3705702!4m5!1s0x47408a7d2f45a063%3A0x400c4290c1e3270!2sSirok%2C%203332!3m2!1d47.9319682!2d20.1944831!5e0!3m2!1shu!2shu!4v1740838284634!5m2!1shu!2shu",
            masodikn: "https://www.google.com/maps/embed?pb=!1m58!1m12!1m3!1d678215.3136413434!2d19.645434170502906!3d48.39359327952768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m43!3e0!4m5!1s0x47408a7d2f45a063%3A0x400c4290c1e3270!2sSirok%2C%203332!3m2!1d47.9319682!2d20.1944831!4m5!1s0x473fa322abfc2b45%3A0x3a0d4a87ead1bae!2s587%2C%20049%2011%2C%20Szlov%C3%A1kia!3m2!1d48.555939599999995!2d20.3997614!4m3!3m2!1d48.789407499999996!2d20.3998392!4m3!3m2!1d48.8561992!2d20.379976499999998!4m3!3m2!1d48.8216561!2d20.4865752!4m3!3m2!1d48.6420503!2d20.3675426!4m3!3m2!1d48.5466846!2d20.3955987!4m3!3m2!1d48.058542499999994!2d20.2581935!4m5!1s0x47408a7d2f45a063%3A0x400c4290c1e3270!2sSirok!3m2!1d47.9319682!2d20.1944831!5e0!3m2!1shu!2shu!4v1740909125378!5m2!1shu!2shu",
            harmadikn: "https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d170850.00046261656!2d20.243273048507838!3d48.003445266258204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e0!4m5!1s0x47408a7d2f45a063%3A0x400c4290c1e3270!2sSirok!3m2!1d47.9319682!2d20.1944831!4m5!1s0x47409cdb2628f481%3A0x9a3b7db50986c50c!2sMiskolc%2C%20Lillaf%C3%BCred!3m2!1d48.098566899999994!2d20.621813!4m5!1s0x47408a7d2f45a063%3A0x400c4290c1e3270!2sSirok!3m2!1d47.9319682!2d20.1944831!5e0!3m2!1shu!2shu!4v1740907844618!5m2!1shu!2shu",
        },

    ];
    const tobbnaptart = [
        {
            cim: "Orfűi túra", 
            cim2: ',,Egy kaland a természet szívében"',
            kep: 'orfu.jpg',
            szoveg:(
                <>
                    <p>
                        Ha motorozni szeretsz, és szeretnél felfedezni egy gyönyörű, 
                        természeti kincsekkel teli helyet, akkor Orfű és környéke 
                        ideális számodra. A Pécs melletti Orfű egy festői kis település, 
                        amely a Pécsi-medencében található, és csodálatos tájakon, 
                        erdőkön, dombokon át vezető motoros túrák ígérnek felejthetetlen élmény.
                    </p>
                    <p>
                        A túra során motoroddal a fenyvesekkel övezett kanyargós utakon haladhatsz, 
                        még egy csodálatos Orfűi tó panorámájában gyönyörködhetsz. Az 5 km hosszú 
                        tavat és a környező erdőket motorral körbejárva olyan tájakat láthatsz, 
                        amelyek igazi kikapcsolódást nyújtanak. Az utakon való száguldozás és a 
                        friss hegyi levegő igazi szabadságélményt adnak, újra elmerülhetsz a 
                        természet csendjében.
                    </p>
                    <p>
                        A túra során több érdekes célállomás is vár rád. Ne hagyd ki a híres 
                        Orfűi víztározót, amely nemcsak a motorosok, hanem a túrázók és 
                        természetlők számára is igazi ékszerdoboz. Az útvonal közben felfedezheti 
                        a környékbeli kis falvakat is, ahol megpihenhetsz, és ízletes helyi ételeket 
                        is kostolhadsz.
                    </p>
                </>
            ),
            utvonal: "https://www.google.com/maps/embed?pb=!1m46!1m12!1m3!1d1412721.9209564133!2d17.475884828026743!3d46.24580434348135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m31!3e0!4m5!1s0x4743d1595e04083b%3A0x1300c428eb07e822!2s6400%2C%20Kiskunhalas!3m2!1d46.419029699999996!2d19.468636399999998!4m5!1s0x4742dda63c30b873%3A0x987646d50d053e02!2zQWxzw7NuecOpa2kga3VsdMO6cmjDoXosIEFsc8OzbnnDqWssIDcxNDg!3m2!1d46.202727599999996!2d18.7370846!4m5!1s0x4742e9f13aebe3dd%3A0xb6e874757df53d2e!2zNTYwMyAxNSwgTcOzcsOhZ3ksIDcxNjU!3m2!1d46.2383793!2d18.6331863!4m5!1s0x4742af4dfa1bf987%3A0x63c3fa45d906a268!2zSG90ZWwgQWJhbGlnZXQsIEFiYWxpZ2V0LCDDnGTDvGzFkXRlcsO8bGV0LCA3Njc4!3m2!1d46.1381234!2d18.1150734!4m5!1s0x4742af76fb39ea4b%3A0xb00c428ea8ba473!2zNzY3NywgT3JmxbE!3m2!1d46.1556743!2d18.1595984!5e0!3m2!1shu!2shu!4v1740909699921!5m2!1shu!2shu",
            megallok:(
                <ul>
                    <li>Bonyhád - Mol kút</li>
                    <li>Orfű - Szomjas vándor</li>
                </ul>
            ),
            szallas:(
                <ul>
                    <li><a href="http://www.panoramacamping.hu/" target="_blank">Orfű Panoráma Camping</a></li>
                    <li><a href="https://laterumhotel.hu/?gad_source=1&gclid=Cj0KCQiAo5u6BhDJARIsAAVoDWuSgCapmWd74ErezR1IrNo3deFjwzmf8zvvMPJuQjj8P6UUyAyU-McaAk5lEALw_wcB" target="_blank">Hotel Laterum Pécs</a></li>
                </ul>
            ),
            programok:(
                <ul>
                    <li>Orfű - Orfű szabadstrand</li>
                    <li>Orfű - Balázs-hegyi-kilátó</li>
                    <li>Pécs - Pécsi TV torony</li>
                </ul>
            ),
        },
        {
            cim: "Dunakanyar túra",
            cim2: ',,Felfedezés a motor nyergében"',
            kep: 'dunakanyar.jpg',
            szoveg:(
                <p>
                    A Dunakanyar, Magyarország egyik legszebb tája, ideális helyszín 
                    egy kalandos motoros túrához. A túra célja, hogy felfedezd a 
                    kanyarokkal teli hegyvidéki utakat, a festői falvakat és a Duna 
                    lenyűgöző panorámáját. Az alábbi túra útvonal a motorozás 
                    élvezetét ötvözi a természet és a kultúra szépségeivel.
                    A túra közben a természet szépségei és a történelmi helyszínek 
                    gazdagítják az élményt, így minden motoros számára felejthetetlen 
                    kalandot ígér.
                </p>
            ),
            utvonal: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d804848.1472895348!2d18.539663909924872!3d47.09861988492429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x4743a0d5b46d16f9%3A0x400c4290c1e1390!2sKiskunhalas!3m2!1d46.435440899999996!2d19.483428399999998!4m5!1s0x476a7da18e0fd503%3A0x5ca14b31951545ec!2zRMO2bcO2cywgRGFudSBLZW1waW5n!3m2!1d47.765507!2d18.915022999999998!5e1!3m2!1shu!2shu!4v1734118503088!5m2!1shu!2shu",
            megallok:(
                <ul>
                    <li>Solt - Kurta Kocsma Vendglő</li>
                    <li>Dömös - OMV kút</li>
                    <li>Vác - ALDI</li>
                </ul>
            ),
            szallas:(
                <ul>
                    <li><a href="https://www.danukanyar.hu/kemping-domos/" target="_blank">Danu kemping</a></li>
                </ul>
            ),
            programok:(
                <ul>
                    <li>Visegrádi - Fellegvár</li>
                    <li>Hajókirándulás</li>
                    <li>Dunabogdányi Szabadstrand</li>
                </ul>
            ),
        },
        {
            cim: 'Pusztabányai motoros túra',
            cim2: ',,Ahol lelassul az idő"',
            kep: 'pusztabanya.jpg',
            szoveg: 
            <>
                <p>
                    Képzeld el, ahogy a Mecsek kanyargós útjain gurulsz, körülötted erdők, 
                    friss levegő és az a semmihez sem fogható szabadságérzés, ami csak 
                    motorozás közben létezik. A cél a Pusztabányai kulcsosház, ahol egy 
                    igazi nyári motoros kikapcsolódás vár.
                </p>
                <p>
                    A túra nem a rohanásról szól: sátorozás a természetben, esti sütögetés 
                    a tűz mellett, jó beszélgetések és egy olyan csillagos ég, amit városban 
                    ritkán lát az ember. Amikor leszáll az este, a Mecsek csendje és a csillagos 
                    égbolt garantáltan feltölt – itt tényleg ki lehet kapcsolni.
                </p>
                <p>
                    Napközben pedig ott van Orfű közelsége is: ha igazi nyári meleg van, egy 
                    frissítő fürdés a tóban tökéletes kiegészítője a motoros élménynek. Ez a 
                    túra egyszerre szól a motorozás öröméről, a természet közelségéről és a közös élményekről.
                    <br />
                    Egy túra, ahol nem a kilométer számít, hanem az élmény, amit hazaviszel.
                </p>
            </>,
            utvonal: 'https://www.google.com/maps/embed?pb=!1m38!1m12!1m3!1d705580.0144984327!2d18.239683743502724!3d46.30642283038761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m23!3e0!4m5!1s0x4743a0d5b46d16f9%3A0x400c4290c1e1390!2sKiskunhalas!3m2!1d46.435440899999996!2d19.483428399999998!4m5!1s0x47431f886d9243d3%3A0x1a3097a4b762bcc8!2sBaja!3m2!1d46.181795099999995!2d18.9543051!4m5!1s0x4742bd8f7ad27907%3A0x400c4290c1e2b00!2zU3rDoXN6dsOhcg!3m2!1d46.2737955!2d18.376871599999998!4m3!3m2!1d46.202238!2d18.3483803!5e0!3m2!1shu!2shu!4v1766351183282!5m2!1shu!2shu',
            megallok: (
                <ul>
                    <li>Bonyhád - Mol kút</li>
                </ul>
            ),
            szallas: (
                <ul>
                    <li>Sátorozás</li>
                    <li><a href="https://mecsekerdo.hu/okoturizmus/pusztabanya-kulcsoshaz/#1608625015405-866f6595-e3d0" target="_blank">Pusztabányai kulcsosház</a></li>
                </ul>
            ),
            programok: (
                <ul>
                    <li>Orfű szabad strand</li>
                    <li>Orfű kilátó</li>
                    <li>Szálka tó</li>
                    <li>Abaligeti csepkőbarlang</li>
                    <li>Máré vár</li>
                    <li>Sűtögetés</li>
                </ul>
            ),
        },
    ];
    const egynaptart = [
        {
            cim: "Tihanyi túra",
            cim2: ',,Szerpentinek és páratlan kilátás"',
            kep: 'tihany.jpg',
            szoveg:(
                <>
                    <p>
                        Fedezd fel két keréken a Balaton egyik legszebb vidékét! 
                        A Tihanyi-félsziget kanyargós útjai, festői levendulamezői 
                        és a panorámás szerpentinek felejthetetlen élményt nyújtanak 
                        minden motoros számára. <br/> A túra során megcsodálhatod a Belső-tavat, 
                        a híres Apátságot és a tóra nyíló lélegzetelállító kilátást.
                    </p>
                    <p>
                        Egy kávé a parton, a motorok hangja és a friss balatoni levegő 
                        – kell ennél több egy tökéletes guruláshoz?
                    </p>
                </>
            ),
            utvonal: "https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d1402208.0060654797!2d17.358623932283745!3d46.652686007344954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x4743d1595e04083b%3A0x1300c428eb07e822!2s6400%2C%20Kiskunhalas!3m2!1d46.419029699999996!2d19.468636399999998!4m5!1s0x4743afd8768825e5%3A0xb00c428ea86a1f3!2s6230%2C%20Soltvadkert!3m2!1d46.5529096!2d19.3887927!4m5!1s0x4769d5376f40462b%3A0x1300c428ead5d392!2zNzA5MCwgVGFtw6FzaQ!3m2!1d46.657512499999996!2d18.306141999999998!4m5!1s0x4769b76191a15ac3%3A0xb00c428eace5ba3!2zODYxNywgS8WRcsO2c2hlZ3k!3m2!1d46.8270224!2d17.9100248!4m5!1s0x4769bbd86b33a9ab%3A0xb00c428ea4b3153!2zODYyMiwgU3rDoW50w7Nk!3m2!1d46.8764708!2d17.913501099999998!4m5!1s0x4769bc981950381f%3A0xb00c428ea4d81b3!2s8237%2C%20Tihany!3m2!1d46.8973608!2d17.8770164!5e0!3m2!1shu!2shu!4v1740909789852!5m2!1shu!2shu",
            megallok:(
                <ul>
                    <li>Solt - Kurta Kocsma Vendglő</li>
                    <li>Tamási - Mol kút</li>
                    <li>Simontornya - Tulipán Étterem</li>
                    <li>Kőröshegy előtti körforgelom - Kőröshegyi völgyhid</li>
                    <li>Szántod - Komp</li>
                    <li>Tihany rév - Komp</li>
                </ul>
            ),
            szallas: "",
            programok:(
                <ul>
                    <li>Siófok - Fordított ház</li>
                    <li>Tihany - Ciprián-forrás</li>
                    <li>Tihany - Tihanyi Apádság</li>
                    <li>Tihany - Tihanyi Hajóállomás</li>
                </ul>
            ),
        },
        {
            cim: "Szeged",
            cim2: ',,A napfény városa, motoros szemmel"',
            kep: 'szeged.jpg',
            szoveg:(
                <p>
                    Szeged, Magyarország déli ékköve, nemcsak a kulturális és történelmi 
                    látnivalóival nyűgöz le, hanem kiváló motoros túrahelyszín is! 
                    A város széles sugárútjai, festői Tisza-parti panorámája és a 
                    környező alföldi táj tökéletes úti célt kínál mindenkinek, aki 
                    két keréken szeretné felfedezni a vidéket.
                </p>
            ),
            utvonal: "https://www.google.com/maps/embed?pb=!1m32!1m12!1m3!1d705473.2739223978!2d19.14549245140449!3d46.31470347274344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m17!3e0!4m5!1s0x4743d1595e04083b%3A0x1300c428eb07e822!2s6400%2C%20Kiskunhalas!3m2!1d46.419029699999996!2d19.468636399999998!4m3!3m2!1d46.272019!2d19.5352682!4m5!1s0x474487e22bcce54b%3A0x400c4290c1e1190!2sSzeged!3m2!1d46.2530102!2d20.141425299999998!5e0!3m2!1shu!2shu!4v1740909853713!5m2!1shu!2shu",
            megallok:(
                ""
            ),
            szallas: "",
            programok:(
                <ul>
                    <li>Napfényfürdő Aquapolis Szeged</li>
                </ul>
            ),
        }
    ];
    
    function ellenorzo(megallok, szallas, programok) {
        let elemek = [];
        if (megallok !== "") {
            elemek.push(
                <div key="megallok">
                    <h3>Megállók</h3>
                    {megallok}
                </div>
            );
        }
    
        if (szallas !== "") {
            elemek.push(
                <div key="szallas">
                    <h3>Szállás</h3>
                    {szallas}
                </div>
            );
        }
    
        if (programok !== "") {
            elemek.push(
                <div key="programok">
                    <h3>Programok</h3>
                    {programok}
                </div>
            );
        }
        return <>{elemek}</>; // Fragmentben visszaadjuk a JSX elemeket
    }
    function opener(cim){
        let target = document.getElementById(cim);
        let icon = document.getElementById(cim + "icon");
    
        // Ellenőrizzük az állapotot egy `data-open` attribútummal
        let isOpen = icon.getAttribute("data-open") === "true";
    
        if (!isOpen) {
            target.style.display = "block";
            icon.style.transform = "rotate(180deg)";
            icon.setAttribute("data-open", "true"); // Beállítjuk az új állapotot
        } else {
            target.style.display = "none";
            icon.style.transform = "rotate(0deg)";
            icon.setAttribute("data-open", "false");
        }
    }
    const [napiterkep, setNapiterkep] = useState("https://www.google.com/maps/embed?pb=!1m44!1m12!1m3!1d85455.59106575917!2d20.15224624977366!3d47.984970585778385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m29!3e0!4m5!1s0x47408a7d2f45a063%3A0x400c4290c1e3270!2sSirok!3m2!1d47.9319682!2d20.1944831!4m3!3m2!1d48.0110457!2d20.1202871!4m3!3m2!1d48.051223799999995!2d20.153619499999998!4m3!3m2!1d48.022757999999996!2d20.293351899999998!4m3!3m2!1d47.9090038!2d20.3705702!4m5!1s0x47408a7d2f45a063%3A0x400c4290c1e3270!2sSirok%2C%203332!3m2!1d47.9319682!2d20.1944831!5e0!3m2!1shu!2shu!4v1740838284634!5m2!1shu!2shu");  // Állapotkezelés
    return(
        <>
            <section id="tervek" style={{display: "none"}}>
                <h5>Csillagtúrák</h5>
                {csillagtart.map((item) => (
                    <div key={item.cim} className="box">
                        <title>
                            <h2>{item.cim} - <span style={{fontStyle: "italic"}}>{item.cim2}</span></h2>
                            <img src="./down-arrow.png" className="icon" id={item.cim + "icon"} onClick={() => opener(item.cim)}/>
                        </title>
                        <div className="item">
                            <img src={item.kep} className="itemheader"/>
                            <div id={item.cim} style={{display: "none"}}>
                                {item.szoveg}
                                <h3>Útvonal</h3>
                                <div className="terkep">
                                    <iframe src={item.utvonal}></iframe>
                                </div>
                                {ellenorzo(item.megallok, item.szallas, item.programok)}
                                <h3>Napi tervek</h3>
                                <div className="napokbox">
                                    <button onClick={() => setNapiterkep(item.elson)}>1.nap</button>
                                    <button onClick={() => setNapiterkep(item.masodikn)}>2.nap</button>
                                    <button onClick={() => setNapiterkep(item.harmadikn)}>3.nap</button>
                                </div>
                                <div className="terkep">
                                    <iframe src={napiterkep} id="terkepnapi"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <h5>Több napos túrák</h5>
                {tobbnaptart.map((item) => (
                    <div key={item.cim} className="box">
                        <title>
                            <h2>{item.cim} - <span style={{fontStyle: "italic"}}>{item.cim2}</span></h2>
                            <img src="./down-arrow.png" className="icon" id={item.cim + "icon"} onClick={() => opener(item.cim)}/>
                        </title>
                        <div className="item">
                            <img src={item.kep} className="itemheader"/>
                            <div id={item.cim} style={{display: "none"}}>
                                {item.szoveg}
                                <h3>Útvonal</h3>
                                <div className="terkep">
                                    <iframe src={item.utvonal}></iframe>
                                </div>
                                {ellenorzo(item.megallok, item.szallas, item.programok)}
                            </div>
                        </div>
                    </div>
                ))}
                <h5>Egy napos túrák</h5>
                {egynaptart.map((item) => (
                    <div key={item.cim} className="box">
                        <title>
                            <h2>{item.cim} - <span style={{fontStyle: "italic"}}>{item.cim2}</span></h2>
                            <img src="./down-arrow.png" className="icon" id={item.cim + "icon"} onClick={() => opener(item.cim)}/>
                        </title>
                        <div className="item">
                            <img src={item.kep} className="itemheader"/>
                            <div id={item.cim} style={{display: "none"}}>
                                {item.szoveg}
                                <h3>Útvonal</h3>
                                <div className="terkep">
                                    <iframe src={item.utvonal}></iframe>
                                </div>
                                {ellenorzo(item.megallok, item.szallas, item.programok)}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Tervek