import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  loadMoreButton,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const formEl = document.querySelector('.form');

let page = 1;
let currentQuery = '';

formEl.addEventListener('submit', async e => {
  e.preventDefault();
  currentQuery = e.currentTarget.elements['search-text'].value
    .trim()
    .toLowerCase();
  page = 1;

  clearGallery();
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    hideLoader();

    if (!data.hits || data.hits.length === 0) {
      iziToast.error({
        title: 'Error!!!',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createGallery(data.hits);

    if (data.totalHits > 15) {
      showLoadMoreButton();
    }
  } catch (err) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
    console.log(err);
  }
  formEl.reset();
});

loadMoreButton.addEventListener('click', async () => {
  page += 1;

  showLoader();
  try {
    const data = await getImagesByQuery(currentQuery, page);
    createGallery(data.hits);

    const item = document.querySelector('.');

    if (data.totalHits <= page * 15) {
      hideLoadMoreButton();
      iziToast.info({
        title: 'Sorry',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (err) {
    iziToast.error({ title: 'Error', message: 'Failed to load more images.' });
  } finally {
    hideLoader();
  }
});
