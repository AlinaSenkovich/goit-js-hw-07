import { galleryItems } from './gallery-items.js';

// Change code below this line

// console.log(galleryItems);
const createGallery = ({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
      <img
      style="display:block"
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      />
    </a>`;
  };
  
  const makeGalleryMarkup = galleryItems.map(createGallery).join('');

  const galleryElements = document.querySelector('.gallery');

  galleryElements.insertAdjacentHTML('beforeend', makeGalleryMarkup);
  
var SimpleLightbox = window.SimpleLightbox;
var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});
// var lightbox = $('.gallery a').simpleLightbox({
//     captions: true,
//     captionsData: 'alt',
//     captionDelay: 250,
//   });
  

  