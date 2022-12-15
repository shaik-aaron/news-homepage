function sideMenu() {
  var overlay = document.getElementById("overlay");
  var sideMenu = document.getElementById("sidemenu");
  var hamburger = document.getElementById("hamburger");
  var close = document.getElementById("close");
  var sideMenu = document.getElementById("sidemenu");
  var body = document.getElementsByTagName("BODY")[0];

  body.style.overflow = "hidden";

  hamburger.style.display = "none";

  overlay.style.display = "flex";
  overlay.style.justifyContent = "flex-end";
  overlay.style.position = "absolute";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

  sideMenu.style.display = "block";
  sideMenu.style.position = "relative";
  sideMenu.style.right = "0";
  sideMenu.style.height = "100%";
  sideMenu.style.width = "70%";
  sideMenu.style.backgroundColor = "white";
  sideMenu.style.color = "black";

  close.style.position = "absolute";
  close.style.right = "6%";
  close.style.top = "36px";
  close.style.fontSize = "36px";

  sideMenu.style.paddingTop = "136px";
}

function closeSideMenu() {
  var overlay = document.getElementById("overlay");
  var sideMenu = document.getElementById("sidemenu");
  var hamburger = document.getElementById("hamburger");
  var body = document.getElementsByTagName("BODY")[0];

  overlay.style.display = "none";
  sideMenu.style.display = "none";
  hamburger.style.display = "block";
  body.style.overflow = "visible";
}
