let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn =document.querySelector("#game-btn");
let msgcontainer =document.querySelector(".msg-container");
let msg = document.querySelector("#msg")


let isPlayer1Turn = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (isPlayer1Turn) {
            box.innerText = "O";
            isPlayer1Turn = false;
        } else {
            box.innerText = "X";
            isPlayer1Turn = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const showWinner = (winner) =>{ 
    msg.innerText =`congratulations ,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos1val === pos3val) {
            // We have a winner
            console.log(`${pos1val} wins!`);
            // You can add more logic here to declare the winner or end the game
             // Optional: Exit the loop early if a winner is found
             showWinner(pos1val)
        }
    }
};
const resetgame =() =>{
    isPlayer1Turn = true;
    enablebox();
    msgcontainer.classList.add("hide");
    
}
const disablebox=() => {
    for( let box of boxes){
        box.disabled= true;
    }

}
const enablebox=() => {
    for( let box of boxes){
        box.disabled= false;
        box.innerText="";
        showWinner.disabled=true;
    }
}
newGamebtn.addEventListener("click" ,resetgame);
resetBtn.addEventListener("click" ,resetgame);






    
 