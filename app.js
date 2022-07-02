let mega = document.getElementById("megaContainer");
let con = document.getElementById("container");
let miniCon = document.getElementById("miniContainer");
let icon = document.getElementsByClassName("fa-bars");
let icon2 = document.getElementsByClassName("fa-xmark");
let navigation = document.getElementById("navbar");

/* Below is for the icons in the Body */
let home = document.getElementById("home");
//let home = document.getElementsByClassName("fa-house");
let about = document.getElementById("about");
let contact = document.getElementById("contact");

icon[0].addEventListener("click", rotate);
icon2[0].addEventListener("click", rotateBack);
//miniCon.addEventListener("click", rotateBack);
console.log(home[0]);
function rotate() {
  navigation.style.animation = "rotateIcon 1.25s";
  navigation.style.animationFillMode = "forwards";
  mega.style.animation = "rotate 1s";
  mega.style.animationFillMode = "forwards";
  setTimeout(function () {
    home.style.animation = "firstPush 0.25s";
    home.style.animationFillMode = "forwards";
    about.style.animation = "secondPush 0.25s";
    about.style.animationFillMode = "forwards";
    contact.style.animation = "thirdPush 0.25s";
    contact.style.animationFillMode = "forwards";
  }, 500);
}

function rotateBack() {
  navigation.style.animation = "rotateIconBack 1.25s";
  mega.style.animation = "rotateBack 1s";

  home.style.animation = "firstPushBack 1.0s";
  about.style.animation = "secondPushBack 1.0s";
  contact.style.animation = "thirdPushBack 1.0s";
}
