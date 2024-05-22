var fooldal = document.getElementById('h')
var nyar = document.getElementById('s')
var prog = document.getElementById('p')
var ese = document.getElementById('e')

function home(){
    fooldal.style.display = 'block'
    nyar.style.display = 'none'
    prog.style.display = 'none'
    ese.style.display = 'none'
}
function summer(){
    fooldal.style.display = 'none'
    nyar.style.display = 'block'
    prog.style.display = 'none'
    ese.style.display = 'none'
}
function pro(){
    fooldal.style.display = 'none'
    nyar.style.display = 'none'
    prog.style.display = 'block'
    ese.style.display = 'none'
}
function es(){
    fooldal.style.display = 'none'
    nyar.style.display = 'none'
    prog.style.display = 'none'
    ese.style.display = 'block'
}

let n = document.getElementById('nev');
let a = document.getElementById('age');

function tel(){
    document.getElementById("data").innerHTML = n + " - " + a
    document.getElementById("evszak").innerHTML = "A tél a kedvenc évszakod!"
}
function tavasz(){
    document.getElementById("data").innerHTML = nev + " - " + age
    document.getElementById("evszak").innerHTML = "A tavasz a kedvenc évszakod!"
}
function ny(){
    document.getElementById("data").innerHTML = nev + " - " + age
    document.getElementById("evszak").innerHTML = "A nyár a kedvenc évszakod!"
}
function osz(){
    document.getElementById("data").innerHTML = nev + " - " + age
    document.getElementById("evszak").innerHTML = "A ősz a kedvenc évszakod!"
}