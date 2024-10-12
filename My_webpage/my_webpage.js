let allas = false;
const elozolap = "fooldal";
//weblap váltó
const oldalak = ["fooldal", "referencia", "ismerjmeg", "elerhetosegek", 
                    "kepszerkesztes", "videovagas", "weboldal", 
                    "programozas", "3d", "tulajdonsagaim", "hobik", 
                    "vegzetsegeim", "menu"]
function order(item){
    for(i = 0; i < oldalak.length; i++){
        if(item != oldalak[i]){
            document.getElementById(oldalak[i]).style.display = 'none' 
        }
        else{
            document.getElementById(oldalak[i]).style.display = 'block'
            //elozolap = oldalak[i];
            window.scrollTo({
                top: 0, // A lap tetejére ugrik
                //behavior: 'smooth' Simább görgetés smooth
            });
        } 
    }
}
/*
function menu(){
    if(allas == false){
        document.querySelector('.mobilmenu').style.transform = 'rotate(90deg)'; 
        allas = true;
    }
    else{
        document.querySelector('.mobilmenu').style.transform = 'rotate(0deg)'; 
        order(elozolap);
        allas = false;
    }
}
*/