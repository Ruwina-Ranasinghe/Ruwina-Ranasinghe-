import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

const AppTree = (
    <React.StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </React.StrictMode>
);

// If react-snap prerendered the page, hydrate it.
// Otherwise (normal dev/first load) do a fresh render.
if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, AppTree);
} else {
    createRoot(rootElement).render(AppTree);
}