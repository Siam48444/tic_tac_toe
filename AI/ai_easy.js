import { CIRCLE_CLASS, CROSS_CLASS } from "../JS/rules.js";
import { place_the_mark, swap_turn, update_turn_indicator } from "../JS/turns.js";
import { is_draw, is_winner } from "../JS/rules.js";
import { end_the_game } from "../index.js";


export function get_easy_ai_move(cells) {
    // Get all available (empty) cells
    const available_cells = [...cells].filter(cell => {
        return !cell.classList.contains(CROSS_CLASS) && !cell.classList.contains(CIRCLE_CLASS);
    });

    // No move if the board is full
    if (available_cells.length === 0) return null;

    // Choose a random available cell
    const random_index = Math.floor(Math.random() * available_cells.length);
    
    return available_cells[random_index];
}



// Place the easy ai move
export function place_easy_ai_move(cells) {
    const ai_cell = get_easy_ai_move(cells);

    if (ai_cell) {
        place_the_mark(ai_cell, CIRCLE_CLASS);

        const ai_winning_cells = is_winner(cells, CIRCLE_CLASS);

        if (ai_winning_cells) {
            end_the_game(true, ai_winning_cells);
        }
        else if (is_draw(cells)) {
            end_the_game(false);
        }
        else {
            swap_turn();
            update_turn_indicator();
        }
    }
}