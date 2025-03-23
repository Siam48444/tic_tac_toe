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
        sound.play();
    }
}



// Save the sound mode in the local storage
function save_sound_mode() {
    localStorage.setItem("sound_muted", is_muted ? "true" : "false");
}
