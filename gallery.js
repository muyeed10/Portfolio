const pics = document.querySelector(".gallerybody").querySelectorAll(".galPic"); //array of the pics
const prev = document.querySelector(".gallerybody").querySelector(".galPrev");
const next = document.querySelector(".gallerybody").querySelector(".galNext");

var index = 0;

next.addEventListener("click", () => {
    if (index < (pics.length - 1)) {
        index += 1;
        pics[index -1].classList.toggle("galActive");
        pics[index].classList.toggle("galActive");
    }
    else {
        index = 0;
        pics[index].classList.toggle("galActive");
        pics[pics.length -1].classList.toggle("galActive");
    }
});

prev.addEventListener("click", () => {
    if (index > 0 && index < (pics.length )) {
        index -= 1;
        pics[index + 1].classList.toggle("galActive");
        pics[index].classList.toggle("galActive");
    }
    else {
        pics[0].classList.toggle("galActive");
        index = pics.length -1;
        pics[pics.length -1].classList.toggle("galActive");
    }
});


