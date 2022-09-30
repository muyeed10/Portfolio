const softwares = document.querySelectorAll(".softwares");

for (let i = 0; i < softwares.length; i ++) {
    //code when mouse is hovering over the softwares box
    softwares[i].addEventListener("mouseover", (e) => {
        console.log(e.target);
        const softImage = e.target; //get the targetted image elem
        softImage.classList.toggle("darken");
        softImage.parentNode.classList.toggle("darkHighlight");
        if (softImage.nextElementSibling != null) {
            softImage.nextElementSibling.style.zIndex = "2"; //get the p elema and unhide the p elem in softwares elem
        }  
    });
}


for (let i = 0; i < softwares.length; i ++) {
    //code when mouse isnt hovering over the softwares box
softwares[i].addEventListener("mouseout", (e) => {
    console.log(e.target);
    const softImage = e.target;//get the targetted image elem
    softImage.classList.toggle("darken");
    softImage.parentNode.classList.toggle("darkHighlight");
    if (softImage.nextElementSibling != null) {
        softImage.nextElementSibling.style.zIndex = "1";//get the p elem and hide the p elem in softwares elem
    }
    });
}
