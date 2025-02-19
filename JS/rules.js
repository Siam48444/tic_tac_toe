export const CROSS_CLASS = "cross"; // Class for X mark
export const CIRCLE_CLASS = "circle"; // Class for O mark
export const ACTIVE_TURN = "active_turn"; // Class for active turn

export const WINNING_COMBINATIONS = [ 
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontals
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticals
    [0, 4, 8], [2, 4, 6] // Diagonals
];

export let circle_turn = false; // Tracks if it's O's turn



// Check if any winning combination is met and return it
export function is_winner(cells, current_turn) {
    return WINNING_COMBINATIONS.find(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(current_turn);
        });
    });
}