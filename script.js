let boxes = document.querySelectorAll(".box");
let msgs = document.querySelector("#msg");
let msgConatiner = document.querySelector(".messageContainer");
let newGame = document.querySelector(".newGame");
let reset = document.querySelector(".reset");
let turn0 = true;

const winPatter = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgConatiner.classList.add("hide")
}


const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
} 

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true
        
    }
} 

let showWinner = (pos1Val) => {
    msgs.innerHTML = `Congratulation ${pos1Val} is winner `;
    msgConatiner.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatter){
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;

        if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner is" ,pos1Val);
                showWinner(pos1Val)
                
            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was Clicked");
        if(turn0 === true){
            box.innerHTML = "X";
            turn0 = false;
        }else{
            box.innerHTML = "0"
            turn0 = true;
        }
        box.disabled = true;

       checkWinner();
    })
})

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);