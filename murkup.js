 
export default function renderCard(films) {
    const cardEl = films.map(film => {
        return `<div class="card">
        <title class="film-title">${film.original_title}</title>
        <p class="film-descriptions">${film.overview}</p>
        <img src="${film.poster_path}" alt="${film.original_title}">
    </div>`
    }).join('');
    
    return cardEl;
};


