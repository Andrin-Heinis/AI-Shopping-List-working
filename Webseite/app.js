let apiKey = '';

async function loadApiKey() {
    try {
        const response = await fetch('/ignore/key.env');
        const text = await response.text();
        const lines = text.split('\n');

        // Extrahiere den API-Key
        lines.forEach(line => {
            if (line.startsWith('API_KEY=')) {
                apiKey = line.split('=')[1].trim();
            }
        });

        console.log("API-Key geladen:", apiKey);
    } catch (error) {
        console.error("Fehler beim Laden der API-Key-Datei:", error);
    }
}

async function fetchAiSuggestions(product) {
    if (!apiKey) {
        alert("API-Key nicht geladen. Bitte sicherstellen, dass die key.env-Datei verfügbar ist.");
        console.error("API-Key fehlt.");
        return ["Fehler: API-Key fehlt"];
    }

    const url = 'https://api.openai.com/v1/chat/completions';
    const body = {
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: `Empfehle drei passende Produkte für "${product}".` }
        ],
        max_tokens: 50
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error("Fehler beim Abrufen der Vorschläge! Status: " + response.status);
        }

        const data = await response.json();
        console.log("API-Antwort:", data);

        return data.choices[0].message.content.trim().split("\n");
    } catch (error) {
        console.error("Fehler bei der Anfrage:", error);
        return ["Fehler bei der Empfehlung."];
    }
}

async function showSuggestions(itemText) {
    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "";

    const suggestions = await fetchAiSuggestions(itemText);

    if (suggestions.length > 0 && suggestions[0] !== "Fehler bei der Empfehlung.") {
        suggestions.forEach(suggestion => {
            const button = document.createElement("button");
            button.textContent = suggestion;
            button.onclick = () => {
                addListItem(suggestion);
                showSuggestions(suggestion);
            };
            suggestionsDiv.appendChild(button);
        });
    } else {
        const noSuggestion = document.createElement("p");
        noSuggestion.textContent = "Keine Empfehlungen verfügbar";
        suggestionsDiv.appendChild(noSuggestion);
    }
}

function addItem() {
    const itemInput = document.getElementById("itemInput");
    const itemText = itemInput.value.trim();
    if (itemText !== "") {
        addListItem(itemText);
        showSuggestions(itemText); // Vorschläge für das aktuelle Produkt anzeigen
        itemInput.value = "";
    }
}

function addListItem(itemText) {
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

    document.getElementById("shoppingList").appendChild(listItem);

    showSuggestions(itemText);
}

window.onload = async () => {
    await loadApiKey(); // API-Key wird beim Laden der Seite geladen
    console.log("App gestartet.");
};
