console.log("Let's play TIC TAC TOE");

// let backgroundMusic = new Audio("music.mp3");
// let nextTurn = new Audio("turn.mp3");
// let endGame = new Audio("endGame.mp3");
let userTurn = "X";
let gameOver = false;

const changeTurn = () => {
    return userTurn === "X" ? "0" : "X";
};

const checkWin = () => {
    let boxText = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];
    wins.forEach((e) => {
        if (
            boxText[e[0]].innerText === boxText[e[1]].innerText &&
            boxText[e[2]].innerText === boxText[e[1]].innerText &&
            boxText[e[0]].innerText !== ""
        ) {
            document.querySelector(".info").innerText =
                boxText[e[0]].innerText + " WON ";
            document.querySelector(".info").style.color = "#38ff42";
            gameOver = true;
            document
                .querySelector(".imgBox")
                .getElementsByTagName("img")[0].style.width = "160px";
            document.querySelector('.line').style.width = "20vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    });
};

const checkDraw = () => {
    let boxTexts = document.querySelectorAll(".boxText");
    let filledCount = 0;
    boxTexts.forEach((box) => {
        if (box.innerText !== "") {
            filledCount++;
        }
    });
    if (filledCount === 9 && !gameOver) {
        document.querySelector(".info").innerText = "Game ended in a draw!";
        document.querySelector(".info").style.color = "#ffcc00"; // Set your preferred color
        gameOver = true;
    }
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector(".boxText");
    element.addEventListener("click", () => {
        if (boxText.innerText === "") {
            boxText.innerText = userTurn;
            userTurn = changeTurn();
            checkWin();
            checkDraw();
            if (!gameOver) {
                document.querySelector(".info").style.color = "#fd2000";
                document.getElementsByClassName("info")[0].innerText =
                    "Turn for " + userTurn;
            }
        }
    });
});

reset.addEventListener("click", () => {
    let boxTexts = document.querySelectorAll(".boxText");
    Array.from(boxTexts).forEach((element) => {
        element.innerText = "";
    });
    userTurn = "X";
    gameOver = false;
    document.querySelector(".info").style.color = "#fff";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + userTurn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0";
    document.querySelector('.line').style.width = "0";
});
