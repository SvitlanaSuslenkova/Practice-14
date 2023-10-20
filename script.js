let menu= document.querySelector(".menuImg");
let menutext= document.querySelector(".menuText");
let close = document.querySelector(".x");
let grey= document.querySelector(".grey");

var x = window.matchMedia("(min-width: 798px)");

 menu.addEventListener ("click", function(){
menutext.classList.replace("menuText","menuTextmobile");
grey.style.display="block";
    
});
close.addEventListener ("click", function(){
    menutext.classList.replace("menuTextmobile","menuText");
    grey.style.display="none";
});

document.addEventListener ("click", function(event){
    if (menutext !=event.target && menu != event.target ) {
        menutext.classList.replace("menuTextmobile","menuText");
        grey.style.display="none";
      }   
});

window.addEventListener("resize", function(){
    if (x.matches) {
        menutext.classList.replace("menuTextmobile","menuText");  
        grey.style.display="none"; 
    }
});   
