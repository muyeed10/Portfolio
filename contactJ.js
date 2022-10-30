const contactForm = document.querySelector(".contactForm");
const submitForm = document.querySelector(".submitContactForm");
var menuBar = document.querySelector(".navBar").querySelector(".bar");
var navList = document.querySelector(".navBar").querySelector(".navList");


alert("Contact form is still under development so it will not work!");

menuBar.addEventListener("click", () => {
    navList.classList.toggle("active");
});

submitForm.addEventListener("click", (e)=> {
    e.preventDefault();

    //form text rules:
});
