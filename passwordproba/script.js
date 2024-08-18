function checkWord() {
    const inputWord = document.getElementById('inputWord').value;

    fetch('pro.txt')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            const firstLine = lines[0].trim();
            const secondLine = lines[1].trim();

            if (inputWord === firstLine) {
                order('links')
                const linkElement = document.getElementById('dynamicLink');
                linkElement.href = secondLine;
            }
        })
        .catch(error => {
            console.error('Hiba történt a fájl beolvasásakor:', error);
        });
}
const oldalak = ["open", "links"]
function order(item){
    for(i = 0; i < oldalak.length; i++){
        if(item != oldalak[i]){
            document.getElementById(oldalak[i]).style.display = 'none' 
        }
        else{
            document.getElementById(oldalak[i]).style.display = 'block'
        } 
    }
}