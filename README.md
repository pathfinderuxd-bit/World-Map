# World Map: Explorer's Chart

An old-world chart that grows into a logbook of the places you have travelled.

- Add places by clicking the map, typing latitude and longitude, or typing a place name.
- Place names fill in from the coordinates (OpenStreetMap Nominatim) and can be typed over.
- Stops are joined by curved dashed routes in date order. Hover or tap a logbook entry to fly to it.
- Entries are saved in the browser. Export and import them as JSON.
- Poster PDF (A4, A3, A2) for printing and framing.
- Installable on a phone: open the page over https and use Add to Home Screen.

## Run it

Open `index.html` in a browser, or serve the folder over https. GitHub Pages works: Settings, Pages, deploy from the `main` branch root.

## Notes

- Coastlines are simplified and hand-drawn, so they look rough at high zoom.
- No build step. `d3.min.js` is D3 v7 (ISC licence).
