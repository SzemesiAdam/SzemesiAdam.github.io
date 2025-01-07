
//weblap váltó
const oldalak = ["fooldal", "konyvek", "jatek", "menu"]
function order(item){
    for(i = 0; i < oldalak.length; i++){
        if(item != oldalak[i]){
            document.getElementById(oldalak[i]).style.display = "none"; 
        }
        else{
            document.getElementById(oldalak[i]).style.display = "block";
            window.scrollTo({
                top: 0, // A lap tetejére ugrik
                //behavior: 'smooth' Simább görgetés smooth
            });
        } 
    }
}