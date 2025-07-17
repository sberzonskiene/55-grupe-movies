const formDOM = document.forms[0];
const originalUrlDOM = document.getElementById('original_url');
const titleDOM = document.getElementById('title');
const urlDOM = document.getElementById('url');
const descriptionDOM = document.getElementById('description');
const durationHoursDOM = document.getElementById('duration_hours');
const durationMinutesDOM = document.getElementById('duration_minutes');
const categoryDOM = document.getElementById('category');
const releaseDateDOM = document.getElementById('release_date');
const ratingDOM = document.getElementById('rating');
const statusPublishedDOM = document.getElementById('status_published');
const statusDraftDOM = document.getElementById('status_draft');

if (formDOM) {
    formDOM.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = {
            title: titleDOM.value,
            url: urlDOM.value,
            category: +categoryDOM.value,
            status: '',
        };

        if (descriptionDOM.value) {
            data.description = descriptionDOM.value;
        }

        if (durationHoursDOM.value || durationMinutesDOM.value) {
            let h = 0;
            if (Number.isInteger(+durationHoursDOM.value)) {
                h = +durationHoursDOM.value;
            }

            let min = 0;
            if (Number.isInteger(+durationMinutesDOM.value)) {
                min = +durationMinutesDOM.value;
            }

            data.duration = h * 60 + min;
        }

        if (releaseDateDOM.value) {
            data.releaseDate = releaseDateDOM.value;
        }

        if (ratingDOM.value) {
            data.rating = +ratingDOM.value;
        }

        if (statusPublishedDOM.checked) {
            data.status = 'published';
        }
        if (statusDraftDOM.checked) {
            data.status = 'draft';
        }

        fetch('/api/admin/movies/' + originalUrlDOM.value, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success' && data.action === 'redirect') {
                    location.href = data.href;
                }
            })
            .catch(console.error);
    })
}