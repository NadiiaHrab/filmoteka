 
export default function renderModalCard(films) {
    const cardEl = films.map(film => {
        return `<div class="modal-card">
    <img src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="${film.title}" width=240 data-action="${film.id}/>
    <h3 class="madal__title">${film.title}</h3>
<div class="modal-list__wrap">
<div class="wrap">
    <ul class="modal__list">
        <li class="modal__item">
            <p class="modal__vote">Vote / Votes</p>
        </li>
        <li class="modal__item">
            <p class="modal__vote">Popularity</p>
        </li>
        <li class="modal__item">
            <p class="modal__vote">Original Title</p>
        </li>
        <li class="modal__item">
            <p class="modal__vote">Genre </p>
        </li>
    </ul>
</div>
     <div class="list__result">
        <p><span>${film.vote_average}</span><span>${film.vote_count}</span></p> 
        <p>${film.popularity}</p>
        <p>${film.original_title}</p>
        <p>${film.original_title}</p>
     </div>
        
   </div> 

    <h4 class="modal__about">About</h4>
        <p class="modal__text">${film.overview}</p>
    
    <ul class="modal-btn">
        <li class="btn__item">
            <button type="button" class="btn__watch">add to Watched</button>
        </li>
        <li class="btn__item">
            <button type="button" class="btn__queue">add to queue</button>
        </li>
    </ul>
</div>`
        
    }).join('');

    // ul.insertAdjacentHTML('afterbegin', cardEl);
    return cardEl;
}



