"use strict"
var sideMenu = document.getElementById("side-menu")
var anchors = sideMenu.getElementsByTagName("a") // pasirenki ahrefus is sidemenu navbar
var burger = document.getElementById("burger") // pasirenki icon 

burger.addEventListener("click",function(){
    for(var x of anchors){
        x.classList.toggle("active")
    }

    sideMenu.classList.toggle("translate")
})