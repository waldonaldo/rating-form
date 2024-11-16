// JavaScript to dynamically load content from external HTML files
document.getElementById("search-result-type").addEventListener("change", async function () {
	const dynamicContent = document.getElementById("dynamic-content");
	const selectedValue = this.value;

	// Clear the dynamic content first
	dynamicContent.innerHTML = "Loading...";

	try {
		let response;

		// Load appropriate questions based on the selection
		switch (selectedValue) {
			case "WSRB":
				response = await fetch("content/WSRB.html");
				break;
			case "SCRB":
				response = await fetch("content/SCRB.html");
				break;
			default:
				dynamicContent.innerHTML = `
					<p>No specific questions for the selected type.</p>`;
				return; // Stop execution for default case
		}

		// Check if the response is successful
		if (response.ok) {
			const content = await response.text();
			dynamicContent.innerHTML = content;
		} else {
			dynamicContent.innerHTML = `<p>Error loading content. Please try again later.</p>`;
		}
	} catch (error) {
		console.error("Error fetching content:", error);
		dynamicContent.innerHTML = `<p>Error loading content. Please try again later.</p>`;
	}
});

// Clear form function
function clearForm() {
	document.getElementById("rating-form").reset();
	document.getElementById("dynamic-content").innerHTML = `
		<p>Please select an option to load the corresponding questions.</p>`;
}
