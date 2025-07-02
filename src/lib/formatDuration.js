export function formatDuration(minutes = 100) {
    const min = minutes % 60;
    const h = (minutes - min) / 60;

    let minText = min + ' minute ';
    if (min > 0) {
        minText += 's';
    }
    if (min > 1) {
        minText += 's';
    }
    
    let hourText = '';
    if (h > 0) {
        hourText = h + ' hour ';
    }
    if (h > 1) {
        hourText += 's';
    }

    return hourText + (hourText && minText ? '' : '') + minText;
}