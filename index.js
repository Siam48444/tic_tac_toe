import { click_sound_X, click_sound_O, winning_sound, draw_sound, play_sound, is_muted, toggle_sound, sound_button } from "./Assets/Sounds/sounds.js";
import { score_button_O, score_button_X, reset_scores, update_scores } from "./JS/scores.js";
import { CROSS_CLASS, CIRCLE_CLASS, ACTIVE_TURN, is_winner, is_draw } from "./JS/rules.js";


const cells = document.querySelectorAll(".cell");
const winning_message = document.querySelector(".winning_message");
const winner_text = document.querySelector(".winning_message h1");
const restart_button = document.querySelector(".restart_button");

let circle_turn = false; // Tracks if it's O's turn
let game_over; // Tracks if the game is over


// Let the user choose to mute or unmute
sound_button.addEventListener("click", toggle_sound);



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

    game_over = false; // Reset game over state

    get_user_turn(); // Let the user choose the first mark
    update_turn_indicator(); // Indicate the user turn graphically 

    cells.forEach(cell => {        
        cell.classList.remove(CIRCLE_CLASS, CROSS_CLASS, "won_cell"); // Clear cell classes
        cell.addEventListener("click", handle_clicks, { once: true }); // Handle cell clicks
    });
}



// Get the first turn by the user click
function get_user_turn() {
    score_button_X.addEventListener("click", choose_X);
    score_button_O.addEventListener("click", choose_O);
}
function choose_X() { circle_turn = false; update_turn_indicator(); }
function choose_O() { circle_turn = true; update_turn_indicator(); }



function update_turn_indicator() {
    // Indicate the user turn graphically
    if (circle_turn) {
        score_button_O.classList.add(ACTIVE_TURN)
        score_button_X.classList.remove(ACTIVE_TURN)
    }
    else {
        score_button_X.classList.add(ACTIVE_TURN)
        score_button_O.classList.remove(ACTIVE_TURN)
    }
}



function handle_clicks(e) {
    if (game_over) return; // Ignore if game is over

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
    }
}



// Add current player's mark (X or O) to the cell
function place_the_mark(cell, current_turn) { 
    cell.classList.add(current_turn); // Place the mark to the cell

    // Play the sound of the current mark
    if (current_turn === CROSS_CLASS) {
        play_sound(click_sound_X, is_muted)
    }
    else {
        play_sound(click_sound_O, is_muted);
    }
}



// Switch turns between X and O
function swap_turn() { circle_turn = !circle_turn; }



// Highlight cells that form the winning combination
function highlight_winning_cells(winning_cells) {
    winning_cells.forEach(index => {
        cells[index].classList.add("won_cell");
    });
}



function end_the_game(win, winning_cells = []) {
    game_over = true; // Set game over to true
    
    if (win) {
        const winner_class = circle_turn ? CIRCLE_CLASS : CROSS_CLASS; // Determine the winner class (cross or circle)
        winning_message.classList.add(winner_class); // Show winning message
        winner_text.innerText = "WINNER!"; 

        highlight_winning_cells(winning_cells); 
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