function show_close_click(event)
{
    const close_btn = document.getElementById("close");
    const show_btn= document.getElementById("show");
    const top_nav_bar = document.querySelector(".top-nav-bar");
    close_btn.classList.toggle("not-visible");
    show_btn.classList.toggle("not-visible");
    top_nav_bar.classList.toggle("show-nav-bar");
}
class Slid
{
    static counter = 0;
    static max = 3;
    static startX ;
    static endX;
    
    static swip()
    {
        const cards = document.querySelectorAll(".card");
        cards.forEach(card=>
        {
            card.style.transform = `translateX(-${Slid.counter}00%)`;
        });
    }
    static next(event)
    {
        if(Slid.counter === Slid.max)
        {
            Slid.counter = 0;
            Slid.swip();
            const current = document.querySelector(".current");
            const nextElement = current.parentElement.firstElementChild;
            current.classList.remove("current");
            nextElement.classList.add("current");
        }
        else
        {
            ++Slid.counter;
            Slid.swip();
            const current = document
            .querySelector(".current");
            const nextElement = current.nextElementSibling;
            current.classList.remove("current");
            nextElement.classList.add("current");
        }
    }
    static prev(event)
    {
        if(Slid.counter === 0)
        {
            Slid.counter = 3;
            Slid.swip();
            const current = document
            .querySelector(".current");
            const prevtElement = current.parentElement.lastElementChild;
            current.classList.remove("current");
            prevtElement.classList.add("current");
        }
        else
        {
            --Slid.counter;
            Slid.swip();
            const current = document
            .querySelector(".current");
            const prevtElement = current.previousElementSibling;
            current.classList.remove("current");
            prevtElement.classList.add("current");
        }
    }
    static touchstart(event)
    {
        Slid.startX =event.touches[0].clientX;
    }
    static touchend(event)
    {
        Slid.endX = event.touches[0].clientX;
        if(Slid.startX < Slid.endX)
        {
            Slid.prev();
        }
        else
        {
            if(Slid.startX != Slid.endX) 
                Slid.next();
        }
    }
    static mousedown(event)
    {
        Slid.startX = event.clientX;
    }
    static mouseup(event)
    {
        Slid.endX = event.clientX;
        if(Slid.startX < Slid.endX)
        {
            Slid.prev();
        }
        else
        {
            if(Slid.startX != Slid.endX)
                Slid.next();
        }
    }
}
function next(event) 
{
    Slid.next();
}
function prev(event)
{
    Slid.prev();
}