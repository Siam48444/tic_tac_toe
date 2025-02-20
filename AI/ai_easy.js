import { CIRCLE_CLASS, CROSS_CLASS } from "../JS/rules.js";


export function get_ai_move(cells) {
    // Get all available (empty) cells
    const available_cells = [...cells].filter(cell => {
        return ( !cell.classList.contains(CROSS_CLASS) && !cell.classList.contains(CIRCLE_CLASS) );
    });

    // No move if the board is full
    if (available_cells.length === 0) return null;

    console.log(Math.random());
}