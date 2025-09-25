# Hood Gild Novel — Minimal Server

This repository contains a minimal Node/Express server that serves static files and a tiny health endpoint.

Getting started

1. Install dependencies:

   npm install

2. Start the server:

   npm start

3. Open http://localhost:3000 in your browser to see `home.html`. Check http://localhost:3000/api/health for a JSON health response.

Notes

- Edit `index.js` to add APIs or point static serving to a different folder.
- Use `npm run start:dev` if you have `nodemon` installed globally or want auto-reload during development.

Running without npm / Express (optional)

If you don't have npm or prefer not to install dependencies, there's a zero-dependency server included: `server.js`.
Run it with a plain Node runtime (Node 12+):

   node server.js

This serves the same `home.html` at http://localhost:3000 and exposes `/api/health` without requiring any packages.
