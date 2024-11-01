document.addEventListener('DOMContentLoaded', function () {
    // Existing code for SCRB note
    const searchResultType = document.getElementById('search-result-type');
    const scrbNote = document.getElementById('scrb-note');
    const wsrbQuestions = document.getElementById('wsrb-questions'); // Add reference to WSRB questions container

    searchResultType.addEventListener('change', function () {
        if (searchResultType.value === 'SCRB') {
            scrbNote.style.display = 'block';
            wsrbQuestions.style.display = 'none'; // Hide WSRB questions if SCRB is selected
        } else if (searchResultType.value === 'WSRB') {
            scrbNote.style.display = 'none'; // Hide SCRB note if WSRB is selected
            wsrbQuestions.style.display = 'block';
        } else {
            // Hide both SCRB note and WSRB questions if neither SCRB nor WSRB is selected
            scrbNote.style.display = 'none';
            wsrbQuestions.style.display = 'none';
        }
    });
});

// Clear form function 
function clearForm() {
    location.reload();
}

//slider function(S)
const slider = document.getElementById('mc-quality-slider');
slider.addEventListener('input', function() {
    const labels = ["N/A", "Lowest", "Low", "Medium", "High", "Highest"];
    slider.title = labels[slider.value];
});
