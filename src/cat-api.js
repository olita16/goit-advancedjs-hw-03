import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY =
  'live_99SRprGcBXfKYNGHvvn3sqvYRx2GdYXKq7upUqiL81KLtOn9e6otrBDcmh4HWOiQ';

axios.defaults.headers.common['x-api-key'] = API_KEY;

export function fetchBreeds() {
  return axios.get(BASE_URL).then(response => {
    return response.data;
  });
}

export function fetchCatByBreed(breedId) {
  const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';

  return axios
    .get(CAT_API_URL, {
      params: {
        breed_ids: breedId,
      },
    })
    .then(response => {
      return response.data;
    });
}