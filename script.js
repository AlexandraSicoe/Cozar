console.log("meow");
var container = document.getElementById("background-container");
console.log(container.classList);
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
var backgroundNumber = getRandomInt(1, 5);
console.log(backgroundNumber);
container.style.backgroundImage = "url(./bg" + backgroundNumber + ".jpg)";

var title = document.getElementById("title");
var subtitle = document.getElementById("subtitle");
switch (backgroundNumber) {
  case 1:
    title.innerText = "NEW";
    subtitle.innerText = "BRANDING PROJECT — LA CAJA DE CRISTAL";
    break;
  case 2:
    title.innerText = "NUEVO PROYECTO";
    subtitle.innerText = "BRANDING — MAV";
    break;
  case 3:
    title.innerText = "NUEVO PROYECTO";
    title.style.color = "white";

    subtitle.innerText = "IDENTIDAD - LÓPEZ VALDEZ ABOGADOS";
    subtitle.style.color = "white";

    break;
  case 4:
    title.innerText = "NUEVO PROYECTO";
    title.style.color = "white";

    subtitle.innerText = "IDENTIDAD — PERMAT BEAUTY CENTER";
    subtitle.style.color = "white";

    break;
  default:
    break;
}
