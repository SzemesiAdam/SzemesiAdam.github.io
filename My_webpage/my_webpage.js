let elozolap = 0;
let menuallas = false;
  
  const oldalak = ["fooldal", "ismerjmeg", "referencia", "menu"]

  function order(item){
    for(let i = 0; i < oldalak.length; i++){
        if(item != oldalak[i]){
            document.getElementById(oldalak[i]).style.display = "none";
        }
        else{
            document.getElementById(oldalak[i]).style.display = "block";
            if(window.innerWidth <= 700){
                if(item != "menu"){elozolap = i}
                if(menuallas == false){
                    menuallas = true; 
                    document.querySelector('.mobilmenu').style.transform = 'rotate(90deg)';
                    document.body.style.overflow = "hidden";
                }
                else{
                    document.getElementById("menu").style.display = "none";
                    document.getElementById(oldalak[elozolap]).style.display = "block";
                    menuallas = false;
                    document.querySelector('.mobilmenu').style.transform = 'rotate(0deg)';
                    document.body.style.overflow = "visible";
                }
            }
            window.scrollTo({
                top: 0, // A lap tetejére ugrik
                // behavior: 'smooth' Simább görgetés smooth
            });
        }
    }
  }