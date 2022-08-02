let userScore = 0;
let computerScore = 0;
let userScore_span=document.getElementById("user-score");
let computerScore_span=document.getElementById("computer-score");
let alart_div=document.querySelector(".alart>p");
let rock_div=document.getElementById("r");
let paper_div=document.getElementById("p");
let scissors_div=document.getElementById("s");

function getcomputerChoice(){
    let choice=["r","p","s"];
    let random =Math.floor(Math.random()*3);
    return choice[random];    
}
function changeWords(word){
    if(word==="r") return "Rock";
    if(word==="p") return "papper";
  return "scissors";
}

function win(userchoice,computerchoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    userchoice_div=document.getElementById(userchoice);
    alart_div.innerHTML=`${changeWords(userchoice)} beats ${changeWords(computerchoice)}. You win !`;
    document.getElementById(userchoice).classList.add("win");
     setTimeout(()=> userchoice_div.classList.remove("win"),300);
}
function lose(userchoice,computerchoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    userchoice_div=document.getElementById(userchoice);
    alart_div.innerHTML=`${changeWords(userchoice)} loses to ${changeWords(computerchoice)}. You lost !`;
    document.getElementById(userchoice).classList.add("lose");
     setTimeout(()=> userchoice_div.classList.remove("lose"),300);
}
function draw(userchoice,computerchoice){
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    userchoice_div=document.getElementById(userchoice);
    alart_div.innerHTML=`${changeWords(userchoice)} matches ${changeWords(computerchoice)}. Its a draw !`;
    document.getElementById(userchoice).classList.add("draw");
     setTimeout(()=> userchoice_div.classList.remove("draw"),300);
}
function game(user,computer){
   switch (user+computer) {
    case "rs":
    case "pr":
    case "sp":
        win(user,computer);
        break;
    case "sr":
    case "rp":
    case "ps":
        lose(user,computer);
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(user,computer);
        break;
   }

}
function main(){
    rock_div.addEventListener('click',()=>game("r",getcomputerChoice()) );
    paper_div.addEventListener('click',()=>game("p",getcomputerChoice()) );
    scissors_div.addEventListener('click',()=>game("s",getcomputerChoice()) );
    
}
main();