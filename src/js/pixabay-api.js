import axios from 'axios';

let page = 1;

export async function getImagesByQuery(query, page) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '51870132-66db1267a2a3823963ca5e362',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page: `${page}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log('ERROR');
    throw err;
  }
}
