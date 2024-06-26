const texts = [
"Welcome to Scarlet Sorcery!",
"In this thrilling adventure, you will find yourself transported from the familiar halls of Rutgers into the enchanting world of Hogwarts.", 
"As you navigate through this magical realm, you must complete a series of minigames to escape from the evil clutches of he who must not be named.", 
"blank",
"Embark on this extraordinary journey and prove yourself as you strive to overcome obstacles and unravel mysteries in the face of darkness.", 
"blank",
"The fate of Hogwarts rests in your hands!"];
var charSpeed = 30;
var iChar = 0;
var iArray = 0;
var current = "";
var typedLength = 0;
var currline = 0;

function typewriter(){
   if(iArray < texts.length){
      current = texts[iArray];
      type();
      iArray++;
      iChar = 0;
      typedLength = 0;
      currline = 0;
      setTimeout(typewriter, 50*current.length);
      document.getElementById("story0").innerHTML = "";
      document.getElementById("story1").innerHTML = "";
   }
   else{
      setTimeout(callHTML, 3000);
   }
}

function type(){
   if(iChar < current.length){
      if(typedLength >= 90 && current.charAt(iChar) == ' '){
         currline = (currline+1)%2;
         typedLength = 0;
      }
      document.getElementById("story"+currline.toString()).insertAdjacentHTML("beforeend", current.charAt(iChar));
      iChar++;
      typedLength++;
      setTimeout(type, charSpeed);
   }
}

function callHTML(){
   location.replace("loading.html");
}