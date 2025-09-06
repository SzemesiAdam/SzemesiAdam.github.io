const oldalak = ["fooldal", "ismerjmeg", "portfolio", "hobbik", "rolam", "vegzetsegeim", "elerhetoseg", "kepszerkesztes", "videovagas", "webfejlesztes", "programozas", "menu"];
const cimek = ["Főoldal", "Ismerj meg", "Portfolió", "Hobbik", "Rólam", "Végzetségeim", "Elérhetöség", "Képszerkesztés", "Videovágás", "Webfejlesztés", "Programozás", "Köszöntelek a weboldalamon!"];
const boritokep = ["Bonyhád_2025.09.01-4.jpg", "Soltvadkert_2025.07.13-19.jpg", "portfolio.jpg", "ismerjmeg1.jpg", "ismerjmeg2.jpg", "ismerjmeg3.jpg", "ismerjmeg4.jpg", "portfolio1.jpg", "portfolio2.jpg", "portfolio3.jpg", "portfolio4.jpg"];

document.querySelector("#cim").innerHTML = cimek[0];
document.querySelector("#koszones").innerHTML = cimek[cimek.length-1];
document.querySelector("header").style.backgroundImage = `url(k/${boritokep[0]})`;

function order(item){
    for(let i = 0; i < oldalak.length; i++){
        if(item != oldalak[i]){
            document.getElementById(oldalak[i]).style.display = "none";
        }
        else{
            document.querySelector("#cim").innerHTML = cimek[i];
            document.querySelector("header").style.backgroundImage = `url(k/${boritokep[i]})`;
            if(i == 0){
                document.querySelector("#koszones").innerHTML = cimek[cimek.length-1];
            }
            else{
                document.querySelector("#koszones").innerHTML = "";
            }
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
                    setAlcim(alcimek[elozolap]);
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