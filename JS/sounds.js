export const winning_sound = new Audio("./Assets/Sounds/winning_sound.mp3");
export const draw_sound = new Audio("./Assets/Sounds/draw_sound.mp3");
export const click_sound_O = new Audio("./Assets/Sounds/click_sound_O.mp3");
export const click_sound_X = new Audio("./Assets/Sounds/click_sound_X.mp3");



// Adjust the volume (if needed)
winning_sound.volume = 0.8;
draw_sound.volume = 0.8;



let is_muted = false; // Keeps track if the sound is muted or not



// Let the user choose to mute or unmute
export function set_sound_mode() {
    const sound_button = document.getElementById("sound_button");

    if (!sound_button) return; // Prevent errors if the button is missing


    // Check for the sound mode when the page loads
    const sound_muted = localStorage.getItem("sound_muted");

    if (sound_muted === "true") {
        is_muted = true; // Mute the sound if it was muted before
        sound_button.classList.add("muted"); // Show the sound state graphically
    }


    // Toggle sound mode
    sound_button.addEventListener("click", () => {
        is_muted = !is_muted; // Mute or unmute the sound
        sound_button.classList.toggle("muted"); // Show the sound state graphically

        save_sound_mode(); 
    });
}



// Function to play the sound
export function play_sound(sound) {
    if (is_muted) {
        return;
    }
    else {
        sound.currentTime = 0;
        sound.play();
    }
}



// Save the sound mode in the local storage
function save_sound_mode() {
    localStorage.setItem("sound_muted", is_muted ? "true" : "false");
}
