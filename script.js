let boxes = document.querySelectorAll(".box");
let newgame = document.querySelector(".newgame");
let reset = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let main = document.querySelector(".main");
let h1 = document.querySelector("h1")
let turnO = true;
let winner = false;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {  
            box.innerText = "X";
            turnO = true;
            }
        box.disabled = true;
        checkWinner();
            
    });
});

const checkWinner = () => {
    for(let pattern of winPatterns){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                showWinner(posVal1);
                winner = true;
                disableBoxs();
                reset.classList.add("hide");
                main.classList.add("hide");
            }
            checkDraw();
        }
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is "${winner}"`;
    msgContainer.classList.remove("hide");
}

const disableBoxs = () => {
    for(let box of boxes){
        box.disabled = true
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false
        box.innerText = "";
        winner = false;
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    // msgContainer.classList.add("hide");
}

const newGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    reset.classList.remove("hide");
    main.classList.remove("hide");
    h1.classList.remove("hide");
}

newgame.addEventListener("click", newGame);
reset.addEventListener("click", resetGame);

const checkDraw = () => {
    let i = 0;
    for(let box of boxes){
        if(box.innerText != ""){
            i++;
        }
    }
    if( i === 9 && winner === false){
        msg.innerText = `Match Draw!`;
        msgContainer.classList.remove("hide");
        reset.classList.add("hide");
        h1.classList.add("hide");
    }
    
}

