function order(item){
    var oldalak = ["home", "foetelek", "gyorsetelek", "deszertek", 
                "csilisbab", "rantotta", "taco", "bekonoscsavart", 
                "palacsinta", "sportszelet"]
    var i;
    for(i = 0; i < oldalak.length; i++){
        if(item === oldalak[i]){
            document.getElementById(item).style.display = 'block'
        }
        if(item != oldalak[i]){
            document.getElementById(oldalak[i]).style.display = 'none' 
        } 
    }
}