// Advent első napja idén (az első adventi vasárnap)
const adventStart = new Date('2024-12-01');
const today = new Date();
const adventInfo = document.getElementById('adventInfo');
// Ellenőrzés, hogy még advent előtt vagyunk-e
if (today < adventStart) {
    const daysUntilAdvent = Math.ceil((adventStart - today) / (1000 * 60 * 60 * 24) + 1);
    adventInfo.innerHTML = `Adventig még <span style="color:yellow">` + daysUntilAdvent + `</span> nap van.`;
} 
else {
    document.getElementById("napok").style.display = 'block'
    const dayOfAdvent = Math.ceil((today - adventStart) / (1000 * 60 * 60 * 24));

    for (let i = dayOfAdvent; i >= 1; i--){
        document.getElementById(i).style.display = 'block';
    }
    // Advent napjainak számlálása
    if(dayOfAdvent == 6){
        adventInfo.textContent = `Boldog Mikulást!`;
        document.getElementById(dayOfAdvent + "title").style.color = "yellow"
    }
    else if(dayOfAdvent == 24){
        adventInfo.textContent = `Boldog karácsonyt!`;
        document.getElementById(dayOfAdvent + "title").style.color = "yellow"
    }
    else{
        adventInfo.textContent = `Advent ${dayOfAdvent}. napja van.`;
        document.getElementById(dayOfAdvent + "title").style.color = "yellow"
    }
}