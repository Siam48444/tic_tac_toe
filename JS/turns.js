import { score_button_O, score_button_X } from "./scores.js";

export let circle_turn; // Tracks if it's O's turn




// Get the first turn by the user click
export function get_user_turn() {
    score_button_X.addEventListener("click", choose_X);
    score_button_O.addEventListener("click", choose_O);
}
export function choose_X() { circle_turn = false; update_turn_indicator(); }
export function choose_O() { circle_turn = true; update_turn_indicator(); }



// Switch turns between X and O
export function swap_turn() { circle_turn = !circle_turn; }