let load=document.getElementsByClassName("loading")[0];
let Up=document.getElementsByClassName("up")[0];
let date=document.getElementById("date");

window.onload=function(){
    load.classList.add("active");
    setTimeout(()=>{
        load.classList.remove("active");
    },3000);
}


window.onscroll=function(){
    if(window.scrollY >= 700){
        Up.classList.add("active");
        
    }
    else{
        Up.classList.remove("active");
    }
}

let day=new Date();
date.innerHTML=day.getFullYear();