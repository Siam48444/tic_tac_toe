import { reset_scores } from "../JS/scores.js";
import { disable_turn_selection, reset_turn } from "../JS/turns.js";
import { start_the_game } from "../index.js";




// Game mode selection
const mode_selection = document.getElementById("mode_selection");
let easy_ai_enabled = false;

mode_selection.addEventListener("change", (e) => {
    let mode = e.target.value;

    if (mode === "easy") {
        easy_ai_enabled = true;
        reset_scores();
        reset_turn();
        start_the_game();
    }
    else if (mode === "two players") {
        easy_ai_enabled = false;
        reset_scores();
        reset_turn();
        start_the_game();
    }
    

    // Usual settings for ai mode
    if (mode !== "two players") {
        disable_turn_selection();
        
        // Start the next round
        winning_message.addEventListener("click", () => { 
            reset_turn();
            start_the_game();
            disable_turn_selection();
        }); 

        // Reset the scores and restart the game
        restart_button.addEventListener("click", () => { 
            reset_scores();
            reset_turn();
            start_the_game();
            disable_turn_selection();
        }); 
    }
});