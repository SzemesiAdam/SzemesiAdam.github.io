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
        } 
    }
}
document.getElementById("jslink").style.visibility = "hidden";
function secret(){
    let jelszo = document.getElementById("password").value;
    if(jelszo == '18+'){
        document.getElementById("jslink").style.visibility = "visible";
        document.getElementById("kerdes").style.visibility = "hidden";
    }
}