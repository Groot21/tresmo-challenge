# Tresmo Challenge

**Herausforderungen bei der Umsetzung**

Besonders herausfordernd war die Implementierung des Services. Dazu gehörte zuallererst die Abgrenzungen zwischen Promises, Reactive Extensions und asynchroner Verarbeitung zu verstehen. 

Außerdem stellten das Styling und Layouting der Seiten für verschiedene Devices und Bildschirmgrößen große Herausforderungen dar. 
Dabei stellte sich besonders das Formatieren der Ländernamen auf der Übersichtsseite als schwierig heraus. Die Umsetzung im Projekt wurde ohne Verwendung von webkit durchgeführt, wodurch ebendiese noch Optimierungspotential besitzt.


**Optimierungsmöglichkeiten in der Anwendung**

Um die Anwendung zu optimieren, könnten beim Aufruf der Übersichtsseite - anstatt die Basisinformationen aller Länder zu laden - mittels Pagination nur die Basisinformationen der Länder geladen werden, die auf dem aktuellen Bildschirm angezeigt werden können. Bei Scrollen, Sortieren oder Filtern würden die Basisinformationen der weiter benötigten Länder erst dann nachgeladen.



**Anwendung starten**

1) `npm install`
2) `ng serve --open`
