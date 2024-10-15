# Aufgaben: JavaScript Fehlerbehebung

In dieser Übung sollst du den vorhandenen **JavaScript-Code** analysieren und die Fehler beheben. Unten findest du verschiedene Aufgaben, die du lösen musst, um die Einkaufsliste wieder funktionsfähig zu machen.

---

## 1. Falsche Selektoren reparieren

Im JavaScript-Code wird versucht, das **Add-Button**-Element und das Eingabefeld für neue Artikel zu selektieren. Leider wurden hier falsche Selektoren verwendet.

### Aufgabe:
- Ändere die Selektoren so, dass sie mit der richtigen **ID**-Referenz arbeiten.
  
  **Tipp**: Selektoren für ID's müssen mit einem `#` gekennzeichnet werden.

---

## 2. Leere Eingaben vermeiden

Der Code lässt aktuell zu, dass **leere Eingaben** hinzugefügt werden können. Das sollte verhindert werden, indem überprüft wird, ob die Eingabe nur aus Leerzeichen besteht.

### Aufgabe:
- Füge eine Methode hinzu, die die Eingabe auf **Leerzeichen** überprüft und sie ignoriert, wenn keine echte Eingabe erfolgt ist.

  **Tipp**: Verwende die Methode `.trim()`, um Leerzeichen zu entfernen.

---

## 3. Artikel zur Liste hinzufügen

Der JavaScript-Code verwendet aktuell die Methode `append()`, um neue Artikel zur Liste hinzuzufügen. Diese Methode funktioniert möglicherweise nicht in allen Browsern. Es sollte eine robustere Methode verwendet werden.

### Aufgabe:
- Ändere die Methode `append()` so, dass sie kompatibler ist und in allen gängigen Browsern funktioniert.
  
  **Tipp**: Verwende stattdessen `appendChild()`.

---

## 4. Artikel löschen

Die aktuelle Methode zum Löschen von Artikeln ist fehlerhaft. Es wird `item.remove` verwendet, aber dies wird nicht funktionieren, da die Methode falsch aufgerufen wird.

### Aufgabe:
- Repariere die **Löschfunktion**, damit Artikel korrekt aus der Liste entfernt werden.
  
  **Tipp**: Überprüfe, ob die Methode `remove()` richtig aufgerufen wird.

---

## 5. Eltern-Element korrekt referenzieren

Die Löschfunktion versucht aktuell, das **übergeordnete Element** eines Artikels zu entfernen. Es wird jedoch die falsche Methode verwendet, um auf dieses übergeordnete Element zuzugreifen.

### Aufgabe:
- Stelle sicher, dass das richtige **Parent-Element** (übergeordnete Element) entfernt wird, wenn auf den "Löschen"-Button geklickt wird.
  
  **Tipp**: Verwende `parentElement` statt `parent`, um das richtige übergeordnete Element zu referenzieren.

---

## 6. Zusätzliche Buttons reparieren

Die vorhandenen **"Löschen"-Buttons** bei den bereits vorhandenen Artikeln funktionieren nicht korrekt. Die Buttons sollten ebenfalls eine funktionierende Löschfunktion haben.

### Aufgabe:
- Füge den vorhandenen **Löschen-Buttons** eine Löschfunktion hinzu, sodass sie die Artikel entfernen können.

  **Tipp**: Überprüfe die Schleife, die durch alle Lösch-Buttons geht, und sorge dafür, dass jedes Eltern-Element korrekt entfernt wird.

---

Viel Erfolg beim Beheben der Fehler!
