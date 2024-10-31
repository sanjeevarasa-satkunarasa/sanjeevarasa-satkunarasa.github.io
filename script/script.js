function darkMode() {
    var themeStyle = document.getElementById("theme-style");
    if (themeStyle.getAttribute("href") === "/css/styles.css") {
        themeStyle.setAttribute("href") = "/css/styles-dark.css"
    }
}