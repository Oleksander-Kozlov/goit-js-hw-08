// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const list = document.querySelector('.gallery');
list.classList.add('js-gallery');
const cards = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" title = "${description}"/>
   </a>
</li>`
);
list.insertAdjacentHTML('beforeend', cards.join(''));