export function placeholder(title, list) {
    let HTML = '';

    if (Array.isArray(list)) {
        for (const item of list) {
        HTML += `<li>${item}</li>`;
   }

   return `
    <div class="alert alert-info" role="alert">`
}
}