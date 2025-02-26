// Update the theme
const theme_class = localStorage.getItem("theme_class");
if (theme_class) {
    document.body.classList.add(theme_class);
}



// Fun button
const main = document.getElementById("main");
const fun_button = document.getElementById("fun_button");

fun_button.addEventListener("mouseenter", () => {
    const max_X = main.innerWidth - fun_button.clientWidth * 2;
    const max_Y = main.innerHeight - fun_button.clientHeight * 2;

    console.log(main.innerWidth)

    const random_X = Math.random() * max_X;
    const random_Y = Math.random() * max_Y;

    fun_button.style.left = `${random_X}px`;
    fun_button.style.top = `${random_Y}px`;
});