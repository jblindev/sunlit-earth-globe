# Sunlit Earth Globe — PWA (GitHub Pages)

This repo hosts an installable PWA showing a 3D Earth with a live/adjustable sunlight terminator.

## Deploy on GitHub Pages
1. Create a new repo (Public is fine).
2. Upload these files (or push via Git).
3. In the repo: **Settings → Pages**.
   - **Source:** Deploy from branch
   - **Branch:** `main` (root `/`)
4. Wait ~1 minute. Your app will be live at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## Install
- Open the link in Chrome → Click **Install** in the address bar (or menu → Install).
- Inside the app, click **Texture…** to select an equirectangular Earth map (e.g., 2048×1024 JPG/PNG). It saves locally for offline use.

## Notes
- Service Worker caches CDN files on first load for offline playback.
- If you prefer **no CDN dependencies**, include local copies of Three.js and OrbitControls, then update the `<script>` tags and the `PRECACHE` list in `service-worker.js`.
