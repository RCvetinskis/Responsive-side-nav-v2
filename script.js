"use strict"
var sideMenu = document.getElementById("side-menu")
var anchors = sideMenu.getElementsByTagName("a") // pasirenki ahrefus is sidemenu navbar
var burger = document.getElementById("burger") // pasirenki icon 

burger.addEventListener("click",function(){
    sideMenu.classList.toggle("translate")
    this.classList.toggle("rotate")
})
window.addEventListener("resize", function(){ // resize eventlistener veikia kaip media query
    if(this.window.innerWidth > 760) // priskiari jog funkcija veiktu kai width yra  daugiau760px 
    sideMenu.classList.remove("translate")
    burger.classList.remove("rotate")


})