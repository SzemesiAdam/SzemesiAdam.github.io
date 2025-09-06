
const today = new Date();
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