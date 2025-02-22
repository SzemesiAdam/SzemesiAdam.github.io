let allas = false;
let elozolap = "fooldal";
let menukat = false;
//weblap váltó
const oldalak = ["fooldal", "referencia", "ismerjmeg", "elerhetosegek", 
                    "kepszerkesztes", "videovagas", "weboldal", 
                    "programozas", "3d", "tulajdonsagaim", "hobik", 
                    "vegzetsegeim", "menu"]
function order(item){
    if(allas == false){
        document.querySelector('.mobilmenu').style.transform = 'rotate(90deg)'; 
        allas = true;
    }
    else{
        document.querySelector('.mobilmenu').style.transform = 'rotate(0deg)'; 
        allas = false;
    }
    for(i = 0; i < oldalak.length; i++){
        if(item != oldalak[i]){
            document.getElementById(oldalak[i]).style.display = 'none' 
        }
        else{
            document.getElementById(oldalak[i]).style.display = 'block'
            if(item != "menu"){
                elozolap = oldalak[i];
                menukat = false;
            }
            else if(menukat == true){
                document.getElementById(elozolap).style.display = 'block'
                document.getElementById("menu").style.display = 'none'
                menukat = false;
            }
            else{
                    menukat = true;
            }
            window.scrollTo({
                top: 0, // A lap tetejére ugrik
                //behavior: 'smooth' Simább görgetés smooth
            });
        } 
    }
}