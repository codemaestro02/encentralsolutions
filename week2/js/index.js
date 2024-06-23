document.addEventListener("DOMContentLoaded", () => {
	const itemForm = document.getElementById("itemForm");
	const submitBtn = document.getElementById("submitBtn");
	const resetBtn = document.getElementById("resetBtn");
	const dataTable = document
		.getElementById("dataTable")
		.getElementsByTagName("tbody")[0];

	// Load data from localStorage on page load
	loadData();

	// Enable or disable the submit button based on form validation
	itemForm.addEventListener("input", () => {
		submitBtn.disabled = !itemForm.checkValidity();
	});

	// Handle form submission
	itemForm.addEventListener("submit", (e) => {
		e.preventDefault();

		const id = document.getElementById("itemId").value;
		const name = document.getElementById("itemName").value;
		const price = document.getElementById("itemPrice").value;

		const item = { id, name, price };

		saveData(item);
		loadData();

		itemForm.reset();
		submitBtn.disabled = true;
	});

	// Clearing the localStorage Table
	resetBtn.addEventListener("click", (e) => {
		e.preventDefault();
		
		resetData();
		loadData();

		itemForm.reset();
		submitBtn.disabled = true;
	});

	function resetData(){
		localStorage.clear();

	}

	function loadData() {
		const items = JSON.parse(localStorage.getItem("items")) || [];
		dataTable.innerHTML = "";

		items.forEach((item, index) => {
			const row = dataTable.insertRow();
			row.insertCell(0).innerText = item.id;
			row.insertCell(1).innerText = item.name;
			row.insertCell(2).innerText = item.price;
		});
	}

	function saveData(newItem) {
		const items = JSON.parse(localStorage.getItem("items")) || [];
		const index = items.findIndex((item) => item.id === newItem.id);

		if (index !== -1) {
			items[index] = newItem; // Update existing item
		} else {
			items.push(newItem); // Add new item
		}

		localStorage.setItem("items", JSON.stringify(items));
	}
});
