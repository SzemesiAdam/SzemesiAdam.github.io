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
function secret(){
    let jelszo = document.getElementById("password").value;
    if(jelszo == '18+'){
        document.getElementById("jslink").style.display = "block";
        document.getElementById("kerdes").style.visibility = "hidden";
    }
}

document.querySelector(".menu-icon").onclick = function(){
    document.querySelector("nav").classList.add("open");
}

document.querySelector(".close-icon").onclick = function(){
    document.querySelector("nav").classList.remove("open");
}