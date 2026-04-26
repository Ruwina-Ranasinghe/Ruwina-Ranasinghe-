/**
 * SEO.jsx
 * ─────────────────────────────────────────────────────────────
 * Drop-in SEO component using react-helmet-async.
 *
 * Install first:
 *   npm install react-helmet-async
 *
 * Wrap your app in <HelmetProvider> inside main.jsx (see below),
 * then use <SEO /> anywhere in your component tree.
 *
 * Usage:
 *   <SEO
 *     title="Works | Ruwina Ranasinghe"
 *     description="Portfolio projects by Ruwina Ranasinghe..."
 *   />
 * ─────────────────────────────────────────────────────────────
 */

import { Helmet } from "react-helmet-async";

const SEO = ({
                 title = "Ruwina Ranasinghe | Full-Stack Developer & Graphic Designer",
                 description = "Full-Stack Developer, Graphic Designer, and Cybersecurity Explorer. Building modern web experiences with React, Node.js, and Three.js.",
                 image = "https://ruwina-ranasinghe.vercel.app/og-image.png",
                 url = "https://ruwina-ranasinghe.vercel.app/",
                 type = "website",
             }) => {
    return (
        <Helmet>
            {/* Primary */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;


/* ─────────────────────────────────────────────────────────────
   HOW TO WIRE IT UP IN main.jsx
   ─────────────────────────────────────────────────────────────

import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

─────────────────────────────────────────────────────────────── */