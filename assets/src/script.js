const body = document.querySelector('body')
const stickyElement = document.querySelector('.navbar_box');
const headerOffset = stickyElement.offsetTop;
const titleSite = document.querySelector(".header_title");
const title = document.querySelector(".title");
const morebtn = document.querySelector(".more");
const menubarEL = document.querySelector(".menobar_header_box");
const closebtnMenubar = document.querySelector(".btn_menobar_close");
const menubarItem = document.querySelector(".menobar_title");
const items = document.querySelector(".items");
const html = document.querySelector("html");
const overlay = document.querySelector(".overlay");
const footer = document.querySelector(".footer");
const btn_maq = document.querySelector(".donate");
const ol_items = document.querySelector(".ol_maq");
const mq_link = document.querySelector(".maq_link");
const overlay_maq = document.querySelector(".overlaytwo");
const exitEL = document.querySelector(".exit");
const menolap = document.querySelector(".menolap");
const menolap_box = document.querySelector(".menobar_links");
if(window.innerWidth >= 1024){
    morebtn.remove("more");
}
if(window.innerWidth <= 1024){
    menolap.remove("menolap")
}
window.addEventListener('scroll', () => {
    if (window.pageYOffset >= headerOffset) {
        stickyElement.classList.add('fixed');
    } else {
        stickyElement.classList.remove('fixed');
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const item = document.querySelectorAll(".item_header_box_des");

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
const titleSiteHandler = `
<h1 class="header_title_text">
                ${title.textContent}
            </h1>
`;
titleSite.insertAdjacentHTML('beforeend', titleSiteHandler);

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
//مربوط به ایتم های منوبار که قراره تکمیل شه از این خط به پایین
fetch("assets/json/data.json")
    .then(res => res.json())
    .then(data => {
        // فرض می‌کنیم کلید مورد نظر در JSON شما 'dataItem' است.
        // اگر کلید دیگری است، آن را جایگزین کنید.
        const { dataItem } = data; // یا const dataItems = data; اگر JSON شما مستقیماً یک آرایه است

        // مهم: اطمینان حاصل کنید که menubarItem، body، و items در DOM شما وجود دارند.
        // مثلاً:
        // const menubarItem = document.getElementById('your-menubar-container-id');
        // const body = document.body;
        // const items = document.getElementById('your-items-container-id');
        const basePath = window.location.pathname.replace(/\/$/, '');
        dataItem.forEach((item) => {
            const menubarItemHandler = `
                <div class="menobar_title_links">
                    <ol class="menobar_links">
                        <li><a class="menobar_links_li" href="/${item.slug}" data-id="${item.id}">${item.title}</a></li>
                    </ol>
                </div>
            `;
            menubarItem.insertAdjacentHTML('beforeend', menubarItemHandler);
            const ol_itemsHandler = `
                <li><a class="mq_links_li" href="/${item.slug}" data-id="${item.id}">${item.title}</a></li>
            `;
            ol_items.insertAdjacentHTML('beforeend', ol_itemsHandler);
            menubarItem.insertAdjacentHTML('beforeend', menubarItemHandler);
            const lap_itemsHandler = `
                <li><a class="mq_links_li" href="/${item.slug}" data-id="${item.id}">${item.title}</a></li>
            `;
            menolap_box.insertAdjacentHTML('beforeend', lap_itemsHandler);

            // توجه: اضافه کردن event listener در داخل forEach ممکن است بهینه نباشد
            // و باعث ایجاد event listener های تکراری شود. بهتر است از event delegation استفاده کنید.
            // در ادامه روش بهینه تر را نشان می دهم.
        });

        // روش بهینه تر: استفاده از Event Delegation
        menubarItem.addEventListener("click", (e) => {
            // اطمینان حاصل کنید که روی لینک کلیک شده است
            if (!e.target.classList.contains("menobar_links_li")) {
                return;
            }

            e.preventDefault();
            html.classList.add("bodyScrollLock");
            footer.classList.add("footerHidden")
            const id = Number(e.target.dataset.id);

            // **اینجا اصلاح شده:** از 'dataItem' (کل آرایه) برای پیدا کردن آیتم استفاده کنید
            const selection = dataItem.find(dataItem => dataItem.id === id); // از 'dataItem' به جای 'item' استفاده شده

            // اطمینان از اینکه آیتم پیدا شده است
            if (selection) {
                const menubarItemShowHandler = `
                    <div class="item">
                        <div class="items_box">
                            <h2>${selection.title}</h2>
                            <p>${selection.paragraph}</p>
                        </div>  
                    </div>
                `;
                // برای جلوگیری از تکرار آیتم ها، محتوای فعلی را پاک کنید
                items.innerHTML = "";
                items.insertAdjacentHTML("beforeend", menubarItemShowHandler);
                title.insertAdjacentHTML("beforeend", ` - ${selection.title}`);

            } else {
                console.error("Item not found with id:", id);
            }
            stickyElement.classList.add('fixed');
            menubarEL.classList.remove("menobar_header_box_show");
            overlay.classList.remove("overlay_show");
        });
        ol_items.addEventListener("click", (ev) => {
            // اطمینان حاصل کنید که روی لینک کلیک شده است
            if (!ev.target.classList.contains("mq_links_li")) {
                return;
            }

            ev.preventDefault();
            html.classList.add("bodyScrollLock");
            footer.classList.add("footerHidden")
            const id = Number(ev.target.dataset.id);

            // **اینجا اصلاح شده:** از 'dataItem' (کل آرایه) برای پیدا کردن آیتم استفاده کنید
            const selection = dataItem.find(dataItem => dataItem.id === id); // از 'dataItem' به جای 'item' استفاده شده

            // اطمینان از اینکه آیتم پیدا شده است
            if (selection) {
                const menubarItemShowHandler = `
                    <div class="item">
                        <div class="items_box">
                            <h2>${selection.title}</h2>
                            <p>${selection.paragraph}</p>
                        </div>  
                    </div>
                `;
                // برای جلوگیری از تکرار آیتم ها، محتوای فعلی را پاک کنید
                items.innerHTML = "";
                items.insertAdjacentHTML("beforeend", menubarItemShowHandler);
                title.insertAdjacentHTML("beforeend", ` - ${selection.title}`);
            } else {
                console.error("Item not found with id:", id);
            }

            stickyElement.classList.add('fixed');
            body.classList.remove("bodyScrollLock");
            mq_link.classList.remove('shwoo');
            setTimeout(() =>{
                mq_link.classList.remove('shwo');
            }, 50);
            overlay_maq.classList.remove("overlaytwo_show");
        });
        menolap_box.addEventListener("click", (ev) => {
            // اطمینان حاصل کنید که روی لینک کلیک شده است
            if (!ev.target.classList.contains("mq_links_li")) {
                return;
            }

            ev.preventDefault();
            html.classList.add("bodyScrollLock");
            footer.classList.add("footerHidden")
            const id = Number(ev.target.dataset.id);

            // **اینجا اصلاح شده:** از 'dataItem' (کل آرایه) برای پیدا کردن آیتم استفاده کنید
            const selection = dataItem.find(dataItem => dataItem.id === id); // از 'dataItem' به جای 'item' استفاده شده

            // اطمینان از اینکه آیتم پیدا شده است
            if (selection) {
                const menubarItemShowHandler = `
                    <div class="item">
                        <div class="items_box">
                            <h2>${selection.title}</h2>
                            <p>${selection.paragraph}</p>
                        </div>  
                    </div>
                `;
                // برای جلوگیری از تکرار آیتم ها، محتوای فعلی را پاک کنید
                items.innerHTML = "";
                items.insertAdjacentHTML("beforeend", menubarItemShowHandler);
                title.insertAdjacentHTML("beforeend", ` - ${selection.title}`);
            } else {
                console.error("Item not found with id:", id);
            }

            stickyElement.classList.add('fixed');
            body.classList.remove("bodyScrollLock");

        });
    })

    .catch(error => {
        console.error("Error fetching or processing JSON:", error);
    });

