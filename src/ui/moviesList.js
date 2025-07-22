import { formatDate } from "../lib/formatDate.js";
import { formatDuration } from "../lib/formatDuration.js";
import { formatRating } from "../lib/formatRating.js";

export function moviesListSection(data) {
    let HTML = '';

    for (const item of data) {
        const img = item.img === 'default.png' ? '/img/default.png' : ('/img/movies/' + item.img);

        HTML += `
            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col-12 col-lg-8 p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary-emphasis">${item.category}</strong>
                        <h3 class="mb-0">${item.title}</h3>
                        <p class="card-text mb-auto">${item.description}</p>
                        <div class="mb-1 text-body-secondary">Released: ${formatDate(item.release_date)}</div>
                        <div class="mb-1 text-body-secondary">Duration: ${formatDuration(item.duration_in_minutes)}</div>
                        <div class="mb-1 text-body-secondary">Rating: ${formatRating(item.rating)}</div>
                        <a href="/movies/${item.url_slug}" class="icon-link gap-1 icon-link-hover stretched-link">
                            Continue reading
                        </a>
                    </div>
                    <div class="col-4 d-none d-lg-block">
                        <img class="w-100 h-100 object-fit-cover" src="${img}" alt="${item.title}">
                    </div>
                </div>
            </div>`;
    }

    return `
        <div class="container">
            <div class="row">
                ${HTML}
            </div>
        </div>`;
}