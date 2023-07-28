import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallerry = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(({ preview, original, description }) => `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`);

gallerry.insertAdjacentHTML('beforeend', galleryMarkup.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: "alt",
    captionDelay: 250,
});