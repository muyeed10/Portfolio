var menuBar = document.querySelector(".navBar").querySelector(".bar");
var navList = document.querySelector(".navBar").querySelector(".navList");


menuBar.addEventListener("click", () => {
    navList.classList.toggle("active");
});

