# Erweiterte Einkaufsliste: JavaScript hinzufügen

In diesem Tutorial wirst du lernen, wie du JavaScript benutzt, um die Einkaufsliste interaktiv zu machen. Du wirst in der Lage sein, Artikel hinzuzufügen und zu löschen.

---

## 1. Repository klonen (mit SSH)
Falls du das Repository noch nicht geklont hast, folge den Schritten aus dem [TUTORIAL.md](./TUTORIAL.md).

```bash
git clone git@github.com:Andrin-Heinis/AI-Shopping-List.git
2. Neue JavaScript-Datei erstellen
JavaScript-Datei hinzufügen:

Erstelle eine neue Datei namens script.js im Projektordner.
Öffne Visual Studio Code und klicke mit der rechten Maustaste im Dateibaum auf den Projektordner.
Wähle "Neue Datei" und nenne sie script.js.
JavaScript in HTML einbinden:

Öffne die Datei index.html.
Füge am Ende des <body>-Tags die folgende Zeile hinzu, um das JavaScript einzubinden:
html
Copy code
<script src="script.js"></script>
3. HTML für die interaktive Einkaufsliste anpassen
Formular für neue Artikel hinzufügen:
Öffne index.html und füge das folgende Formular direkt unter der Überschrift <h1> hinzu:
html
Copy code
<div class="einkaufsliste">
    <ul id="item-list">
        <li>
            <span class="item-name">Milch</span>
            <button class="delete-btn">Löschen</button>
        </li>
        <li>
            <span class="item-name">Brot</span>
            <button class="delete-btn">Löschen</button>
        </li>
        <li>
            <span class="item-name">Eier</span>
            <button class="delete-btn">Löschen</button>
        </li>
    </ul>

    <!-- Formular zum Hinzufügen neuer Artikel -->
    <div class="hinzufuegen-container">
        <input type="text" id="new-item" placeholder="Neuer Artikel">
        <button id="add-btn">Hinzufügen</button>
    </div>
</div>
4. JavaScript hinzufügen
Öffne nun die Datei script.js und füge den folgenden JavaScript-Code ein, um die Funktionalität zum Hinzufügen und Löschen von Artikeln zu erstellen.

javascript
Copy code
// Neue Artikel hinzufügen
const addButton = document.getElementById('add-btn');
const itemList = document.getElementById('item-list');
const newItemInput = document.getElementById('new-item');

addButton.addEventListener('click', function () {
    const newItem = newItemInput.value.trim();
    if (newItem !== '') {
        const li = document.createElement('li');
        li.innerHTML = `<span class="item-name">${newItem}</span> <button class="delete-btn">Löschen</button>`;
        itemList.appendChild(li);
        newItemInput.value = ''; // Eingabefeld leeren
        addDeleteEvent(li);
    }
});

// Artikel löschen
function addDeleteEvent(item) {
    const deleteButton = item.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function () {
        item.remove();
    });
}

// Bereits existierende Artikel löschen
document.querySelectorAll('.delete-btn').forEach(function (button) {
    button.addEventListener('click', function () {
        button.parentElement.remove();
    });
});
5. Styling überprüfen (optional)
Das grundlegende Styling bleibt unverändert, aber du kannst bei Bedarf zusätzliche CSS-Regeln hinzufügen. Öffne style.css und überprüfe, ob du das Layout anpassen möchtest.

6. Änderungen testen
Speichern:

Stelle sicher, dass du alle Änderungen in index.html, style.css und script.js gespeichert hast.
Seite im Browser öffnen:

Öffne die Datei index.html im Browser (Rechtsklick auf die Datei in Visual Studio Code und "Im Standardbrowser öffnen").
Interaktive Funktionen testen:

Gib einen neuen Artikel im Eingabefeld ein und klicke auf den Button Hinzufügen, um ihn zur Liste hinzuzufügen.
Verwende den Löschen-Button neben jedem Artikel, um ihn aus der Liste zu entfernen.
Zusammenfassung
In diesem erweiterten Tutorial hast du gelernt, wie du mit JavaScript die Einkaufsliste interaktiv machst. Du kannst jetzt Artikel hinzufügen und löschen, was die Liste dynamischer und benutzerfreundlicher macht. Probiere, weitere Funktionen hinzuzufügen, wie z.B. das Speichern der Liste im lokalen Speicher des Browsers.