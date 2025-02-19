export const CROSS_CLASS = "cross"; // Class for X mark
export const CIRCLE_CLASS = "circle"; // Class for O mark
export const ACTIVE_TURN = "active_turn"; // Class for active turn

export const WINNING_COMBINATIONS = [ 
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontals
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticals
    [0, 4, 8], [2, 4, 6] // Diagonals
];



// Check if any winning combination is met and return it
export function is_winner(cells, current_turn) {
    return WINNING_COMBINATIONS.find(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(current_turn);
        });
    });
}



// Check if all cells are filled without a winner
export function is_draw(cells) {
    return [...cells].every(cell => {
        return ( cell.classList.contains(CROSS_CLASS) || cell.classList.contains(CIRCLE_CLASS) );
    });
}