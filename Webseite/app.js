async function fetchAiSuggestionsFromJson(product) {
    try {
        const response = await fetch('/ignore/suggestions.json');
        if (!response.ok) {
            throw new Error("Fehler beim Laden der JSON-Datei: " + response.status);
        }

        const data = await response.json();

        if (!data[product]) {
            console.warn(`Keine Vorschläge für das Produkt "${product}" gefunden.`);
            return ["Keine Vorschläge verfügbar"];
        }

        return data[product];
    } catch (error) {
        console.error("Fehler beim Abrufen der Vorschläge aus der JSON-Datei:", error);
        return ["Fehler bei der Empfehlung."];
    }
}

async function showSuggestions(itemText) {
    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "";

    const suggestions = await fetchAiSuggestionsFromJson(itemText);

    if (suggestions.length > 0 && suggestions[0] !== "Keine Vorschläge verfügbar") {
        const cleanSuggestions = suggestions.map(suggestion =>
            suggestion.trim().replace(/^\d+\.\s*/, "").replace(/\.$/, "")
        );

        cleanSuggestions.forEach(suggestion => {
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

function addListItem(itemText) {
    const shoppingList = document.getElementById("shoppingList");

    const listItem = document.createElement("li");

    const itemSpan = document.createElement("span");
    itemSpan.textContent = itemText;
    listItem.appendChild(itemSpan);

    const checkButton = document.createElement("button");
    checkButton.classList.add("checkButton");
    const checkIcon = document.createElement("img");
    checkIcon.src = "/ignore/check.png";
    checkIcon.alt = "Check";
    checkIcon.style.width = "20px";
    checkIcon.style.height = "20px";
    checkButton.appendChild(checkIcon);
    checkButton.onclick = () => itemSpan.classList.toggle("checked");
    listItem.appendChild(checkButton);

    const removeButton = document.createElement("button");
    const removeIcon = document.createElement("img");
    removeIcon.src = "/ignore/remove.png";
    removeIcon.alt = "Remove";
    removeIcon.style.width = "20px";
    removeIcon.style.height = "20px";
    removeButton.appendChild(removeIcon);
    removeButton.onclick = () => listItem.remove();
    listItem.appendChild(removeButton);

    shoppingList.appendChild(listItem);
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

window.onload = () => {
    console.log("App gestartet.");
};

