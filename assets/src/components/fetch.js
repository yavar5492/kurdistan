import {menubarItem,ol_items,menolap_box,html,footer,items,title,body,stickyElement,closeItem,menubarEL,overlay,overlay_maq,mq_link} from "../common.js";
fetch("assets/json/data.json")
    .then(res => res.json())
    .then(data => {
        const { dataItem } = data;
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
            const lap_itemsHandler = `
                <li><a class="mq_links_li" href="/${item.slug}" data-id="${item.id}">${item.title}</a></li>
            `;
            menolap_box.insertAdjacentHTML('beforeend', lap_itemsHandler);

        });menubarItem.addEventListener("click", (e) => {
            if (!e.target.classList.contains("menobar_links_li")) {
                return;
            }

            e.preventDefault();
            html.classList.add("bodyScrollLock");
            footer.classList.add("footerHidden")
            const id = Number(e.target.dataset.id);

            const selection = dataItem.find(dataItem => dataItem.id === id);

            if (selection) {
                const menubarItemShowHandler = `
                    <div class="item">
                        <div class="items_box">
                            <h2>${selection.title}</h2>
                            <p>${selection.paragraph}</p>
                        </div>  
                    </div>
                `;
                items.innerHTML = "";
                items.insertAdjacentHTML("beforeend", menubarItemShowHandler);
                title.insertAdjacentHTML("beforeend", ` - ${selection.title}`);

            } else {
                console.error("Item not found with id:", id);
            }
            stickyElement.classList.add('fixed');
            items.classList.remove("itemHidden");
            closeItem.classList.add("items_btn_close_show");
            menubarEL.classList.remove("menobar_header_box_show");
            overlay.classList.remove("overlay_show");
        });
        ol_items.addEventListener("click", (ev) => {
            if (!ev.target.classList.contains("mq_links_li")) {
                return;
            }

            ev.preventDefault();
            html.classList.add("bodyScrollLock");
            footer.classList.add("footerHidden")
            const id = Number(ev.target.dataset.id);
            const selection = dataItem.find(dataItem => dataItem.id === id);
            if (selection) {
                const menubarItemShowHandler = `
                    <div class="item">
                        <div class="items_box">
                            <h2>${selection.title}</h2>
                            <p>${selection.paragraph}</p>
                        </div>  
                    </div>
                `;
                items.innerHTML = "";
                items.insertAdjacentHTML("beforeend", menubarItemShowHandler);
                title.insertAdjacentHTML("beforeend", ` - ${selection.title}`);
            } else {
                console.error("Item not found with id:", id);
            }

            stickyElement.classList.add('fixed');
            items.classList.remove("itemHidden");
            closeItem.classList.add("items_btn_close_show");
            body.classList.remove("bodyScrollLock");
            mq_link.classList.remove('shwoo');
            setTimeout(() =>{
                mq_link.classList.remove('shwo');
            }, 50);
            overlay_maq.classList.remove("overlaytwo_show");
        });
        menolap_box.addEventListener("click", (ev) => {
            if (!ev.target.classList.contains("mq_links_li")) {
                return;
            }

            ev.preventDefault();
            html.classList.add("bodyScrollLock");
            footer.classList.add("footerHidden");
            const id = Number(ev.target.dataset.id);

            const selection = dataItem.find(dataItem => dataItem.id === id);

            if (selection) {
                const menubarItemShowHandler = `
                    <div class="item">
                        <div class="items_box">
                            <h2>${selection.title}</h2>
                            <p>${selection.paragraph}</p>
                        </div>  
                    </div>
                `;

                items.innerHTML = "";
                items.insertAdjacentHTML("beforeend", menubarItemShowHandler);
                title.insertAdjacentHTML("beforeend", ` - ${selection.title}`);
            } else {
                console.error("Item not found with id:", id);
            }

            stickyElement.classList.add('fixed');
            items.classList.remove("itemHidden");
            closeItem.classList.add("items_btn_close_show");
            body.classList.remove("bodyScrollLock");

        });
    })

    .catch(error => {
        console.error("Error fetching or processing JSON:", error);
    });