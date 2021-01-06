// Global variables //
var score

// Start score at 0 //
score = 0

// List of all games //
var games = ["Battlefield V", "Call of Duty", "csgo", "Fall Guys", "Fortnite", "Mario", "Minecraft", "Roblox", "Rocket League", "Valorant"]

// Set currentGame to a random game from game array //
var currentGame = games[Math.floor(Math.random() * games.length)]

// Set image on page to currentGame //
document.getElementById("game").src = "Games/" + currentGame + ".jpg"


// Get the guess from the text field //
function getUserGuess() {
    var userGuess = document.getElementById("user_guess").value
  
    if (userGuess == currentGame) {
        document.getElementById("game-container").style.backgroundColor = "green"
        score++
        // Using the sleep to wait half a second //
        sleep(500)
       
    } else {
        document.getElementById("game-container").style.backgroundColor = "red"

        // Using the sleep to wait half a second //
        sleep(500)
    }

      


    // Remove currentGame from games //
    removeGame()

    // Update score //
    updateScore()


    document.getElementById("game-container").style.backgroundColor = "#626262"

    // Load new game //
    loadNewGame()

    // Clear the text on the textfield //
    clearTextField()

    // End game if no more pokemons left
    if (games.length == 0) {
        gameOver()
    }    

    else {
        // Load new game
        loadNewGame()
    }

    
}

// Game over function //
function gameOver() {
    document.getElementById("title").innerHTML = "Final score: " + score
    document.getElementById("game").src = "gameover.jpg"

    // Hide text field and buttons //
    document.getElementById("user_guess").style.display = "none"
    document.getElementById("guess-button").style.display = "none"

    // Make pokemon container transparent
    document.getElementById("game-container").style.backgroundColor = "transparent"
    
}

// Function to update 
function updateScore() {
    document.getElementById("score_id").innerHTML = "Score: " + score
}
// function to clear the textfield //
function clearTextField() {
    document.getElementById("user_guess").value = ""
}

// Function to load new game //

function loadNewGame() {
    currentGame = games[Math.floor(Math.random() * games.length)]
    document.getElementById("game").src = "Games/" + currentGame + ".jpg"
}

// Function to remove specific pokemon // 
function removeGame() {
    var gamesIndex = games.indexOf(currentGame)
    
    games.splice(gamesIndex, 1)
}

// Function to make the game sleep with the command Sleep()

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }