const pages = ["home", "menu-bar", "film", "sorozatok", "jatekok", "hozaad"]
function order(item){
    for(i = 0; i < pages.length; i++){
        if(item != pages[i]){
            document.getElementById(pages[i]).style.display = 'none'
        }
        else{
            document.getElementById(pages[i]).style.display = 'block'
            window.scrollTo({
                top: 0, // A lap tetejére ugrik
                behavior: 'smooth' // Simább görgetés smooth
            });
        }
    }
}

//filmek beolvasása

function filmek(){
    // A fájl automatikus betöltése a fetch segítségével
    fetch('Filmek.xlsx')
        .then(response => response.arrayBuffer())
        .then(data => {
            let workbook = XLSX.read(data, { type: 'array' });

            // Az első munkalap kiválasztása
            let firstSheet = workbook.Sheets[workbook.SheetNames[0]];

            // Az Excel adatok JSON formátumba alakítása
            let filmData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

            // Megjelenítés a HTML táblázatban
            let tableBody = document.querySelector('#filmTable tbody');

            tableBody.innerHTML = "";

            // Sorok beillesztése
            filmData.slice(1).forEach(function(row) {
                let rowElement = document.createElement('tr');
                row.forEach(function(cell) {
                    let td = document.createElement('td');
                    td.textContent = cell;
                    rowElement.appendChild(td);
                });
                tableBody.appendChild(rowElement);
            });
        })
        .catch(error => {
            console.error('Hiba történt a fájl beolvasása közben:', error);
        });
}

//sorozatok beolvasása

function sorozatok(){
    // Sorozatok Excel fájl betöltése
    fetch('Sorozatok.xlsx')
        .then(response => response.arrayBuffer())
        .then(data => {
            let workbook = XLSX.read(data, { type: 'array' });

            // Az első munkalap kiválasztása
            let firstSheet = workbook.Sheets[workbook.SheetNames[0]];

            // Az Excel adatok JSON formátumba alakítása
            let seriesData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

            // Megjelenítés a HTML táblázatban
            let tableBody = document.querySelector('#seriesTable tbody');

            tableBody.innerHTML = "";

            // Sorok beillesztése
            seriesData.slice(1).forEach(function(row) {
                let rowElement = document.createElement('tr');
                row.forEach(function(cell) {
                    let td = document.createElement('td');
                    td.textContent = cell;
                    rowElement.appendChild(td);
                });
                tableBody.appendChild(rowElement);
            });
    })
    .catch(error => {
        console.error('Hiba történt a fájl beolvasása közben:', error);
    });
}

//jatekok beolvasasa

function jatekok(){
    // Játékok Excel fájl betöltése
    fetch('Játékok.xlsx')
        .then(response => response.arrayBuffer())
        .then(data => {
            let workbook = XLSX.read(data, { type: 'array' });

            // Az első munkalap kiválasztása
            let firstSheet = workbook.Sheets[workbook.SheetNames[0]];

            // Az Excel adatok JSON formátumba alakítása
            let gameData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

            // Megjelenítés a HTML táblázatban
            let tableBody = document.querySelector('#gameTable tbody');

            tableBody.innerHTML = "";

            // Sorok beillesztése
            gameData.slice(1).forEach(function(row) {
                let rowElement = document.createElement('tr');
                row.forEach(function(cell) {
                    let td = document.createElement('td');
                    td.textContent = cell;
                    rowElement.appendChild(td);
                });
                tableBody.appendChild(rowElement);
            });
        })
        .catch(error => {
            console.error('Hiba történt a fájl beolvasása közben:', error);
        });
}