

const ul = document.querySelector('.film-libary');
const btn = document.querySelector('.btn');

const API_KEY = '1d8f1c2313e3ed4d118cc85bb96261b9';
const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day';



btn.addEventListener('click', () => {
    fetchFilm()
        .then(renderCard)
        .catch((error) => console.log(error))
    
});

function fetchFilm() {
    return fetch(`${BASE_URL}?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => data.results);
};

    
function renderCard(films) {
 
    const cardEl = films.map(film => {
        return `<div class="card">
        <title class="film-title"><b>${film.original_title}<b></title>
        <p class="film-descriptions">${film.overview}</p>
      
        
    </div>`
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