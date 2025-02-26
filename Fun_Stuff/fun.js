// Update the theme
const theme_class = localStorage.getItem("theme_class");
if (theme_class) {
    document.body.classList.add(theme_class);
}



// Fun button
const fun_button = document.getElementById("fun_button");
fun_button.addEventListener("mouseenter", () => {
    const max_X = window.innerWidth - fun_button.clientWidth;
    const max_Y = window.innerHeight - fun_button.clientHeight;

    const random_X = Math.random() * max_X;
    const random_Y = Math.random() * max_Y;

    fun_button.style.left = `${random_X}px`;
    fun_button.style.top = `${random_Y}px`;
});