function checkWord() {
    const inputWord = document.getElementById('inputWord').value;

    fetch('pro.txt')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            const firstLine = lines[0].trim();
            const secondLine = lines[1].trim();

            if (inputWord === firstLine) {
                document.getElementById('result').textContent = `Helyes! A második sor: ${secondLine}`;
            } else {
                document.getElementById('result').textContent = 'Helytelen szó!';
            }
        })
        .catch(error => {
            console.error('Hiba történt a fájl beolvasásakor:', error);
        });
}