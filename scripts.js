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

    // New code to toggle WSRB questions
    const wsrbQuestions = document.getElementById('wsrb-questions');  // Add reference to WSRB questions container

    searchResultType.addEventListener('change', function () {
        if (searchResultType.value === 'WSRB') {
            wsrbQuestions.style.display = 'block';
        } else {
            wsrbQuestions.style.display = 'none';
        }
    });
});
