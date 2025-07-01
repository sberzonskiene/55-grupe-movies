import { PageTemplate } from "../templates/PageTemplate.js";
import { placeholder } from "../ui/placeholder.js";

export class PageMovies extends PageTemplate {
    main() {
        return `
            <main>
                ${placeholder('Page title')}
                ${placeholder('Filter')}
                <div class="row">
                    <div class="col-12">
                        MOVIES PAGE CONTENT
                    </div>
                </div>
            </main>`;
    }
}