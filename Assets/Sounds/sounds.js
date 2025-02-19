// All the sounds of the game
export const click_sound_X = new Audio("./Assets/Sounds/click_sound_X.mp3");
export const click_sound_O = new Audio("./Assets/Sounds/click_sound_O.mp3");
export const winning_sound = new Audio("./Assets/Sounds/winning_sound.mp3");
export const draw_sound = new Audio("./Assets/Sounds/draw_sound.mp3");



// Let the user choose to mute or unmute
export const sound_button = document.querySelector(".sound_button");
export let is_muted = false;

// Function to toggle the sounds of the game
export function toggle_sound() {
    sound_button.classList.toggle("muted"); // Show the sound system visually
    is_muted = !is_muted; // Switch between mute and unmute
}



// Function to play the sound
export function play_sound(sound, is_muted = false) {
    if (is_muted) { return; }
    else { sound.play(); }
}