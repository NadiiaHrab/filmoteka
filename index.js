
const Pagination = tui.Pagination;
import makeFilmsMarkup from './filmsListMarkupTempl.js';
const ul = document.querySelector('.trending__collection');

const container = document.getElementById('tui-pagination-container');
const options = {
  itemsPerPage: 20,
  visiblePages: 5,

}

const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING = 'trending/movie/week';
const API_KEY = '1d8f1c2313e3ed4d118cc85bb96261b9';

getFetchTrending().then(() => {
  new Pagination(container, options).on(
    'afterMove',
    function (eventData) {
      // console.log('The current page is ' + eventData.page);
      getFetchTrending(eventData.page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  );
});

function getFetchTrending(page = 1) {
  return fetch(
    `${BASE_URL}${TRENDING}?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false`
  )
    .then(response => response.json())
    .then(data => {
      options.totalItems = data.total_results;
      return data.results;
    })
    .then(renderFilmsMarkup)
    .catch(error => console.log(error));
}
function renderFilmsMarkup(films) {
  ul.innerHTML = makeFilmsMarkup(films);
}




      
      
// function renderTrendingCard(films) {
//   const cardEl = films
//     .map(film => {
//       return `<li class="trending__item">
//     <img class=" card__img" src="https://www.themoviedb.org/t/p/w500${film.poster_path}"
//       onerror="this.onerror=null;this.src='https://subscribenow.com.au/time/asia/Solo/Content/Images/noCover.gif'" loading="lazy"
//       alt="${film.title}" title="${film.title}" data-id="${film.id}" width="280"/>
// <h3 class="card__title">${film.title}</h3>
// <div class="card-field">
//     <p class="text__vote">${film.release_date}</p>

// </div>

// </li>`;
//     })
//     .join('');

//   ul.insertAdjacentHTML('beforeend', cardEl);
//   // return cardEl;
// }



// function renderCard(films) {
//   ul.innerHTML = renderFilmsMarkup(films);
// }

// function renderTrendingCard(films) {
//     const cardEl = films.map(film => {
//         return `<li class="trending__item">
//     <img class=" card__img" src="https://www.themoviedb.org/t/p/w500${film.poster_path}"
//       onerror="this.onerror=null;this.src='https://subscribenow.com.au/time/asia/Solo/Content/Images/noCover.gif'" loading="lazy"
//       alt="${film.title}" title="${film.title}" data-id="${film.id}" width="280"/>
// <h3 class="card__title">${film.title}</h3>
// <div class="card-field">
//     <p class="text__vote">${film.release_date}</p>
    
// </div>

// </li>`
        
//     }).join('');

//     ul.insertAdjacentHTML('beforeend', cardEl);
//     // return cardEl;
// };



// фуккція Вови------------------------


// async function takeGanres() {
//   try {
//     const response = await axios.get(
//       'https://api.themoviedb.org/3/movie/157336?api_key=1234dced32e7dcd076b4111d81f37c06'
//     );
//     renderGanres(response.data);
//   } catch (error) {
//     console.log('error', error);
//   }
// }


// function getFetchGenres() {
//         return fetch(`${BASE_URL}${GENRES}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`)
//         .then(response =>
//         response.json()
//         )
//         .then(data => data.results)
// }










// function renderCard(films) {
//     const murkup = render(films);
//     ul.insertAdjacentHTML('beforeend', murkup)
// }



 


// function renderCard(films) {
//     const cardEl = films.map(film => {
//         return `<div class="card">
//         <img class="image" src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="${film.original_title}"  width=100  "/>
//         <h3 class="film-title">${film.original_title}</h3>
       
    
//     </div>`
//     }).join('');
    
//    ul.insertAdjacentHTML('afterbegin', cardEl);
// };

// function renderCardGenres(genres) {
//     const cardEl = genres.map(genre => {
//         return `
//         <h3 class="film-title">${genre.id}</h3>
//     `
//     }).join('');
    
//    ul.insertAdjacentHTML('afterbegin', cardEl);
// };



// function fetchFilm(searchQuery) {
//     return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`)
//         .then(response =>
//         response.json()
//         )
//         .then(data => data.results)
        
    
// };

