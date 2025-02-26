// Update the theme
const theme_class = localStorage.getItem("theme_class");
if (theme_class) {
    document.body.classList.add(theme_class);
}



// Fun button
const fun_button = document.getElementById("fun_button");
fun_button.addEventListener("mouseenter", () => {
    const max_X = window.innerWidth;
    console.log(max_X)
});