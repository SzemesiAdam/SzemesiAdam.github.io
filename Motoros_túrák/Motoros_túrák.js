let allas = false;
let elozolap = "fooldal";
let menukat = false;
//weblap váltó
const oldalak = ["fooldal", "turak", "tervek", "motorok", "menu"]
function order(item){
    if(allas == false){
        document.querySelector('.mobilmenu').style.transform = 'rotate(90deg)'; 
        allas = true;
    }
    else{
        document.querySelector('.mobilmenu').style.transform = 'rotate(0deg)'; 
        allas = false;
    }
    for(i = 0; i < oldalak.length; i++){
        if(item != oldalak[i]){
            document.getElementById(oldalak[i]).style.display = 'none' 
        }
        else{
            document.getElementById(oldalak[i]).style.display = 'block'
            if(item != "menu"){
                elozolap = oldalak[i];
                menukat = false;
            }
            else if(menukat == true){
                document.getElementById(elozolap).style.display = 'block'
                document.getElementById("menu").style.display = 'none'
                menukat = false;
            }
            else{
                    menukat = true;
            }
            window.scrollTo({
                top: 0, // A lap tetejére ugrik
                //behavior: 'smooth' Simább görgetés smooth
            });
        } 
    }
}

// A TXT fájl beolvasása és tartalom megjelenítése
fetch('Tervek.txt')
    .then(
        data => {
            const stringData = JSON.stringify(data);
            stringData.split("\n");
            const content = {};

            for(let i = 0; i < content.length; i++){
                const lines1 = content.split(';');
                const sor = {};
                for(let j = 0; j < sor.length; j++){
                    document.getElementById('title').textContent = sor[0];
                    document.getElementById('paragraph1').textContent = sor[1];
                    document.getElementById('paragraph2').textContent = sor[2];
                }
                for(let k = 0; k <= 4; k++){
                    const listId = `list${i}`;
                    const listElement = document.getElementById(listId);
                    const items = content[`Lista${i}`]?.split(',') || [];
                    items.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.trim();
                    listElement.appendChild(li);
                })
            }
        }
    }
    )

    fetch('Tervek.txt')
    .then(response => response.text()) // Szöveggé alakítja az eredményt
    .then(data => {
        const lines = data.split("\n"); // Sorokra bontja
        
    });
