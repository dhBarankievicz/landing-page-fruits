const icone = document.getElementById("menuMobileIcon");
const menu = document.getElementById("menuMobile");

icone.addEventListener("click", () => {

  if (menu.style.opacity === "0" || menu.style.opacity === "") {
    menu.style.opacity = "1";
    menu.style.pointerEvents = "all"; 
  } else {
    menu.style.opacity = "0";
    menu.style.pointerEvents = "none";
  }
});
