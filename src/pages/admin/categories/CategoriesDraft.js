import { getDraftCategories } from "../../../db/getDraftCategories.js";
import { AdminTemplate } from "../../../templates/AdminTemplate.js";
import { tableCategories } from "../../../ui/tables/tableCategories.js";

export class PageAdminCategoriesDraft extends AdminTemplate {
    async main() {
        const data = await getDraftCategories();

        console.log(data);


        return `
            <main>
               <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="display-5">Draft categories</h1>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            ${tableCategories(data)}
                        </div>
                    </div>
                </div>
            </main>`;
    }
}