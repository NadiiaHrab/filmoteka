
import renderModalCard from './murkup';

const ul = document.querySelector('.film-libary');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input')


const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING = 'trending/all/day';
const API_KEY = '1d8f1c2313e3ed4d118cc85bb96261b9';

const SearchMovie = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
// btn.setAttribute('disabled', true);



btn.addEventListener('click', () => {
    const inputValue = input.value;

    if (inputValue.length >= 2) {
        btn.removeAttribute('disabled', false);
        
    }
    fetchFilm(inputValue)
        .then(data => {
            renderCard(data);
            
        })

        .catch((error) => console.log(error));
});



function renderCard(films) {
    const murkup = renderModalCard(films);
    ul.insertAdjacentHTML('beforeend', murkup)
}

// btn.addEventListener('click', (e) => {
//     getIdApi(e.target.dataset.id)
//         .then(fetchOneMovieInfo)

// })

ul.addEventListener('click', () => {
    getIdApi(e.target.dataset.id)
        .then(data => {
            if (e.target.nodeName !== 'IMG') return;

        });


})

// async function fetchFilm(searchQuery) {
//     try {
//         const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`);
//         const results = response.json();
//         return results;
//     } catch (error) {
//         console.log(error);
//     }
// }


function fetchFilm(searchQuery) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`)
        .then(response =>
        response.json()
        )
        .then(data => data.results)
        
    
};

function getApiTrending() {
       return fetch(`${BASE_URL}${TRENDING}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`)
        .then(response =>
        response.json()
        )
        .then(data => data.results)
}

function getIdApi(movie_id) {
    return fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&append_to_response`)
      .then(response =>
        response.json()
        )
        .then(data => data.results);
}
 


// function renderCard(films) {
//     const cardEl = films.map(film => {
//         return `<div class="card">
//         <img class="image" src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="${film.original_title}"  width=100  "/>
//         <h3 class="film-title">${film.original_title}</h3>
       
    
//     </div>`
//     }).join('');
    
//    ul.insertAdjacentHTML('afterbegin', cardEl);
// };

function renderCardGenres(genres) {
    const cardEl = genres.map(genre => {
        return `
        <h3 class="film-title">${genre.id}</h3>
    `
    }).join('');
    
   ul.insertAdjacentHTML('afterbegin', cardEl);
};







   // return fetch(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&${filter}&per_page=40&page=${this.page}`)
        //   .then(response => response.json())
        //   .then(data => return data.hits);

function fetchOneMovieInfo(movie_id) {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => ({
      ...data,
      popularity: data.popularity.toFixed(1),
    }));
}
