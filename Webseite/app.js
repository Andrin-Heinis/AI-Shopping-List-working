let suggestionsData = {};

function loadSuggestions() {
    fetch('./suggestionsData.json') // Pfad zur JSON-Datei
        .then(response => {
            if (!response.ok) {
                throw new Error('JSON file not found');
            }
            return response.json();
        })
        .then(data => {
            suggestionsData = data;
        })
        .catch(error => console.error('Error loading suggestions:', error));
}

function addItem() {
    const itemInput = document.getElementById("itemInput");
    const itemText = itemInput.value.trim();
    if (itemText !== "") {
        addListItem(itemText);
        showSuggestions(itemText);
        itemInput.value = "";
    }
}

function addListItem(itemText) {
    const listItem = document.createElement("li");

    const itemSpan = document.createElement("span");
    itemSpan.textContent = itemText;
    listItem.appendChild(itemSpan);

    const checkButton = document.createElement("button");
    checkButton.textContent = "Abhaken";
    checkButton.onclick = () => itemSpan.classList.toggle("checked");
    listItem.appendChild(checkButton);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Entfernen";
    removeButton.onclick = () => listItem.remove();
    listItem.appendChild(removeButton);

    document.getElementById("shoppingList").appendChild(listItem);
}

function showSuggestions(itemText) {
    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "";

    const suggestions = suggestionsData[itemText] || [];

    if (suggestions.length > 0) {
        suggestions.forEach(suggestion => {
            const button = document.createElement("button");
            button.textContent = suggestion;
            button.onclick = () => addListItem(suggestion);
            suggestionsDiv.appendChild(button);
        });
    } else {
        const noSuggestion = document.createElement("p");
        noSuggestion.textContent = "Keine Empfehlungen verfügbar";
        suggestionsDiv.appendChild(noSuggestion);
    }
}

window.onload = loadSuggestions;
