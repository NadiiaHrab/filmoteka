import genresData from './genres.json' assert {type: 'json'};

export default function makeFilmsMarkup(films) {
  return films
    .map(
      ({ poster_path,
        title,
        name,
        release_date,
        first_air_date,
        genre_ids,
        genres,
        vote_average,
        id,
      }) => {
        let filmGenres;
        if (genres) {
          filmGenres = genres.map(({ name }) => name).join(', ');
        }
        if (genre_ids) {
          filmGenres = genresData
            .filter(({ id }) => genre_ids.includes(id))
            .map(({ name }) => name)
            .join(', ');
        }

        return `<li class="trending__item" data-id=${id}>
        <a href="" class="trending__link">
                <div class="trending__img">
                <img src=https://image.tmdb.org/t/p/original${poster_path} alt="${
          title || name
        }" loading="lazy">
        </a>
        </div>
                <div class="trending__description">
                  <p class="trending__title">${title || name}</p>
                  <div class="trending__meta">
                    <p class="trending__genres">${filmGenres || 'Action'}</p>
                    <p class="trending__data">|${(release_date || first_air_date || '2023').slice(
                      0,
                      4,
                    )}</p>
                    <span class="trending__rating">${vote_average || '-'}</span>
                  </div>
                </div>
            </li>`;
      },
    )
    .join('');
  
}
