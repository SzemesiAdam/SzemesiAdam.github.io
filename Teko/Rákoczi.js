let allas = false;
let elozolap = "fooldal";
let menukat = false;
//weblap váltó
const oldalak = ["fooldal", "reg", "bekuld"]
function order(item){
    for(i = 0; i < oldalak.length; i++){
        if(item != oldalak[i]){
            document.getElementById(oldalak[i]).style.display = 'none' 
        }
        else{
            document.getElementById(oldalak[i]).style.display = 'block'
            window.scrollTo({
                top: 0, // A lap tetejére ugrik
                //behavior: 'smooth' Simább görgetés smooth
            });
        } 
    }
}
function bekuld(){
    let nev = document.getElementById('nev').value;
    let email = document.getElementById('email').value;
    let tel = document.getElementById('tel').value;
    let cs = document.querySelector('input[name="a"]:checked');
    // document.getElementById('valasz').innerHTML = "Beküldés sikeres " + nev;
    order("bekuld")
    document.getElementById('nevv').innerHTML = nev;
    document.getElementById('emailv').innerHTML = email;
    document.getElementById('telv').innerHTML = tel;
    document.getElementById('csv').innerHTML = cs.value;
}