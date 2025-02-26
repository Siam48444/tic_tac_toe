// Update the theme
const theme_class = localStorage.getItem("theme_class");
if (theme_class) {
    document.body.classList.add(theme_class);
}



// Fun button
const main = document.getElementById("main");
const fun_button = document.getElementById("fun_button");

const padding = 30; // Space between the button and the edges


// Make the button tricky to click
fun_button.addEventListener("mouseenter", () => {
    const max_X = main.clientWidth - fun_button.clientWidth - padding;
    const max_Y = main.clientHeight - fun_button.clientHeight - padding;

    const random_X = padding + Math.random() * max_X;
    const random_Y = padding + Math.random() * max_Y;

    fun_button.style.left = `${random_X}px`;
    fun_button.style.top = `${random_Y}px`;
});


// Interactive button clicks
fun_button.addEventListener("click", () => {
    alert()
});