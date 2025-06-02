import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, clearGallery } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox = new SimpleLightbox('.gallery a');
let currentPage = 1;
let currentQuery = '';

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = event.target.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.error({ title: 'Error', message: 'Search query cannot be empty!' });
    return;
  }

  currentQuery = query;
  currentPage = 1;
  clearGallery(gallery);
  loader.style.display = 'block';

  try {
    const data = await fetchImages(query, currentPage);
    loader.style.display = 'none';

    if (data.hits.length === 0) {
      iziToast.warning({ title: 'No Results', message: 'Sorry, there are no images matching your search query.' });
      return;
    }

    gallery.innerHTML = renderGallery(data.hits);
    lightbox.refresh();
  } catch (error) {
    loader.style.display = 'none';
    iziToast.error({ title: 'Error', message: 'Failed to fetch images. Please try again later.' });
  }
});