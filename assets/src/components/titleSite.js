import {titleSite,title} from "../common.js";
const titleSiteHandler = `
<h1 class="header_title_text">
                ${title.textContent}
            </h1>
`;
titleSite.insertAdjacentHTML('beforeend', titleSiteHandler);

