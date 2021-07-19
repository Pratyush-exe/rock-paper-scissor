const rock = document.querySelector("#rock-button-you");
const paper = document.querySelector("#paper-button-you");
const scissor = document.querySelector("#scissor-button-you");
const reset = document.querySelector("#reset");
let your_choice = document.querySelector("#your-choice");
let his_choice = document.querySelector("#his-choice");
let score = document.querySelector("#score-text");
let rules = document.querySelector("#rules");
let n = 0;
let user_input = -1;
let comp_input = -1;
let user_score = 0;
let comp_score = 0;

reset.addEventListener("click", function() {window.location.reload();});
rules.addEventListener("click", function () {
    alert("-Person to score 5 score first, wins\n-You need to click buttons on left (Rock, Paper, Scissor) to begin\n-Enjoy!!");
})

rock.addEventListener("click", function() {game_func(user_input=0)});
paper.addEventListener("click", function() {game_func(user_input=1)});
scissor.addEventListener("click", function() {game_func(user_input=2)});

function change_images() {
    if(user_input==0) { your_choice.src = "Images/rock.png"; }
    else if(user_input==1) { your_choice.src = "Images/paper.png"; }
    else if(user_input==2) { your_choice.src = "Images/scissor.png"; }

    if(comp_input==0) { his_choice.src = "Images/rock.png"; }
    else if(comp_input==1) { his_choice.src = "Images/paper.png"; }
    else if(comp_input==2) { his_choice.src = "Images/scissor.png"; }
}

function game_func(user_input){
    if(user_input > -1) {
        comp_input = Math.floor(Math.random()*3);
        change_images();
        if(comp_input != user_input){
            if((user_input==0 && comp_input==2) || (user_input==1 && comp_input==0) || (user_input==2 && comp_input==1)) {
                user_score += 1;}
            else { comp_score += 1; }
            score.textContent = user_score.toString() + "  -  " + comp_score.toString(); 
            if(user_score==5 || comp_score==5) {
                rock.disabled = true;
                scissor.disabled = true;
                paper.disabled = true;
                setTimeout(function() {
                    if(user_score==5) {
                        alert("You won! Bravo!");
                    }
                    else if(comp_score==5) {
                        alert("You lost! Better Luck Next Time!");
                    }
                }, 500);
            }
        }
}
}
