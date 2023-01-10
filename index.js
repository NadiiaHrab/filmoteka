
const ul = document.querySelector('.card__collection');
const html = document.querySelector('html')
const btn = document.querySelector('.btn');
const input = document.querySelector('.input')



const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING = 'trending/movie/week';
const API_KEY = '1d8f1c2313e3ed4d118cc85bb96261b9';
 
    getFetchTrending()
        .then(renderTrendingCard)
        .catch((error) => console.log(error));



// 

function getFetchTrending() {
       return fetch(`${BASE_URL}${TRENDING}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`)
        .then(response =>
        response.json()
        )
        .then(data => data.results)
}


 
function renderTrendingCard(films) {
    const cardEl = films.map(film => {
        return `<li class="card__item">
    <img class=" card__img" src="https://www.themoviedb.org/t/p/w500${film.poster_path}"
      onerror="this.onerror=null;this.src='https://subscribenow.com.au/time/asia/Solo/Content/Images/noCover.gif'" loading="lazy"
      alt="${film.title}" title="${film.title}" data-id="${film.id}" width="280"/>
<h3 class="card__title">${film.title}</h3>
     <div class="card-list__wrap">
<div class="card-field">
    <ul class="list">
        <li class="item">
            <p class="text__vote">${film.release_date}</p>
        </li>
    </ul>
</div>

   </div>          
    

</li>`
        
    }).join('');

    ul.insertAdjacentHTML('beforeend', cardEl);
    // return cardEl;
};


// ul.addEventListener('click', () => {
//     getIdApi(e.target.dataset.id)
//         .then(data => {
//             if (e.target.nodeName !== 'IMG') return;

//         });


// })


// async function fetchFilm(searchQuery) {
//     try {
//         const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`);
//         const results = response.json();
//         return results;
//     } catch (error) {
//         console.log(error);
//     }
// }



// function renderCard(films) {
//     const murkup = renderModalCard(films);
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



   // return fetch(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&${filter}&per_page=40&page=${this.page}`)
        //   .then(response => response.json())
        //   .then(data => return data.hits);

// function fetchOneMovieInfo(movie_id) {
//   const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`;
//   return fetch(url)
//     .then(response => response.json())
//     .then(data => ({
//       ...data,
//       popularity: data.popularity.toFixed(1),
//     }));
// }
