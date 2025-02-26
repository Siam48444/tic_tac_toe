// Update the theme
const theme_class = localStorage.getItem("theme_class");
if (theme_class) {
    document.body.classList.add(theme_class);
}