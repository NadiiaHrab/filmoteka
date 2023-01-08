

const ul = document.querySelector('.film-libary');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input')


const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING = 'trending/all/day';
const API_KEY = '1d8f1c2313e3ed4d118cc85bb96261b9';

const SearchMovie = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
// btn.setAttribute('disabled', true);



input.addEventListener('input', () => {
    const inputValue = input.value;

    if (inputValue.length >= 2) {
     btn.removeAttribute('disabled', false);
        
    }
    fetchFilm(inputValue)
        .then(renderCard)
        .catch((error) => console.log(error));
});

btn.addEventListener('click', () => {
    getApiTrending().then(renderCard)
   

})


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


    
function renderCard(films) {
    const cardEl = films.map(film => {
        return `<div class="card">
        <img class="image" src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="${film.original_title}"  width=100/>
        <h3 class="film-title">${film.original_title}</h3>
       
    
    </div>`
    }).join('');
    
   ul.insertAdjacentHTML('afterbegin', cardEl);
};

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



//         fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUserList(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderUserList(users) {
//   const markup = users
//     .map((user) => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join("");
//   userList.innerHTML = markup;
// }