import { winning_sound, draw_sound, play_sound, is_muted, toggle_sound, sound_button } from "./Assets/Sounds/sounds.js";
import { score_button_O, score_button_X, reset_scores, update_scores } from "./JS/scores.js";
import { CROSS_CLASS, CIRCLE_CLASS, is_winner, is_draw, highlight_winning_cells } from "./JS/rules.js";
import { get_user_turn, choose_O, choose_X, circle_turn, swap_turn, update_turn_indicator, place_the_mark } from "./JS/turns.js";
import { get_ai_move } from "./AI/ai_easy.js";



const cells = document.querySelectorAll(".cell");
const winning_message = document.querySelector(".winning_message");
const winner_text = document.querySelector(".winning_message h1");
const restart_button = document.querySelector(".restart_button");

let game_over = false; // Tracks if the game is over

const ai_toggle_button = document.querySelector(".ai_toggle");
let ai_enabled = false; // Check if AI is playing



// Let the user choose to mute or unmute
sound_button.addEventListener("click", toggle_sound);



ai_toggle_button.addEventListener("click", () => {
    ai_enabled = !ai_enabled; // Toggle AI mode
    ai_toggle_button.innerText = ai_enabled ? "Play vs Human" : "Play vs AI";
    start_the_game(); // Restart the game when switching modes
});



// Start the game by user clicks
winning_message.addEventListener("click", start_the_game); // Start the next round
restart_button.addEventListener("click", () => { // Reset the scores and restart the game
    reset_scores(); 
    start_the_game(); 
}); 



start_the_game(); 
function start_the_game() {
    winning_message.classList.remove(CROSS_CLASS, CIRCLE_CLASS, "show_draw"); // Hide winning message
    winning_message.style.pointerEvents = "none"; // Remove pointer events to the message after a delay

    game_over = false; // Reset the game over state

    get_user_turn(); // Let the user choose the first mark
    update_turn_indicator(); // Indicate the user turn graphically 

    cells.forEach(cell => {        
        cell.classList.remove(CIRCLE_CLASS, CROSS_CLASS, "won_cell"); // Clear cell classes

        cell.addEventListener("click", handle_clicks, { once: true }); // Handle cell clicks
    });
}



function handle_clicks(e) {
    get_ai_move(cells);
    if (game_over) return null; // Ignore if game is over

    // Disable user turn select by removing event listeners
    score_button_X.removeEventListener("click", choose_X);
    score_button_O.removeEventListener("click", choose_O);

    const cell = e.target; // Get clicked cell
    const current_turn = circle_turn ? CIRCLE_CLASS : CROSS_CLASS; // Determine current player's turn
    
    place_the_mark(cell, current_turn); 
    const winning_cells = is_winner(cells, current_turn); // Check if current move is a winning move

    if (winning_cells) {
        end_the_game(true, winning_cells); // End game if there's a winner
    }
    else if (is_draw(cells)) {
        end_the_game(false); // End game if it's a draw
    }
    else {
        swap_turn(); 
        update_turn_indicator();


        // If AI is enabled and it's now AI's turn, make AI move
        if (ai_enabled && circle_turn) {
            setTimeout(() => {
                const ai_cell = get_ai_move(cells);

                if (ai_cell) {
                    place_the_mark(ai_cell, CIRCLE_CLASS);

                    if (is_winner(cells, CIRCLE_CLASS)) {
                        end_the_game(true, is_winner(cells, CIRCLE_CLASS));
                        return null;
                    }
                    else if (is_draw(cells)) {
                        end_the_game(false);
                        return null;
                    }
                    else {
                        swap_turn();
                        update_turn_indicator();
                    }
                }
            }, 500);
        }
    }
}



function end_the_game(win, winning_cells = []) {
    game_over = true; // Set game over to true
    
    if (win) {
        const current_turn = circle_turn ? CIRCLE_CLASS : CROSS_CLASS; // Determine the winner class (cross or circle)
        winning_message.classList.add(current_turn); // Show winning message
        winner_text.innerText = "WINNER!"; 

        highlight_winning_cells(cells, winning_cells); 
        update_scores(circle_turn);

        play_sound(winning_sound, is_muted); // Play the winning sound
    }
    else {
        winning_message.classList.add("show_draw"); // Show the draw class if there is no winner
        winner_text.innerText = "DRAW!"; 

        play_sound(draw_sound, is_muted); // Play the draw sound
    }

    // Add pointer events to the message after a delay
    setTimeout(() => { winning_message.style.pointerEvents = "all"; }, 800);
}

