document.querySelector(".show-close-btns").
addEventListener("click",show_close_click);

const cards_container = document.querySelector(".cards-container");

cards_container.addEventListener("mouseover",e=>
{
    e.currentTarget.classList.
    add("show");
});
cards_container.addEventListener("mouseleave",e=>
{
    e.currentTarget.classList.remove("show");
});

document.querySelector(".next").addEventListener
("click",Slid.next);
document.querySelector(".prev").addEventListener
("click",Slid.prev);

cards_container.
addEventListener("mousedown",Slid.mousedown);

cards_container.
addEventListener("mouseup",Slid.mouseup);

cards_container.
addEventListener("touchstart",Slid.touchstart,
{passive:true});

cards_container.
addEventListener("touchmove",Slid.touchmove,
{passive:true});

cards_container.
addEventListener("touchend",Slid.touchend);

document.forms[0].
addEventListener("submit", e =>
{
    e.preventDefault();
    const value = e.currentTarget.querySelector("input").value;
    console.log(value);
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!regex.test(value))
    {
        alert("invalid email");
    }
    if(value === "")
    {
        alert("please fill the input before submit");
    }
})