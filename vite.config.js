/**
 * vite.config.js
 * ─────────────────────────────────────────────────────────────
 * Adds:
 *  1. vite-plugin-prerender  → generates static HTML at build
 *     time so Google can read your content without running JS.
 *
 * Install:
 *   npm install -D vite-plugin-prerender
 *
 * If vite-plugin-prerender gives peer-dep issues with your Vite
 * version, use react-snap instead (see bottom of this file).
 * ─────────────────────────────────────────────────────────────
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import prerender from "vite-plugin-prerender";  // ← uncomment after install
// import path from "path";

export default defineConfig({
    plugins: [
        react(),

        /* ── OPTION A: vite-plugin-prerender ─────────────────────
           Prerenders the listed routes to static HTML at build time.
           For a single-page portfolio just prerender "/".

        prerender({
          staticDir: path.join(__dirname, "dist"),
          routes: ["/"],
          // Optional: wait for Three.js canvas to settle
          renderer: "@prerenderer/renderer-puppeteer",
          rendererOptions: {
            renderAfterTime: 3000,   // wait 3 s for JS to paint
          },
        }),
        ─────────────────────────────────────────────────────────── */
    ],

    build: {
        // Smaller chunks = faster LCP = better Core Web Vitals score
        rollupOptions: {
            output: {
                manualChunks: {
                    "vendor-react": ["react", "react-dom", "react-router-dom"],
                    "vendor-three": ["three", "@react-three/fiber", "@react-three/drei"],
                    "vendor-motion": ["framer-motion"],
                },
            },
        },
    },
});


/* ─────────────────────────────────────────────────────────────
   OPTION B: react-snap (simpler, no Vite plugin needed)
   ─────────────────────────────────────────────────────────────

   1. Install:
        npm install -D react-snap

   2. In package.json, update "scripts":
        "postbuild": "react-snap"

   3. In main.jsx, change ReactDOM.render to:
        import { hydrateRoot, createRoot } from "react-dom/client";

        const rootElement = document.getElementById("root");
        if (rootElement.hasChildNodes()) {
          hydrateRoot(rootElement, <App />);
        } else {
          createRoot(rootElement).render(<App />);
        }

   4. In package.json, add config:
        "reactSnap": {
          "source": "dist",
          "minifyHtml": { "collapseWhitespace": false },
          "puppeteerArgs": ["--no-sandbox", "--disable-setuid-sandbox"]
        }

   This crawls your built site with a headless browser and saves
   static HTML snapshots — the most reliable approach.
─────────────────────────────────────────────────────────────── */