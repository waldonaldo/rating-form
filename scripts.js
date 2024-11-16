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

// dynamically load 
document.getElementById("search-result-type").addEventListener("change", function () {
    const selectedValue = this.value;
    const contentDiv = document.getElementById("dynamic-content");

    if (selectedValue === "WSRB") {
        fetch("WSRB.html")
            .then(response => {
                if (!response.ok) throw new Error("Content not found.");
                return response.text();
            })
            .then(html => {
                contentDiv.innerHTML = html;
            })
            .catch(error => {
                contentDiv.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            });
    } else {
        contentDiv.innerHTML = `<p>Please select an option to load the corresponding questions.</p>`;
    }
});
