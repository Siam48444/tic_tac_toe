// All the sounds of the game
export const click_sound_X = new Audio("./Assets/Sounds/click_sound_X.mp3");
export const click_sound_O = new Audio("./Assets/Sounds/click_sound_O.mp3");



// Let the user choose the sound system
export let is_muted = false;
export const sound_button = document.querySelector(".sound_button");

export function toggle_sound() {
    sound_button.classList.toggle("muted");
    is_muted = !is_muted;
}



// Function to play the game
export function play_sound(sound, is_muted=false) {
    if ( !is_muted ) {
        sound.play();
    }
}