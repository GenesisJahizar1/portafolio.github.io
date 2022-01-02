import hamburgerMenu from "./dom/hamburger.js";
import darkTheme from "./dom/dark-mode.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".nav__icono", ".nav__enlaces", ".nav__a");
    darkTheme(".switch", "dark", "active");
});

