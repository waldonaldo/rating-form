document.addEventListener('DOMContentLoaded', function () {
    const searchResultType = document.getElementById('search-result-type');
    const scrbNote = document.getElementById('scrb-note');

    searchResultType.addEventListener('change', function () {
        if (searchResultType.value === 'SCRB') {
            scrbNote.style.display = 'block';
        } else {
            scrbNote.style.display = 'none';
        }
    });
});
