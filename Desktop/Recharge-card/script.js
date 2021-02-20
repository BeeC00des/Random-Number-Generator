function rand(){
   var randNum = Math.floor(Math.random()* 1000000000);
   document.getElementById("pin").value = randNum;
}
