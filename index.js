var numofElement = document.querySelectorAll(".drum").length; //array length
for(var i = 0 ; i<numofElement; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
    this.style.color = "white";
    var buttonText = this.innerHTML;
    makeSound(buttonText)
    buttonAnimation(buttonText);
  });
  document.addEventListener("keydown",function(event){
    makeSound(event.key);
    console.log(event);
    buttonAnimation(event.key);
  });
  function makeSound(obj){
    switch(obj){
      case "w": var obj = new Audio("sounds/tom-4.mp3");
                obj.play();
                break;
      case "a": var obj = new Audio("sounds/tom-3.mp3");
                obj.play();
                break;
      case "s": var obj = new Audio("sounds/tom-2.mp3");
                obj.play();
                break;
      case "d": var obj = new Audio("sounds/tom-1.mp3");
                obj.play();
                break;
      case "j": var obj = new Audio("sounds/snare.mp3");
                obj.play();
                break;
      case "k": var obj = new Audio("sounds/kick-bass.mp3");
                obj.play();
                break;
      case "l": var obj = new Audio("sounds/tom-2.mp3");
                obj.play();
                break;
      default: console.log(buttonText);
    }
  }
  function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.toggle("pressed");
    setTimeout(function(){
      activeButton.classList.toggle("pressed");
    },100);
  }
}
// var song = new Audio("sounds/tom-1.mp3");
// song.play();
