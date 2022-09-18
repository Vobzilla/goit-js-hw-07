/** @format */

import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryImages = document.querySelector(".gallery");
const itemMarkup = createGalleryImage(galleryItems);

galleryImages.insertAdjacentHTML("beforeend", itemMarkup);
galleryImages.addEventListener("click", onOpenGalleryImages);

function createGalleryImage(img) {
  return img
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onOpenGalleryImages(event) {
  event.preventDefault();

  const isImagesSwatchEl = event.target.classList.contains("gallery__image");
  if (!isImagesSwatchEl) {
    return;
  }

  const currentImg = event.target.attributes;

  const instance = basicLightbox.create(
    `<div><img src='${currentImg[2].value}' alt='${currentImg.alt.nodeValue}'></div>`
  );
  instance.show();
}
