const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")
const box4 = document.querySelector(".box4")
const box5 = document.querySelector(".box5")
const box6 = document.querySelector(".box6")
const box7 = document.querySelector(".box7")
const box8 = document.querySelector(".box8")
const box9 = document.querySelector(".box9")







const game = (() => {

    const playerFactory = (name, mark, turn) => {
        return {name, mark, turn}
    }

    const player1 = playerFactory('player 1', 'X', true)
    const player2 = playerFactory('player 2', 'O', false)

    const winCombos = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ]

    let gameBoard = [] 




    let turns = 0
    let winner = null


    const playerTurn = (function () {
        const box = document.querySelectorAll(".box")
        box.forEach(boxes => {
            boxes.addEventListener('click', (e) => {
                if (player1.turn === true && winner === null) {
                    gameBoard.push(e.target.id)
                    
                    boxes.textContent = player1.mark
                    boxes.style.color = "#EE6C4D"
                    player1.turn = false
                    player2.turn = true
                    console.log(gameBoard)
                }
                

                else if (player2.turn === true && winner === null) {
                    gameBoard.push(e.target.id)
                    boxes.textContent = player2.mark
                    boxes.style.color = "#89CEEB"
                    player1.turn = true
                    player2.turn = false
                    console.log(gameBoard)

                }

                



            })

        })
    })()






    

    return {playerTurn}


})();

// const gameBoard = (() => {
//     // Creates players
//     const playerFactory = (name, mark, ai, turn) => {
//         return { name, mark, ai, turn };
//     };

//     const player1 = playerFactory('player 1', 'X', false, true);
//     const player2 = playerFactory('Player 2', 'O', false, false);

//     // Possible win combinations
//     const winCombos = [
//         [0,1,2],
//         [0,3,6],
//         [3,4,5],
//         [6,7,8],
//         [1,4,7],
//         [2,4,6],
//         [2,5,8],
//         [0,4,8]
//     ];
    
//     let winner = null;
    
//     // Turn counter
//     let turns = 0;

//     // Board array
//     let board = [];
    
//     // Winner combination array
//     let winnerCombo = [];
    
//     // Function when making a move
//     const playerTurn = (function () {
//         const box = document.querySelectorAll('.box');
//         box.forEach( boxes => {
//             boxes.addEventListener('click', e => {
//                 // X player move if conditions are met
//                 if (player1.turn == true && gameBoard.winner == null
//                     && e.target.textContent == '') {
//                     // Adds move to array
//                     board[e.target.id] = player1.mark;
//                     // Board styling
//                     boxes.textContent = player1.mark;
//                     boxes.style.color = '#EE6C4D';
//                     // Sets player turns
//                     player1.turn = false;
//                     player2.turn = true;
                    
//                     console.log(board)
//                 // O player move if conditions are met   
//                 } else if (player2.turn == true && gameBoard.winner == null
//                     && e.target.textContent == '' && player2.ai == false) {
//                     // Adds move to array    
//                     board[e.target.id] = player2.mark;
//                     // Board styling
//                     boxes.textContent = player2.mark;
//                     boxes.style.color = '#98C1D9';
//                     // Sets player turns
//                     player1.turn = true;
//                     player2.turn = false;
                    
//                     console.log(board)
//                 } else {
//                     return;
//                 };



//                 winCheck();

//                 box.style.opacity = '1';  
//             });
//         });
//     })();

//     return {playerTurn}
// })()


