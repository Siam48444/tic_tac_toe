import { CIRCLE_CLASS, CROSS_CLASS } from "../JS/rules.js";
import { place_the_mark, swap_turn, update_turn_indicator } from "../JS/turns.js";
import { is_draw, is_winner } from "../JS/rules.js";
import { end_the_game, handle_clicks } from "../index.js";


function minimax(cells, isMaximizing) {
    if (is_winner(cells, CIRCLE_CLASS)) return 1;  // AI wins
    if (is_winner(cells, CROSS_CLASS)) return -1; // Opponent wins
    if (is_draw(cells)) return 0; // Draw

    const available_cells = [...cells].filter(cell => 
        !cell.classList.contains(CROSS_CLASS) && !cell.classList.contains(CIRCLE_CLASS)
    );

    if (isMaximizing) { // AI's turn (Maximizer)
        let bestScore = -Infinity;
        for (let cell of available_cells) {
            cell.classList.add(CIRCLE_CLASS); // Simulate AI move
            let score = minimax(cells, false);
            cell.classList.remove(CIRCLE_CLASS); // Undo move
            bestScore = Math.max(score, bestScore);
        }
        return bestScore;
    } 
    else { // Opponent's turn (Minimizer)
        let bestScore = Infinity;
        for (let cell of available_cells) {
            cell.classList.add(CROSS_CLASS); // Simulate opponent move
            let score = minimax(cells, true);
            cell.classList.remove(CROSS_CLASS); // Undo move
            bestScore = Math.min(score, bestScore);
        }
        return bestScore;
    }
}



export function get_best_ai_move(cells) {
    let bestScore = -Infinity;
    let bestMove = null;
    
    const available_cells = [...cells].filter(cell => 
        !cell.classList.contains(CROSS_CLASS) && !cell.classList.contains(CIRCLE_CLASS)
    );

    for (let cell of available_cells) {
        cell.classList.add(CIRCLE_CLASS); // Simulate AI move
        let score = minimax(cells, false);
        cell.classList.remove(CIRCLE_CLASS); // Undo move

        if (score > bestScore) {
            bestScore = score;
            bestMove = cell;
        }
    }
    
    return bestMove;
}



export function place_hard_ai_move(cells) {
    const ai_cell = get_best_ai_move(cells);

    if (ai_cell) {
        place_the_mark(ai_cell, CIRCLE_CLASS);
        ai_cell.removeEventListener("click", handle_clicks);

        const ai_winning_cells = is_winner(cells, CIRCLE_CLASS);
        if (ai_winning_cells) {
            end_the_game(true, ai_winning_cells);
            return;
        }
        else if (is_draw(cells)) {
            end_the_game(false);
            return;
        }
        else {
            swap_turn();
            update_turn_indicator();
        }
    }
}
