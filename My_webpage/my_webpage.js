//weblap váltó
const oldalak = ["fooldal", "referencia", "ismerjmeg", "elerhetosegek", 
                    "kepszerkesztes", "videovagas", "weboldal", 
                    "programozas", "3d", "tulajdonsagaim", "hobik", 
                    "vegzetsegeim"]
function order(item){
    for(i = 0; i < oldalak.length; i++){
        if(item != oldalak[i]){
            document.getElementById(oldalak[i]).style.display = 'none' 
        }
        else{
            document.getElementById(oldalak[i]).style.display = 'block'

            window.scrollTo({
                top: 0, // A lap tetejére ugrik
                behavior: 'smooth' // Simább görgetés smooth
            });
        } 
    }
}
//mobil menu
document.querySelector(".menu-icon").onclick = function(){
    document.querySelector("nav").classList.add("open");
}

document.querySelector(".close-icon").onclick = function(){
    document.querySelector("nav").classList.remove("open");
}