var fooldal = document.getElementById('h')
var nyar = document.getElementById('s')
var prog = document.getElementById('p')
var ese = document.getElementById('e')
var hiv = document.getElementById('hi')

function home(){
    fooldal.style.display = 'block'
    nyar.style.display = 'none'
    prog.style.display = 'none'
    ese.style.display = 'none'
    hiv.style.display = 'none'
}
function summer(){
    fooldal.style.display = 'none'
    nyar.style.display = 'block'
    prog.style.display = 'none'
    ese.style.display = 'none'
    hiv.style.display = 'none'
}
function pro(){
    fooldal.style.display = 'none'
    nyar.style.display = 'none'
    prog.style.display = 'block'
    ese.style.display = 'none'
    hiv.style.display = 'none'
}
function es(){
    fooldal.style.display = 'none'
    nyar.style.display = 'none'
    prog.style.display = 'none'
    ese.style.display = 'block'
    hiv.style.display = 'none'
}
function link(){
    fooldal.style.display = 'none'
    nyar.style.display = 'none'
    prog.style.display = 'none'
    ese.style.display = 'none'
    hiv.style.display = 'block'
}

function tel(){
    document.getElementById("data").value = document.getElementById("nev").value + " - " + document.getElementById("age").value;
    document.getElementById("evszak").value = "A tél a kedvenc évszakod!";
}
function tavasz(){
    document.getElementById("data").value = document.getElementById("nev").value + " - " + document.getElementById("age").value;
    document.getElementById("evszak").value = "A tavasz a kedvenc évszakod!";
}
function ny(){
    document.getElementById("data").value = document.getElementById("nev").value + " - " + document.getElementById("age").value;
    document.getElementById("evszak").value = "A nyár a kedvenc évszakod!";
}
function osz(){
    document.getElementById("data").value = document.getElementById("nev").value + " - " + document.getElementById("age").value;
    document.getElementById("evszak").value = "A ősz a kedvenc évszakod!";
}