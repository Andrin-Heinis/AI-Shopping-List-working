# Tutorial (Lösungen)

Falls du nicht weiterkommst, hier sind Hinweise und Lösungen:

1. **Hintergrundfarbe reparieren**:
   - In der CSS-Datei gibt es einen Fehler bei der Hintergrundfarbe. Das Wort `wrongcolor` ist kein gültiger Farbwert. Ändere es z.B. zu `lightgray`.

   Die richtige Lösung:
   - `background-color: lightgray;`

2. **Schriftart korrigieren**:
   - Der Wert `sansserif` ist nicht korrekt. Es sollte `sans-serif` heissen.

   Die richtige Lösung:
   - `font-family: sans-serif;`

3. **Überschrift richtig ausrichten**:
   - Der Wert `lefttt` ist nicht korrekt. Ersetze ihn durch `left`, um die Überschrift korrekt links auszurichten.

   Die richtige Lösung:
   - `text-align: left;`

4. **Schriftgrösse des Absatzes anpassen**:
   - Es fehlt der Doppelpunkt bei `fontsize` und die Einheit für die Schriftgrösse. Ändere es wie folgt:

   Die richtige Lösung:
   - `font-size: 16px;`

5. **Fusszeile zentrieren**:
   - Der Wert `centered` ist kein gültiger Wert. Ändere ihn zu `center`, um die Fusszeile zu zentrieren.

   Die richtige Lösung:
   - `text-align: center;`

6. **Fehlende Einheiten hinzufügen**:
   - In der CSS-Datei fehlen Einheiten wie `px` bei den Abständen oder Schriftgrössen. Stelle sicher, dass diese korrekt hinzugefügt sind.

   Die richtige Lösung:
   - `margin-left: 20px;`

<br>
<br>
<br>

# Tutorial (Erweiterte Lösungen)

## 1. Falsche Selektoren reparieren:
Der Selektor `addbutton` ist nicht korrekt. Ersetze ihn durch den richtigen Selektor für die ID.

**Die richtige Lösung:**

```javascript
document.querySelector('#add-button');
```

## 2. Leere Eingaben vermeiden:
Der Code lässt leere Eingaben zu. Füge eine Überprüfung hinzu, um sicherzustellen, dass die Eingabe nicht nur Leerzeichen enthält.

Die richtige Lösung:

```javascript 
if (inputField.value.trim() === '') {
    alert('Leere Eingaben sind nicht erlaubt!');
    return;
}
```

## 3. Artikel zur Liste hinzufügen:
Die Funktion zum Hinzufügen eines Artikels funktioniert nicht korrekt. Stelle sicher, dass der Artikel in die Liste eingefügt wird.

Die richtige Lösung:

```javascript
const newItem = document.createElement('li');
newItem.textContent = inputField.value;
itemList.appendChild(newItem);
```

## 4. Artikel löschen:
Die Löschfunktion funktioniert nicht korrekt, weil die Methode falsch aufgerufen wird.

Die richtige Lösung:

```javascript
deleteButton.addEventListener('click', function() {
    this.parentElement.remove();
});
```

## 5. Eltern-Element korrekt referenzieren:
Die Löschfunktion verwendet die falsche Methode, um auf das übergeordnete Element zuzugreifen.

Die richtige Lösung:

```javascript
button.parentElement.remove();
```


## 6. Zusätzliche Buttons reparieren:
Füge den vorhandenen Löschen-Buttons eine Löschfunktion hinzu.

Die richtige Lösung:

```javascript
deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.remove();
    });
});
```
