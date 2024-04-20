// import CONFIG from '../../global/config';

// const restoCard = (resto) => `
// <div tabindex =0 class="card">
//     <div class="icon" tabindex="0">
//         <span class="rate" tabindex="0"><p>★ ${resto.rating || '-'}</p></span>
//         <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name || '-'}">
//     </div>
//     <div class="text" tabindex="0">
//         <p class="title-city resto__title">${resto.name || '-'} - ${resto.city || '-'}</p>
//         <p class="description">${resto.description || '-'}</p>
//     </div>
//     <a href="#/resto/${resto.id || '-'}" class="detail resto__title"><div tabindex="0">
//         <p><strong>Detail</strong></p>
//     </div></a>
// </div>
// `;

// export default restoCard;

import CONFIG from '../../global/config';

const restoCard = (resto) => `
<div tabindex =0 class="card">
    <div class="icon" tabindex="0">
        <span class="rate" tabindex="0"><p>★ ${resto.rating || '-'}</p></span>
        <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name || '-'}">
    </div>
    <div class="text" tabindex="0">
        <p class="title-city resto__title">${resto.name || '-'}</p>
        <p class="description">${resto.description || '-'}</p>
    </div>
    <a href="#/resto/${resto.id || '-'}" class="detail"><div tabindex="0">
        <p><strong>Detail</strong></p>
    </div></a>
</div>
`;

export default restoCard;
