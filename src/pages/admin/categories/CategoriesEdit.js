import { getCategoryByUrlSlug } from "../../../db/admin/getCategoryByUrlSlug.js";
import { AdminTemplate } from "../../../templates/AdminTemplate.js";

export class PageAdminCategoriesEdit extends AdminTemplate {
    constructor(req) {
        super(req);
        this.pageJS = 'edit-category';
    }

    async main() {
        const data = await getCategoryByUrlSlug(this.req.params.urlSlug);
        const category = data[0];

        return `
            <main>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="display-5">Edit category</h1>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <form class="col-12 col-md-9 col-lg-6">
                            <input value="${category.url_slug}" type="text" id="original_url" hidden>
                            <div class="mb-3">
                                <label for="title" class="form-label">Title</label>
                                <input value="${category.title}" type="text" class="form-control" id="title" required>
                            </div>
                            <div class="mb-3">
                                <label for="url" class="form-label">Url slug</label>
                                <input value="${category.url_slug}" type="text" class="form-control" id="url" required>
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">Description</label>
                                <textarea class="form-control" id="description">${category.description}</textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Status</label>
                                <div class="form-check">
                                    <input ${category.statusName === 'published' ? 'checked' : ''} type="radio" name="radios" class="form-check-input" id="status_published" required>
                                    <label class="form-check-label" for="status_published">Published</label>
                                </div>
                                <div class="form-check">
                                    <input ${category.statusName === 'draft' ? 'checked' : ''} type="radio" name="radios" class="form-check-input" id="status_draft" required>
                                    <label class="form-check-label" for="status_draft">Draft</label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                            <button type="reset" class="btn btn-secondary float-end">Reset</button>
                        </form>
                    </div>
                </div>
            </main>`;
    }
}