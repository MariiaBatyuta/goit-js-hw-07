import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallerry = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`);

gallerry.insertAdjacentHTML('beforeend', galleryMarkup.join(''));


gallerry.addEventListener('click', openOnClick);

function openOnClick(evt) {
    evt.preventDefault();
    const instance = basicLightbox.create(`
		<img src="${evt.target.dataset.source}">
	`)
  instance.show()
  
  document.addEventListener("keydown", closeModal);
  function closeModal({ key }) {
    if (key === "Escape") {
      instance.close()
    }
  }
}
