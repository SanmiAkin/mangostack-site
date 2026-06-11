import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import App from "../pages/software.jsx";
const el = document.getElementById("root");
if (el.hasChildNodes()) { hydrateRoot(el, <App />); } else { createRoot(el).render(<App />); }
