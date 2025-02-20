import { CIRCLE_CLASS, CROSS_CLASS } from "../JS/rules.js";
import { circle_turn, place_the_mark, swap_turn, update_turn_indicator } from "../JS/turns.js";
import { is_draw, is_winner } from "../JS/rules.js";
import { end_the_game } from "../index.js";


export function get_ai_move(cells) {
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



export function place_ai_move(ai_enabled, cells) {
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