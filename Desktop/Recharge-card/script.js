function rand(){
   var randNum = Math.floor(Math.random()* 1000000000000000);
   var x = Math.floor(Math.random() * 10);
   console.log(x);
   randNum += x;
   console.log(randNum);
   document.getElementById("pin").value = randNum;
}
