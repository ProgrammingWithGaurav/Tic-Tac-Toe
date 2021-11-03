console.log('Welcome to Tac Tac Toe');
// Audio
let music = new Audio("./assets/music/music.mp3")
let audioTurn = new Audio("./assets/music/ting.mp3")
let gameover = new Audio("./assets/music/music.mp3")

let turn = 'X'
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === 'X' ? '0' : 'X'
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        // console.log(boxtext[e[0]].innerText)
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' Won'
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ='200px'
        }
    })
}

// Game Logic
// music.volume = 0.2
// music.play()

let boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
            }
        }
    })
})