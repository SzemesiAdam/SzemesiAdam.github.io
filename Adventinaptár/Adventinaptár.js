window.onload = loading;
const today = new Date(2025, 11, 5); // hónap 0-val kezdődik → 11 = december
console.log(today);
let year = today.getFullYear();
const adventStart = new Date(year, 11, 1); // December 1.
const adventEnd = new Date(year, 11, 24); // December 24.
var mounth = today.getMonth() + 1;
var day = today.getDate();
var counter = 0;

if(mounth == 12 && day <= 24){
    if(day == 6){
        document.getElementById('nap').innerHTML = "Boldog Mikulást!"
    }
    else if (day == 24){
        document.getElementById('nap').innerHTML = "Boldog Karácsonyt!"
    }
    else{
        document.getElementById('nap').innerHTML = "Advent " + day + ". napja van!"
    }
}
else{
    // Következő év
    if(mounth == 12 && day > 24){
        year += 1;
    }
    const nextAdventStart = new Date(year, 11, 1); // Következő évi advent kezdete
    const diffTime = nextAdventStart - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('nap').innerHTML = `Adventig még <span style="color:yellow">` + diffDays + `</span> nap van.`;
}

function order(item){
    if(mounth == 12){
        if(item <= day && day <= 24){
            document.getElementById(item).style.display = 'block';
        }
    }
}
function secret(){
    if(counter == 5){
        document.getElementById('secret').style.display = "block";
    }
    else{
        counter = counter + 1;
    }
}

const list = [
    {
        idezet: "",
        hivatkozas: ""
    },
    {
        idezet: "Ünnepet nem is vehetsz boltban, mert az ünnep inkább benned, legbelül.",
        hivatkozas: ""
    },
    {
        idezet: "Olyanok vagyunk mint a könyvek. A legtöbb ember csak a borítót látja. Néhány ember csak a bevezetőtt olvassa el. Sok ember hisz a kritikusoknak. És csak egy-két ember lesz,aki ismeri a tartalmat is.",
        hivatkozas: "Émelie Zola"
    },
    {
        idezet: "A legyőzöttség csak egy ideiglenes állapot, a feladás teszi véglegessé.",
        hivatkozas: ""
    },
    {
        idezet: "Amikor van rá lehetőséged, hogy segits másokon, ne tétovázz, tedd meg.<br>Ne feled!<br>Ilyenkor az Univerzum rajtad keresztül reagál valakinek az imájára.",
        hivatkozas: ""
    },
    {
        idezet: "Nem tudsz mindig mindent irányitani. Néha lazíts és hidd el, hogy a dolgok a helyükre kerülnek. Egy kicsit engedj ki és hagyd az életet megtörténni.",
        hivatkozas: ""
    },
    {
        idezet: "A remény olyan, mint a Nap: ha csak akkor hiszel benne, amikor látod is, nem éled túl az éjszakát.",
        hivatkozas: ""
    },
    {
        idezet: "Lehetetlen - mondta a büszkeség.<br>Kockázatos - mondta a tapasztalat.<br>Felesleges - mondta az ésszerűsség.<br>Próbáld meg - mondta a szív.",
        hivatkozas: ""
    },
    {
        idezet: "Ahogy idősebb leszel, rájössz hogy az emberek mindig találnak időt arra, amit igazán szeretnének és kifogást mindenre, amit nem.",
        hivatkozas: ""
    },
    {
        idezet: "Az emlékek mindig különlegesek.<br>Néha nevetünk, mikor visszaemlékszünk azokra a napokra, amiken sírtunk...<br>És sírunk amikor visszagondolunk azokra a napokra, mikor őszinte volt a nevetésünk.",
        hivatkozas: ""
    },
    {
        idezet: "A hit azt jelenti, hogy az ember elhiszi amit nem lát. Ennek a hitnek pedig az a jutalma, hogy látni fogja azt, amiben hisz.",
        hivatkozas: ""
    },
    {
        idezet: "Naponta eldöntjük, kik akarunk lenni, nagy tettekkel és kicsikkel, és minden döntés számít.",
        hivatkozas: "A hullahó-akció"
    },
    {
        idezet: "Egy kapcsolat nem mindig napsütés, de két ember foghat egy esernyőt azért, hogy túléljék a vihart!",
        hivatkozas: ""
    },
    {
        idezet: "A hibák olyan értékes leckék, amiket túl későn tanulunk meg.",
        hivatkozas: "Star Wars A klónok háborúja"
    },
    {
        idezet: "Míg hiszel, a csengő hangja mindig hallható lesz.",
        hivatkozas: "A Polar Expressz"
    },
    {
        idezet: "Amikor úgy tűnik, hogy minden ellened van, emlékezz rá, hogy a repülő is széllel szemben száll fel, nem vele együtt.",
        hivatkozas: ""
    },
    {
        idezet: "A karácsony nem old meg minden bajt, de reményt ad és jóságra ösztönöz.",
        hivatkozas: "Noelle: A Télapó lánya"
    },
    {
        idezet: "A kompromisszumkészség erény, nem pedig megvetendő gyengeség.",
        hivatkozas: "Star Wars A klónok háborúja"
    },
    {
        idezet: "Add tovább a tudásodat, az erőt, a jártasságot. De a gyengeséget, dőreséget és kudarcot szintúgy. Igen, leginkább a kudarcot. Mert a legjobb tanár éppen a kudarc.",
        hivatkozas: ""
    },
    {
        idezet: "Ha szeretet van az életünkben, az pótol ezernyi dolgot ami hiányzik. Ha nincs szeretet, mindegy mink van, az sosem lesz elég.",
        hivatkozas: ""
    },
    {
        idezet: "Nem az számít, hogy mennyi időd van. Az számít, hogy mit kezdesz vele.",
        hivatkozas: "Star Wars Republic Commando"
    },
    {
        idezet: "A repülés ismert törvényei szerint nem lehetséges, hogy egy méh repülni tudjon. A szárnyai túl kicsik ahhoz, hogy a levegőbe emeljék a kövér kis testét. Persze a méh akkor is repül, mert a méhek fittyet hánynak arra, hogy az emberek szerint mi lehetetlen.",
        hivatkozas: "Mézengúz"
    },
    {
        idezet: "A legvégén nem az fog számítani, hogy mennyi év volt életedben, hanem hogy mennyi élet volt éveidben.",
        hivatkozas: ""
    },
    {
        idezet: "Egy igazi önzetlen jótett, mindig egy újabb jótettet szül.",
        hivatkozas: "Klaus – A karácsony titkos története"
    },
    {
        idezet: "Míg te arra kéred Istent, hogy mozdítsa el utadból a hegyet, ő a bátorságot akarja megadni neked ahhoz, hogy megmászd.",
        hivatkozas: ""
    },
]

function loading(){
    for(let i = 1; i < 25; i++){
        document.querySelector('.container').innerHTML += `
        <div class="box" onclick="order('${i}')">
            <h2>${i}. nap</h2>
            <div class="megjelen" id="${i}"  style="display: none;">
                <p>${list[i].idezet}</p>
                <p class="hivatkozas">${list[i].hivatkozas}</p>
            </div>
        </div>
        `
    }
}
