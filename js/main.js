// Toggle between showing and hiding mobile navigation menu
let toggleNavStatus = false;

let toggleNav = function() {
  let getHeader = document.querySelector("header");
  let getBrand = document.querySelector(".header-brand");
  let getMenu = document.querySelector(".mobileNavMenu");
  let getBars = document.querySelectorAll(".bar");

  if (toggleNavStatus === false) {
    getHeader.style.backgroundColor = "#f1f1f1";
    getBrand.style.color = "#111";
    getMenu.style.display = "block";

    numBars = getBars.length;
    for (var i = 0; i < numBars; i++) {
      getBars[i].style.backgroundColor = "#111";
    }

    toggleNavStatus = true;
  }
  else if (toggleNavStatus === true) {
    getHeader.style.backgroundColor = null;
    getBrand.style.color = "#f1f1f1";
    getMenu.style.display = "none";

    numBars = getBars.length;
    for (var i = 0; i < numBars; i++) {
      getBars[i].style.backgroundColor = "#f1f1f1";
    }

    toggleNavStatus = false;
  }
}
