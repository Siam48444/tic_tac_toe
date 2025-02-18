// All the sounds of the game
export const click_sound_X = new Audio("./Assets/Sounds/click_sound_X.mp3");
export const click_sound_O = new Audio("./Assets/Sounds/click_sound_O.mp3");



// Function to play the game
export function play_sound(sound, is_muted=false) {
    if ( !is_muted ) {
        sound.play();
    }
}