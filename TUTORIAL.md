### **TUTORIAL.md (Einfach)**


# Erste Schritte: Einkaufsliste

## 1. Repository klonen

1. Öffne **GitHub** mit diesem Link: https://github.com/Andrin-Heinis/AI-Shopping-List.
2. Klicke auf den grünen **Code**-Button und wähle **SSH**.
3. Kopiere die SSH-URL des Repositories.
4. Öffne **Visual Studio Code** auf deinem Computer.
5. Öffne das **Terminal**:
   - Klicke auf **Terminal** → **Neues Terminal** oder benutze den Shortcut `Strg + ö` (Windows) bzw. `Cmd ⌘ + ^` (Mac).
6. Gib im Terminal folgenden Befehl ein, um das Repository zu klonen:

   ```bash
   git clone [LINK]
   ```
   - Ersetze `[LINK]` mit der SSH-URL, die du von GitHub kopiert hast.
7. Drücke **Enter**, um das Repository zu klonen.

---

## 2. Projekt in Visual Studio Code öffnen

1. Gehe im Terminal in den geklonten Ordner, indem du folgenden Befehl eingibst:

   ```bash
   cd AI-Shopping-List
   ```
2. Öffne den geklonten Ordner in Visual Studio Code:
   - Klicke oben im Menü auf **Datei** → **Ordner öffnen...**.
   - Wähle den Ordner `AI-Shopping-List` aus und klicke auf **Öffnen**.

---

## 3. `index.html` im Browser anzeigen

1. Suche im Dateibaum auf der linken Seite in Visual Studio Code die Datei `index.html`.
2. **Rechtsklick** auf die Datei `index.html` und wähle **"Im Standardbrowser öffnen"**.
   - Alternativ kannst du die Datei im Datei-Explorer finden und doppelklicken, um sie im Browser zu öffnen.

---

## 4. Änderungen an der Einkaufsliste vornehmen

### Aufgabe: Füge einen neuen Artikel zur Einkaufsliste hinzu

1. Öffne die Datei `index.html` in Visual Studio Code.
2. Finde den Abschnitt mit der Liste der Einkäufe, der so aussieht:

   ```html
   <ul>
       <li>
           <span class="item-name">Milch</span>
       </li>
       <li>
           <span class="item-name">Brot</span>
       </li>
       <li>
           <span class="item-name">Eier</span>
       </li>
   </ul>
   ```
3. Füge unter dem letzten `<li>`-Tag einen neuen Artikel hinzu, z.B. "Tomaten":

   ```html
   <li>
       <span class="item-name">Tomaten</span>
   </li>
   ```
4. Speichere die Datei mit `Strg + S` (Windows) bzw. `Cmd ⌘ + S` (Mac)
5. Lade die Webseite im Browser neu, um die Änderung zu sehen.

---

## 5. CSS ändern: Passe das Aussehen an

### Aufgabe: Ändere die Hintergrundfarbe der Seite

1. Öffne die Datei `style.css` in Visual Studio Code.
2. Finde den Abschnitt, der den `body`-Tag stylt:

   ```css
   body {
       font-family: Arial, sans-serif;
       background-color: #f9f9f9;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       height: 100vh;
       margin: 0;
   }
   ```
3. Ändere die Hintergrundfarbe, z.B. zu einem hellblauen Farbton:

   ```css
   background-color: #add8e6;
   ```
4. Speichere die Datei.
5. Lade die Webseite im Browser neu, um die Änderung zu sehen.
6. Falls alles geklappt hat, dann experimentiere ein wenig herum, und versuche vielleicht sogar noch weitere Sachen hinzufügen.

---

### Weiterführende Hilfe:
Falls du nicht weiterkommst oder detaillierte Erklärungen benötigst, öffne das genauere Tutorial: [Tutorial (genauer)](/Tutorial%20(genauer).md).