import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMorebtn,
  hideLoadMorebtn,
} from './js/render-functions';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.currentTarget.elements['search-text'].value
    .trim()
    .toLowerCase();

  clearGallery();
  showLoader();
  hideLoadMorebtn();

  try {
    const data = await getImagesByQuery(query);
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
  } catch (err) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
    console.log(err);
  }
  formEl.reset();
});
