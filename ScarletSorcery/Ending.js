const texts = [
"Impossible... How could I be... defeated?",
"You did it! We make quite the team, don't we? I couldn't imagine facing these challenges with anyone else by my side.",
"blank",
"Yeah, mate! You did it! You saved Hogwarts from those bloomin' Dementors! I knew there something special about you.",
"blank",
"Mate, I've got to hand it to you, you were absolutely brilliant back there. You've got the heart of a true Gryffindor.",
"blank",
"My dear friend, you have accomplished something truly remarkable. In the face of adversity, you have shown not only courage but also compassion and wisdom beyond your years.",
"blank",
"Hey, listen, I know we just went through a pretty intense ordeal...",
"But I was thinking, maybe you'd like to join me for a game of Quidditch sometime?"];
const images = [
"voldemort.png", 
"hermione.png", 
"hermione.png", 
"ron.png",
"ron.png",
"harry.png",
"harry.png", 
"dumbledore.png",
"dumbledore.png", 
"harry.png",
"harry.png"];
var charSpeed = 30;
var iChar = 0;
var iArray = 0;
var current = "";
var image = document.getElementById("character");
var paragraph = document.getElementById("convo");

function typewriter(){
    if(iArray < texts.length){
        current = texts[iArray];
        image.src = images[iArray];
        type();
        iArray++;
        iChar = 0;
        setTimeout(typewriter, 50*current.length);
        paragraph.innerHTML = "";
   }
}

function type(){
   if(iChar < current.length){
      paragraph.insertAdjacentHTML("beforeend", current.charAt(iChar));
      iChar++;
      setTimeout(type, charSpeed);
   }
}

window.onload = function(){
    setTimeout(typewriter, 2000);
}