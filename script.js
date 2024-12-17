// // Game data
// const maze = [
//     ['Start', 'Puzzle', 'Empty', 'Trap', 'Exit'],
//     ['Empty', 'Trap', 'Empty', 'Puzzle', 'Empty'],
//     ['Puzzle', 'Empty', 'Empty', 'Puzzle', 'Empty'],
//     ['Empty', 'Empty', 'Trap', 'Empty', 'Puzzle'],
//     ['Puzzle', 'Puzzle', 'Empty', 'Puzzle', 'Exit']
// ];

// let playerPosition = { x: 0, y: 0 }; // Player starts at (0, 0)
// let puzzlesSolved = 0; // Track number of puzzles solved
// let score = 0; // Player's score
// let timeRemaining = 60; // Set the timer to 60 seconds
// let timerInterval; // For the game timer

// // DOM Elements
// const mazeDiv = document.getElementById("maze");
// const messageDiv = document.getElementById("message");
// const puzzleDiv = document.getElementById("puzzle");
// const timerDiv = document.getElementById("timer");
// const scoreDiv = document.getElementById("score");
// const leaderboardDiv = document.getElementById("leaderboard");

// // Initialize maze display
// function displayMaze() {
//     mazeDiv.innerHTML = ""; // Clear previous maze
//     for (let i = 0; i < maze.length; i++) {
//         let row = document.createElement("div");
//         row.style.display = "flex";
//         for (let j = 0; j < maze[i].length; j++) {
//             let cell = document.createElement("div");
//             cell.style.width = "50px";
//             cell.style.height = "50px";
//             cell.style.border = "1px solid black";
//             cell.style.textAlign = "center";
//             cell.style.lineHeight = "50px";

//             if (i === playerPosition.y && j === playerPosition.x) {
//                 cell.style.backgroundColor = "lightblue";
//                 cell.innerText = "You";
//             } else {
//                 cell.style.backgroundColor = maze[i][j] === 'Trap' ? 'red' : 'white';
//             }

//             row.appendChild(cell);
//         }
//         mazeDiv.appendChild(row);
//     }
// }

// // Player movement
// function movePlayer(direction) {
//     let newX = playerPosition.x;
//     let newY = playerPosition.y;

//     if (direction === "up") newY--;
//     else if (direction === "down") newY++;
//     else if (direction === "left") newX--;
//     else if (direction === "right") newX++;

//     // Ensure the new position is within bounds
//     if (newX >= 0 && newX < maze[0].length && newY >= 0 && newY < maze.length) {
//         playerPosition = { x: newX, y: newY };
//         checkRoom();
//     } else {
//         messageDiv.innerText = "You can't move outside the maze!";
//     }

//     displayMaze(); // Update maze display
// }

// // Check the current room
// function checkRoom() {
//     const roomType = maze[playerPosition.y][playerPosition.x];
//     if (roomType === "Puzzle") {
//         messageDiv.innerText = "Solve the puzzle to proceed!";
//         displayPuzzle();
//     } else if (roomType === "Trap") {
//         messageDiv.innerText = "Oh no! You fell into a trap. Game Over.";
//         gameOver();
//     } else if (roomType === "Exit") {
//         messageDiv.innerText = `Congratulations! You've escaped the maze with a score of ${score}!`;
//         clearInterval(timerInterval); // Stop the timer
//         gameOver();
//     } else {
//         messageDiv.innerText = "Navigate the maze to reach the exit!";
//     }
// }

// // Puzzles data
// const puzzles = [
//     { question: "Unscramble: ODRW", answer: "WORD" },
//     { question: "What’s 5 + 3?", answer: "8" },
//     { question: "Unscramble: AEZM", answer: "MAZE" },

// ];

// // Display puzzle
// function displayPuzzle() {
//     puzzleDiv.style.display = "block";
//     const puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
//     puzzleDiv.innerHTML = `
//         <p>${puzzle.question}</p>
//         <input type="text" id="answer" placeholder="Type your answer">
//         <button onclick="checkPuzzle('${puzzle.answer}')">Submit</button>
//     `;
// }

// // Check puzzle answer
// function checkPuzzle(correctAnswer) {
//     const userAnswer = document.getElementById("answer").value.trim().toUpperCase();
//     if (userAnswer === correctAnswer.toUpperCase()) {
//         puzzlesSolved++;
//         score += 10; // Add score for solving puzzle
//         messageDiv.innerText = "Correct! You may proceed.";
//         puzzleDiv.style.display = "none";
//         updateScore();
//     } else {
//         messageDiv.innerText = "Wrong answer! Try again.";
//     }
// }

// // Update score
// function updateScore() {
//     scoreDiv.innerText = `Score: ${score}`;
// }

// // Timer
// function startTimer() {
//     timerInterval = setInterval(() => {
//         if (timeRemaining <= 0) {
//             clearInterval(timerInterval);
//             messageDiv.innerText = "Time's up! Game Over.";
//             gameOver();
//         } else {
//             timeRemaining--;
//             timerDiv.innerText = `Time Remaining: ${timeRemaining}s`;
//         }
//     }, 1000);
// }

// // End the game
// function gameOver() {
//     clearInterval(timerInterval);
//     saveScore();
//     displayLeaderboard();
// }

// // Save and display leaderboard
// function saveScore() {
//     const playerName = prompt("Enter your name:");
//     let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
//     leaderboard.push({ name: playerName, score });
//     leaderboard.sort((a, b) => b.score - a.score).slice(0, 5);
//     localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
// }

