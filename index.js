let x=0;
document.getElementById(`dec`).onclick=function(){
    x=x-1;
    document.getElementById("count").textContent=x;
    document.getElementById("count").style.color="red";
}
document.getElementById(`res`).onclick=function(){
    x=0;
    document.getElementById("count").textContent=x;
    document.getElementById("count").style.color="white";
}
document.getElementById(`inc`).onclick=function(){
    x=x+1;
    document.getElementById("count").textContent=x;
    document.getElementById("count").style.color="green";
}