document.querySelector(".show-close-btns").
addEventListener("click",show_close_click);
// document.querySelector(".next").addEventListener("click",next);
// document.querySelector(".prev").addEventListener("click",prev);
document.querySelector(".cards-container").
addEventListener("pointerdown",Slid.pointerdonw);
document.querySelector(".cards-container").
addEventListener("pointerup",Slid.pointerup);
document.querySelector(".cards-container").
addEventListener("pointermove",event=>
{
    event.preventDefault();
});
