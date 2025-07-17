import { getPublishedMovies } from "../../../db/admin/getPublishedMovies.js";
import { AdminTemplate } from "../../../templates/AdminTemplate.js";
import { tableMovies } from "../../../ui/tables/tableMovies.js";

export class PageAdminMoviesPublished extends AdminTemplate {
    constructor(req) {
        super(req);
        this.pageJS = 'movies-list';
    }

    async main() {
        const data = await getPublishedMovies();

        return `
            <main>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="display-5">Published movies</h1>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            ${tableMovies(data)}
                        </div>
                    </div>
                </div>
            </main>`;
    }
}