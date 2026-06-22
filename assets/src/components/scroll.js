import {item,stickyElement,headerOffset, menolap_boxx} from "../common.js";
window.addEventListener('scroll', () => {
    if (window.pageYOffset >= headerOffset) {
        stickyElement.classList.add('fixed');
    } else {
        stickyElement.classList.remove('fixed');
    }
});
document.addEventListener("DOMContentLoaded", () => {


    item.forEach((item) => {
        item.classList.add("item_load");
    });

    const observer = new IntersectionObserver((enteries) => {
        enteries.forEach((entry) => {
            const el = entry.target;
            if (entry.isIntersecting) {
                el.classList.add("item_load_show");
            }
        });
    });
    item.forEach((item) => observer.observe(item));
});
menolap_boxx.addEventListener('wheel', function(e) {
    e.preventDefault();
    this.scrollLeft -= e.deltaY;
});