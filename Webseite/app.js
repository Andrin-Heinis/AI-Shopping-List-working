let apiKey = '';

async function loadApiKey() {
    try {
        const response = await fetch('/ignore/key.env');
        const text = await response.text();
        const lines = text.split('\n');

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
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: `Gib drei verschiedene essbare Produkte, die gut zu "${product}" passen. Nur kurze Begriffe wie "Tomate, Öl, Salz".` }
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
        console.log("AI-Antwort:", data);

        const suggestions = data.choices[0].message.content.trim().split("\n");
        return suggestions.map(s => s.trim());
    } catch (error) {
        console.error("Fehler bei der Anfrage:", error);
        return ["Fehler bei der Empfehlung."];
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

async function showSuggestions(itemText) {
    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "";

    const suggestions = await fetchAiSuggestions(itemText);

    if (suggestions.length > 0 && suggestions[0] !== "Fehler bei der Empfehlung.") {
        const cleanSuggestions = suggestions
            .join(", ")
            .split(",")
            .map(suggestion => 
                suggestion
                    .trim()
                    .replace(/^\d+\.\s*/, "")
                    .replace(/\.$/, "")
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


function addItem() {
    const itemInput = document.getElementById("itemInput");
    const itemText = itemInput.value.trim();
    if (itemText !== "") {
        addListItem(itemText);
        showSuggestions(itemText);
        itemInput.value = "";
    }
}

window.onload = async () => {
    await loadApiKey();
    console.log("App gestartet.");
};
