let menu= document.querySelector(".menuImg");
let menutext= document.querySelector(".menuText");
let close = document.querySelector(".x");
var x = window.matchMedia("(min-width: 798px)");

 menu.addEventListener ("click", function(){
menutext.classList.replace("menuText","menuTextmobile");
    
});
close.addEventListener ("click", function(){
    menutext.classList.replace("menuTextmobile","menuText");
});

document.addEventListener ("click", function(event){
    if (menutext !=event.target && menu != event.target ) {
        menutext.classList.replace("menuTextmobile","menuText");
      }   
});

window.addEventListener("resize", function(){
    if (x.matches) {
        menutext.classList.replace("menuTextmobile","menuText");   
    }
});   
