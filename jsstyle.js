var navList = document.querySelector(".homeNavbar").querySelector(".navList");
var menuBar = document.querySelector(".homeNavbar").querySelector(".bar");

var readmore = document.querySelector('.readmore');
readmore.addEventListener("click", () => {
    let aboutmepar = document.querySelectorAll('.aboutmepar');

    for (let i = 0; i < aboutmepar.length; i++) {
        aboutmepar[i].classList.toggle('aboutmeactive');
    }
    
    if (aboutmepar[0].classList.contains("aboutmeactive")) {
        readmore.innerHTML = "show less";
    }
    else {
        readmore.innerHTML = "show more";
    }
});


menuBar.addEventListener("click", () => {
    if (menuBar.children[0].classList.value === "fa fa-times fa-2x") {
        menuBar.children[0].classList.value = "list large icon barstyle black";
    } 
    else {
        menuBar.children[0].classList.value = "fa fa-times fa-2x";
    }
    console.log( menuBar.children[0].classList);
    navList.classList.toggle("active");
});


window.addEventListener("scroll", loadLoader); //scroll, load, onclick

function loadLoader() {
    var navBar = document.querySelector(".homeNavbar");
    var homenavitem = document.querySelector(".homeNavbar").querySelector(".navList").querySelectorAll(".homeNavItem");
    var bar = document.querySelector(".homeNavbar").querySelector(".bar").querySelector(".barstyle");

    navBar.classList.toggle("whiten", window.scrollY > 0);
    homenavitem.forEach(black);
    bar.classList.toggle("black", window.scrollY > 0);
    //gives more smooth transition than (if (window.scrollY) > 0)
    //first code would execute once based on the statement, second code would execute multiple times everytime scrolled
}

function black(item) {
    item.classList.toggle("black", window.scrollY > 0);
}

// for (var a = 0; a < myServices.length; a++) {
//     myServices[a].addEventListener("click", function () {zChanger(this)});
//     //this is how you add click function for an element consisting of same class name/data name    
// }

// function zChanger(item) {
//     var elem = getComputedStyle(item); //to get elements css values
//     let itemTop = elem.top;
//     let itemLeft = elem.left;
//     let zz = elem.zIndex;

//     var elem2 = getComputedStyle(myServices[0]);

//     let FirstitemTop = elem2.top;
//     let FirstitemLeft = elem2.left;
//     let Firstzz = elem2.zIndex;

//     item.style.top = FirstitemTop;
//     item.style.zIndex = Firstzz;
//     item.style.left = FirstitemLeft;

//     let arr = Array.from(myServices);

//     myServices[0].style.top = itemTop;
//     myServices[0].style.left = itemLeft;
//     myServices[0].style.zIndex = zz;

//     let index = arr.indexOf(item);
//     let firstIndex = arr[0];

//     arr[0] = arr[index];
//     arr[index] = firstIndex;
//     myServices = arr;

//     console.log(myServices);
// }
