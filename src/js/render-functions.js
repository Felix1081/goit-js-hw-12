import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
gallery.on('show.simplelightbox', function () {});

const galleryList = document.querySelector('.gallery');

export function createGallery(images) {
  const markup = images
    .map(img => {
      return `<li class="gallery-item">
        <a class="gallery-link" href="${img.largeImageURL}">
          <img
            class="gallery-image"
            src="${img.webformatURL}"
            data-source="${img.largeImageURL}"
            alt="${img.tags}"
          />
        </a>
        <div class="images-info">
          <p class = "images-txt">Likes: <span>${img.likes}</span></p>
          <p class = "images-txt">Views: <span>${img.views}</span></p>
          <p class = "images-txt">Comments: <span>${img.comments}</span></p>
          <p class = "images-txt">Downloads: <span>${img.downloads}</span></p>
        </div>
        </li>`;
    })
    .join('');
  galleryList.insertAdjacentHTML('beforeend', markup);

  gallery.refresh();
}

export function clearGallery() {
  galleryList.innerHTML = '';
}

const loader = document.querySelector('.loader');

export function showLoader() {
  loader.classList.remove('hidden');
}
export function hideLoader() {
  loader.classList.add('hidden');
}

export const loadMoreButton = document.querySelector('.loadmore-btn');

export function showLoadMoreButton() {
  loadMoreButton.classList.remove('hidden');
}
export function hideLoadMoreButton() {
  loadMoreButton.classList.add('hidden');
}
