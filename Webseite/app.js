async function fetchAiSuggestionsFromApi(product) {
    const OPENAI_API_KEY = "API-KEY"; //ENTER YOUR API KEY IN HERE
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "Du bist ein Einkaufsassistent. Gib nur drei kurze Alternativen im Stichwortstil, getrennt mit Komma." },
                    { role: "user", content: `Was sind gute Alternativen oder Ergänzungen für ${product}?` }
                ],
                temperature: 0.7
            })
        });

        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content || "Keine Vorschläge gefunden.";
        return reply.split("\n").filter(line => line.trim() !== "");
    } catch (error) {
        console.error("Fehler bei API-Vorschlägen:", error);
        return ["Fehler bei der Empfehlung."];
    }
}

async function showSuggestions(itemText) {
    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "";

    const suggestions = await fetchAiSuggestionsFromApi(itemText);

    suggestions.forEach(raw => {
        const parts = raw.split(",");
        parts.forEach(part => {
            const suggestion = part.trim();
            if (suggestion) {
                const button = document.createElement("button");
                button.textContent = suggestion;
                button.onclick = () => addListItem(suggestion);
                suggestionsDiv.appendChild(button);
            }
        });
    });
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
