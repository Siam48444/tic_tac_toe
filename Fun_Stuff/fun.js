const jumpscare_sound = new Audio("../Assets/Sounds/jumpscare_sound.mp3");


// Update the theme
const theme_class = localStorage.getItem("theme_class");
if (theme_class) {
    document.body.classList.add(theme_class);
}



// Fun button
const main = document.getElementById("main");
const fun_button = document.getElementById("fun_button");
const scary_image = document.getElementById("scary_image");

const padding = 100; // Desired space between the button and the edges



// Interactive button clicks
fun_button.addEventListener("click", () => {
    scary_image.classList.add("clicked"); // Reveal the scary image
    jumpscare_sound.play(); // Play the scary sound
    setTimeout(() => { scary_image.classList.remove("clicked"); }, 5000); // Remove the scary image
});



// Make the button tricky to click
fun_button.addEventListener("mouseenter", () => {
    const max_X = main.clientWidth - fun_button.clientWidth - padding;
    const max_Y = main.clientHeight - fun_button.clientHeight - padding;

    const random_X = padding + Math.random() * max_X;
    const random_Y = padding + Math.random() * max_Y;

    fun_button.style.left = `${random_X}px`;
    fun_button.style.top = `${random_Y}px`;
});