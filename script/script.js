function darkMode() {
    let themeStyle = document.getElementById("theme-style");
    if (themeStyle.getAttribute("href") == "/css/styles.css") {
        themeStyle.href = "/css/styles-dark.css"
    } else if (themeStyle.getAttribute("href")  == "/css/styles-dark.css") {
        themeStyle.href = "/css/styles.css"
    }
}