// function displayLeaderboard() {
//     leaderboardDiv.innerHTML = "<h2>Leaderboard</h2>";
//     const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
//     leaderboard.forEach((entry, index) => {
//         leaderboardDiv.innerHTML += `<p>${index + 1}. ${entry.name}: ${entry.score} points</p>`;
//     });
// }

// // Initialize game
// displayMaze();
// startTimer();
// updateScore();

// Game data
const maze = [
    ['Start', 'Puzzle', 'Empty', 'Trap', 'Exit'],
    ['Empty', 'Trap', 'Empty', 'Puzzle', 'Empty'],
    ['Puzzle', 'Empty', 'Empty', 'Puzzle', 'Empty'],
    ['Empty', 'Empty', 'Trap', 'Empty', 'Puzzle'],
    ['Puzzle', 'Puzzle', 'Empty', 'Puzzle', 'Exit']
];

let playerPosition = { x: 0, y: 0 }; // Player starts at (0, 0)
let puzzlesSolved = 0; // Track number of puzzles solved
let score = 0; // Player's score
let timeRemaining = 60; // Set the timer to 60 seconds
let timerInterval; // For the game timer

// DOM Elements
const mazeDiv = document.getElementById("maze");
const messageDiv = document.getElementById("message");
const puzzleDiv = document.getElementById("puzzle");
const timerDiv = document.getElementById("timer");
const scoreDiv = document.getElementById("score");
const leaderboardDiv = document.getElementById("leaderboard");

// Initialize maze display
function displayMaze() {
    mazeDiv.innerHTML = ""; // Clear previous maze
    for (let i = 0; i < maze.length; i++) {
        let row = document.createElement("div");
        row.style.display = "flex";
        for (let j = 0; j < maze[i].length; j++) {
            let cell = document.createElement("div");
            cell.style.width = "50px";
            cell.style.height = "50px";
            cell.style.border = "1px solid black";
            cell.style.textAlign = "center";
            cell.style.lineHeight = "50px";

            if (i === playerPosition.y && j === playerPosition.x) {
                cell.style.backgroundColor = "lightblue";
                cell.innerText = "You";
            } else {
                cell.style.backgroundColor = maze[i][j] === 'Trap' ? 'red' : 'white';
            }

            row.appendChild(cell);
        }
        mazeDiv.appendChild(row);
    }
}

// Player movement
function movePlayer(direction) {
    let newX = playerPosition.x;
    let newY = playerPosition.y;

    if (direction === "up") newY--;
    else if (direction === "down") newY++;
    else if (direction === "left") newX--;
    else if (direction === "right") newX++;

    // Ensure the new position is within bounds
    if (newX >= 0 && newX < maze[0].length && newY >= 0 && newY < maze.length) {
        playerPosition = { x: newX, y: newY };
        checkRoom();
    } else {
        messageDiv.innerText = "You can't move outside the maze!";
    }

    displayMaze(); // Update maze display
}

// Check the current room
function checkRoom() {
    const roomType = maze[playerPosition.y][playerPosition.x];
    if (roomType === "Puzzle") {
        messageDiv.innerText = "Solve the puzzle to proceed!";
        displayPuzzle();
    } else if (roomType === "Trap") {
        messageDiv.innerText = "Oh no! You fell into a trap. Game Over.";
        gameOver();
    } else if (roomType === "Exit") {
        messageDiv.innerText = `Congratulations! You've escaped the maze with a score of ${score}!`;
        clearInterval(timerInterval); // Stop the timer
        gameOver();
    } else {
        messageDiv.innerText = "Navigate the maze to reach the exit!";
    }
}

// Puzzles data
const puzzles = [
    { question: "Unscramble: ODRW", answer: "WORD" },
    { question: "What’s 5 + 3?", answer: "8" },
    { question: "Unscramble: AEZM", answer: "MAZE" },
];

// Display puzzle
function displayPuzzle() {
    puzzleDiv.style.display = "block";
    const puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
    puzzleDiv.innerHTML = `
        <p>${puzzle.question}</p>
        <input type="text" id="answer" placeholder="Type your answer">
        <button onclick="checkPuzzle('${puzzle.answer}')">Submit</button>
    `;
}

// Check puzzle answer
function checkPuzzle(correctAnswer) {
    const userAnswer = document.getElementById("answer").value.trim().toUpperCase();
    if (userAnswer === correctAnswer.toUpperCase()) {
        puzzlesSolved++;
        score += 10; // Add score for solving puzzle
        messageDiv.innerText = "Correct! You may proceed.";
        puzzleDiv.style.display = "none";
        updateScore();
    } else {
        messageDiv.innerText = "Wrong answer! Try again.";
    }
}

// Update score
function updateScore() {
    scoreDiv.innerText = `Score: ${score}`;
}

// Timer
function startTimer() {
    timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            messageDiv.innerText = "Time's up! Game Over.";
            gameOver();
        } else {
            timeRemaining--;
            timerDiv.innerText = `Time Remaining: ${timeRemaining}s`;
        }
    }, 1000);
}

// End the game
function gameOver() {
    clearInterval(timerInterval);
    saveScore();
    displayLeaderboard();
}

// Save and display leaderboard
function saveScore() {
    const playerName = prompt("Enter your name:");
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.push({ name: playerName, score });
    leaderboard.sort((a, b) => b.score - a.score).slice(0, 5);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

function displayLeaderboard() {
    leaderboardDiv.innerHTML = "<h2>Leaderboard</h2>";
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.forEach((entry, index) => {
        leaderboardDiv.innerHTML += `<p>${index + 1}. ${entry.name}: ${entry.score} points</p>`;
    });
}

// Initialize game
displayMaze();
startTimer();
updateScore();

