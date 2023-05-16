const API_KEY = '34997553-a7b2d36a26db158f740bb35fd'; 
const BASE_URL = 'https://pixabay.com/api/';
const PICS_ON_PAGE = 12;

export const getSearch = (searchText, page) => {

  const params = new URLSearchParams({
    q: searchText,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PICS_ON_PAGE,
  });

  return fetch(`${BASE_URL}?${params}`);
};