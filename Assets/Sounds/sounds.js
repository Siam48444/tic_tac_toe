// All the sounds of the game
export const click_sound_X = new Audio("./Assets/Sounds/click_sound_X.mp3");
export const click_sound_O = new Audio("./Assets/Sounds/click_sound_O.mp3");
export const winning_sound = new Audio("./Assets/Sounds/winning_sound.mp3");
export const draw_sound = new Audio("./Assets/Sounds/draw_sound.mp3");



// Let the user choose to mute or unmute
export let is_muted = false;

export function set_sound_mode() {
    const sound_button = document.getElementById("sound_button");

    sound_button.addEventListener("click", () => {
        is_muted = !is_muted; // Mute or unmute the sound
        sound_button.classList.toggle("muted"); // Show the sound state graphically
    });
}



// Function to play the sound
export function play_sound(sound, is_muted = false) {
    if (is_muted) return;
    else sound.play();
}