import {morebtn, menubarEL,body,overlay,closebtnMenubar,btn_maq,mq_link,overlay_maq,exitEL,} from "../common.js";
morebtn.addEventListener("click", e => {
    menubarEL.classList.add("menobar_header_box_show");
    body.classList.add("bodyScrollLock");
    overlay.classList.add("overlay_show");
});
closebtnMenubar.addEventListener("click", e => {
    menubarEL.classList.remove("menobar_header_box_show");
    body.classList.remove("bodyScrollLock");
    overlay.classList.remove("overlay_show");
});
overlay.addEventListener("click", e => {
    menubarEL.classList.remove("menobar_header_box_show");
    body.classList.remove("bodyScrollLock");
    overlay.classList.remove("overlay_show");
});
btn_maq.addEventListener("click", e => {
    mq_link.classList.add('shwo');
    setTimeout(() =>{
        mq_link.classList.add('shwoo');
    }, 50);
    body.classList.add("bodyScrollLock");
    overlay_maq.classList.add("overlaytwo_show");
})
exitEL.addEventListener("click", e => {
    body.classList.remove("bodyScrollLock");
    mq_link.classList.remove('shwoo');
    setTimeout(() =>{
        mq_link.classList.remove('shwo');
    }, 500);
    overlay_maq.classList.remove("overlaytwo_show");
});
//جای درست کردن دکمه برگشت (اگر باشد)
overlay_maq.addEventListener("click", e => {
    body.classList.remove("bodyScrollLock");
    mq_link.classList.remove('shwoo');
    setTimeout(() =>{
        mq_link.classList.remove('shwo');
    }, 500);
    overlay_maq.classList.remove("overlaytwo_show");
});