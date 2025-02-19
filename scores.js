export const score_button_X = document.querySelector(".score_button_X");
export const score_button_O = document.querySelector(".score_button_O");
export const score_X = document.querySelector(".score_X");
export const score_O = document.querySelector(".score_O");

export let Xscore = 0; // Tracks the score of X
export let Oscore = 0; // Tracks the score of O



// Reset the scores after restarting the game
export function reset_scores() {
    Xscore = 0;
    Oscore = 0;
    score_X.innerText = "-";
    score_O.innerText = "-";
}



// Update the score after each round
export function update_scores(circle_turn) {
    if (circle_turn) {
        Oscore ++;
        score_O.innerText = Oscore;
    }
    else {
        Xscore ++;
        score_X.innerText = Xscore;
    }
}