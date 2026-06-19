import {menubarItem,ol_items,menolap_box,html,footer,items,title,body,stickyElement,menubarEL,overlay,overlay_maq,mq_link} from "../common.js";
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
        });menubarItem.addEventListener("click", (e) => {
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