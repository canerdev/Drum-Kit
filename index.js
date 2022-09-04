const buttons = document.querySelectorAll("button");

// buttons.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     let buttonInnerHTML = tihs.innerHTML;
//     makeSound(buttonInnerHTML);
//   });
// });

// YOU CAN'T TREAT NODES LIKE ARRAYS SO THE CODE ABOVE WON'T WORK

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    buttons[i].classList.add("pressed");
    setTimeout(() => {
      buttons[i].classList.remove("pressed");
    }, 200);
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  let activeBtn = document.querySelector("." + event.key);
  activeBtn.classList.add("pressed");
  setTimeout(() => {
    activeBtn.classList.remove("pressed");
  }, 200);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(key);
      break;
  }
}
