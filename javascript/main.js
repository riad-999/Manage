document.querySelector(".show-close-btns").
addEventListener("click",show_close_click);

document.querySelector(".next").addEventListener
("click",Slid.next);
document.querySelector(".prev").addEventListener
("click",Slid.prev)
document.querySelector(".cards-container").
addEventListener("mousedown",Slid.mousedown);

document.querySelector(".cards-container").
addEventListener("mouseup",Slid.mouseup);

document.querySelector(".cards-container").
addEventListener("touchstart",Slid.touchstart);

document.querySelector(".cards-container").
addEventListener("touchend",Slid.touchend);

// document.querySelector(".cards-container").
// addEventListener("pointerdown",Slid.mousedown);

// document.querySelector(".cards-container").
// addEventListener("pointerup",Slid.mouseup);