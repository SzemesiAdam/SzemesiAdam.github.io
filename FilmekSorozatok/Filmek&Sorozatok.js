const pages = ["home", "menu-bar", "film", "sorozatok", "jatekok"]
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

// Az adatok beolvasása a txt fájlból
fetch('Filmek.txt')
.then(response => response.text())
.then(data => {
    const sorok = data.split('\n'); // Sorokra bontjuk a fájlt
    const tablaBody = document.querySelector('#filmektabla tbody');

    sorok.forEach(sor => {
        const oszlopok = sor.split(';'); // Oszlopokra bontás pontosvessző alapján
        const sorElem = document.createElement('tr');

        oszlopok.forEach(oszlop => {
            const cellaElem = document.createElement('td');
            cellaElem.textContent = oszlop.trim(); // A cella tartalma
            sorElem.appendChild(cellaElem); // Hozzáadjuk a cellát a sorhoz
        });

        tablaBody.appendChild(sorElem); // Hozzáadjuk a sort a táblázathoz
    });
})
.catch(error => {
    console.error('Hiba történt a fájl beolvasása során:', error);
});

// Az adatok beolvasása a txt fájlból
fetch('Sorozatok.txt')
.then(response => response.text())
.then(data => {
    const sorok = data.split('\n'); // Sorokra bontjuk a fájlt
    const tablaBody = document.querySelector('#sorozatoktabla tbody');

    sorok.forEach(sor => {
        const oszlopok = sor.split(';'); // Oszlopokra bontás pontosvessző alapján
        const sorElem = document.createElement('tr');

        oszlopok.forEach(oszlop => {
            const cellaElem = document.createElement('td');
            cellaElem.textContent = oszlop.trim(); // A cella tartalma
            sorElem.appendChild(cellaElem); // Hozzáadjuk a cellát a sorhoz
        });

        tablaBody.appendChild(sorElem); // Hozzáadjuk a sort a táblázathoz
    });
})
.catch(error => {
    console.error('Hiba történt a fájl beolvasása során:', error);
});

// Az adatok beolvasása a txt fájlból
fetch('Játékok.txt')
.then(response => response.text())
.then(data => {
    const sorok = data.split('\n'); // Sorokra bontjuk a fájlt
    const tablaBody = document.querySelector('#jatekoktabla tbody');

    sorok.forEach(sor => {
        const oszlopok = sor.split(';'); // Oszlopokra bontás pontosvessző alapján
        const sorElem = document.createElement('tr');

        oszlopok.forEach(oszlop => {
            const cellaElem = document.createElement('td');
            cellaElem.textContent = oszlop.trim(); // A cella tartalma
            sorElem.appendChild(cellaElem); // Hozzáadjuk a cellát a sorhoz
        });

        tablaBody.appendChild(sorElem); // Hozzáadjuk a sort a táblázathoz
    });
})
.catch(error => {
    console.error('Hiba történt a fájl beolvasása során:', error);
});