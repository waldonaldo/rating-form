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
    const form = document.querySelector('.form-container');  // Adjust this selector to target your form container
    const inputs = form.querySelectorAll('input, select, textarea');

    inputs.forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
        } else {
            input.value = '';
        }
    });
}
