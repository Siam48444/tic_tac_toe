export function get_ai_move(cells) {
    // Check for the marked cells
    const available_cells = [...cells].filter(cell => {
        return !cell.classList.contains("cross") && !cell.classList.contains("circle");
    });

    // Check if there is no cell left
    if (available_cells.length === 0) return null;
}