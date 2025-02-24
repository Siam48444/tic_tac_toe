import { CIRCLE_CLASS, CROSS_CLASS } from "../JS/rules.js";
import { place_the_mark, swap_turn, update_turn_indicator } from "../JS/turns.js";
import { is_draw, is_winner } from "../JS/rules.js";
import { end_the_game, handle_clicks } from "../index.js";


// Minimax Algorithm
export function minimax(cells, is_maximizing) {
    if (is_winner(cells, CROSS_CLASS)) return 1; //AI wins
    else if (is_winner(cells, CIRCLE_CLASS)) return -1; // Opponent wins
    else if (is_draw(cells)) return 0; // Draw

    // Get all the available (empty) cells
    const available_cells = [...cells].filter(cell => {
        return !cell.classList.contains(CROSS_CLASS) && !cell.classList.contains(CIRCLE_CLASS);
    });


    if (is_maximizing) { // AI's turn (maximize score)
        let best_score = -Infinity;
        for (let cell of available_cells) {
            cell.classList.add(CIRCLE_CLASS); // Simulate ai move
            let score = minimax(cells, false); // Get score
            cell.classList.remove(CROSS_CLASS); // Undo move

            best_score = Math.max(score, best_score);
        }
        return best_score;
    }
}