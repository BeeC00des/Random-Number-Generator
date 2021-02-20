function rand(){
   var randNum = Math.floor(Math.random()* 1000000000000000 *10 );
   document.getElementById("pin").value = randNum;
}
