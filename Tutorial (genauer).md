# Detaillierte Anleitung: Einkaufsliste

Dieses Tutorial führt dich Schritt für Schritt durch das Projekt „Einkaufsliste“. Hier erfährst du, wie du das GitHub-Repository klonst, HTML und CSS bearbeitest, und wie du Änderungen im Browser überprüfst. Verwende die bereitgestellten Screenshots, um den Prozess zu verfolgen.

---

## 1. Repository klonen (mit SSH)

1. **GitHub öffnen**:
   - Öffne deinen Webbrowser und gehe auf [GitLab](https://gitlab.liip.ch/andrin.heinis/ai-shopping-list).
   - Klicke auf den Link oder gib die URL in die Adressleiste deines Browsers ein und drücke **Enter**.

   ![GitHub öffnen](./screenshot_1.png)

2. **SSH-URL kopieren**:
   - Auf der GitHub-Seite findest du den **grünen Code-Button**. Klicke mit der **linken Maustaste** darauf.
   - Es öffnet sich ein kleines Fenster. Wähle dort den Tab **SSH** aus (falls er nicht bereits ausgewählt ist).
   - Klicke auf das **Kopieren-Symbol** neben der SSH-URL, um die URL in die Zwischenablage zu kopieren.

   ![SSH-URL kopieren](./screenshot_2.png)

3. **Visual Studio Code öffnen**:
   - Öffne **Visual Studio Code** auf deinem Computer. Falls es noch nicht geöffnet ist, gehe zum Startmenü (Windows) oder zum Launchpad (Mac) und suche nach **Visual Studio Code**. Klicke darauf, um es zu starten.

   ![VSCode öffnen](./screenshot_3.png)

4. **Terminal in Visual Studio Code öffnen**:
   - Um das Terminal zu öffnen, klicke oben im Menü auf **Terminal** → **Neues Terminal**.
   - Alternativ kannst du den Shortcut `Strg + ö` (Windows) oder `Cmd + ^` (Mac) verwenden, um das Terminal zu öffnen.

   ![Terminal öffnen](./screenshot_4.png)

5. **Repository klonen**:
   - Gib im Terminal folgenden Befehl ein:
     ```bash
     git clone [SSH-URL]
     ```
     - Ersetze `[SSH-URL]` mit der kopierten SSH-URL aus Schritt 2. 
   - Drücke **Enter** auf der Tastatur, um den Klonvorgang zu starten.

   ![Repository klonen](./screenshot_5.png)

---

## 2. Projekt in Visual Studio Code öffnen

1. **Zum geklonten Ordner wechseln**:
   - Gib im Terminal folgenden Befehl ein, um in den geklonten Ordner zu wechseln:
     ```bash
     cd AI-Shopping-List
     ```
   - Drücke **Enter**, um den Ordner zu öffnen.

   ![In Ordner wechseln](./screenshot_6.png)

2. **Ordner in Visual Studio Code öffnen**:
   - Klicke oben im Menü von Visual Studio Code auf **Datei** → **Ordner öffnen**.
   - Navigiere im neuen Fenster zu dem Ordner `AI-Shopping-List`, den du gerade geklont hast, und klicke auf **Ordner auswählen**.

   ![Ordner in VSCode öffnen](./screenshot_7.png) 

---

## 3. `index.html` im Browser anzeigen

1. **Datei `index.html` suchen**:
   - Schau im linken Bereich von Visual Studio Code (im sogenannten „Dateibaum“). Du solltest dort die geklonten Dateien sehen.
   - Wenn du den Ordner noch nicht geöffnet hast, klicke auf den kleinen Pfeil neben dem Ordnernamen, um die Dateien anzuzeigen.

   ![Dateibaum öffnen](./screenshot_8.png)

2. **Im Standardbrowser öffnen**:
   - Finde die Datei `index.html` im Dateibaum.
   - Mache einen **Rechtsklick** auf die Datei `index.html`.
   - Wähle im Menü die Option **"Im Standardbrowser öffnen"**.

   ![Im Browser öffnen](./screenshot_9.png)

   **Hinweis**: Falls diese Option nicht erscheint, kannst du die Datei auch manuell öffnen. Suche im Datei-Explorer oder Finder auf deinem Computer nach der Datei `index.html` und öffne sie im Browser (z.B. durch Doppelklick).

---

## 4. Änderungen an der Einkaufsliste vornehmen

### Aufgabe: Füge einen neuen Artikel zur Einkaufsliste hinzu

1. **Datei `index.html` öffnen**:
   - Finde die Datei `index.html` im Dateibaum.
   - Mache einen **Linksklick** auf die Datei, um sie zu öffnen.

   ![Datei öffnen](./screenshot_10.png)

2. **Artikel hinzufügen**:
   - Finde den Abschnitt mit der Liste der Artikel, der folgendermaßen aussieht:
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
   - Füge einen neuen Artikel unter dem letzten `<li>`-Tag hinzu, z.B.:
     ```html
     <li>
         <span class="item-name">Tomaten</span>
     </li>
     ```

3. **Änderungen speichern**:
   - Klicke oben im Visual Studio Code-Fenster auf **Datei** → **Speichern** (oder drücke `Strg + S` auf der Tastatur).

4. **Webseite aktualisieren**:
   - Gehe zum Browser, in dem du die Einkaufsliste geöffnet hast.
   - Drücke **F5** oder klicke auf den **Aktualisieren-Button** deines Browsers, um die neuen Artikel zu sehen.

---

## 5. CSS ändern: Passe das Aussehen an

### Aufgabe: Ändere die Hintergrundfarbe der Seite

1. **Öffne die Datei** `style.css`:
   - Mache einen **Linksklick** auf die Datei `style.css` im Dateibaum.

   ![CSS öffnen](./screenshot_11.png)

2. **Hintergrundfarbe ändern**:
   - Finde den Abschnitt, der das `body`-Tag stylt. Er sieht so aus:
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
   - Ändere die Hintergrundfarbe auf einen hellblauen Farbton, indem du die Zeile `background-color` folgendermaßen anpasst:
     ```css
     background-color: #add8e6;
     ```

3. **Änderungen speichern**:
   - Klicke oben im Visual Studio Code-Fenster auf **Datei** → **Speichern** (oder drücke `Strg + S` auf der Tastatur).

4. **Webseite aktualisieren**:
   - Gehe zurück zu deinem Browser und drücke **F5** oder klicke auf den **Aktualisieren-Button**, um die Änderung zu sehen.

---

Falls du weiterhin Hilfe brauchst, wende dich an den Betreuer.
