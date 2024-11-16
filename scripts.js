// JavaScript to dynamically load content based on selection
document.getElementById("search-result-type").addEventListener("change", function () {
	const dynamicContent = document.getElementById("dynamic-content");
	const selectedValue = this.value;

	// Clear the dynamic content first
	dynamicContent.innerHTML = "";

	// Load appropriate questions based on the selection
	switch (selectedValue) {
		case "WSRB":
			dynamicContent.innerHTML = `
				<h3>Additional Questions for WSRB</h3>
				<p>Placeholder for WSRB-specific questions.</p>`;
			break;
		case "SCRB":
			dynamicContent.innerHTML = `
				<h3>Additional Questions for SCRB</h3>
				<p>Placeholder for SCRB-specific questions.</p>`;
			break;
		default:
			dynamicContent.innerHTML = `
				<p>No specific questions for the selected type.</p>`;
			break;
	}
});

// Clear form function
function clearForm() {
	document.getElementById("rating-form").reset();
	document.getElementById("dynamic-content").innerHTML = `
		<p>Please select an option to load the corresponding questions.</p>`;
}
