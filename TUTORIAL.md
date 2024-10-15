# Tutorial (Lösungen)

Falls du nicht weiterkommst, hier sind Hinweise und Lösungen:

1. **Hintergrundfarbe reparieren**:
   - In der CSS-Datei gibt es einen Fehler bei der Hintergrundfarbe. Das Wort "wrongcolor" ist kein gültiger Farbwert. Ändere es z.B. zu "lightgray".
   ```css
   body {
       background-color: lightgray;
   }
Schriftart korrigieren:

Der Wert "sansserif" ist nicht korrekt. Es sollte "sans-serif" heißen.
css
Copy code
body {
    font-family: sans-serif;
}
Überschrift richtig ausrichten:

Der Wert "lefttt" ist nicht korrekt. Ersetze ihn durch "left", um die Überschrift korrekt links auszurichten.
css
Copy code
h1 {
    text-align: left;
}
Schriftgröße des Absatzes anpassen:

Es fehlt der Doppelpunkt bei "fontsize" und die Einheit für die Schriftgröße. Ändere es wie folgt:
css
Copy code
p {
    font-size: 16px;
}
Fußzeile zentrieren:

Der Wert "centered" ist kein gültiger Wert. Ändere ihn zu "center", um die Fußzeile zu zentrieren.
css
Copy code
footer {
    text-align: center;
}
Fehlende Einheiten hinzufügen:

In der CSS-Datei fehlen Einheiten wie px bei den Abständen oder Schriftgrößen. Stelle sicher, dass diese korrekt hinzugefügt sind, z.B.:
css
Copy code
p {
    margin-left: 20px;
}
Viel Erfolg beim Flicken der Webseite!