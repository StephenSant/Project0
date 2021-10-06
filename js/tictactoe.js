$(document).ready(function() 
{
    // 0 1 2
    // 3 4 5
    // 6 7 8

    // e for empty

    let positions = ['e','e','e',
                     'e','e','e',
                     'e','e','e'];
    
    let playersTurn = 'X'; //either X or O (Could have been a bool)

    let gameOver = false;

    const endGame = function ()
    {
        console.log(playersTurn + ' wins.');
        if(playersTurn === 'X')
        {
            document.getElementById('leftBoard').style.visibility = 'visible'; //Jquery not here be cause I'm an idiot still learning
        }
        else
        {
            document.getElementById('rightBoard').style.visibility = 'visible'; //Jquery not here be cause I'm an idiot still learning
        }
        gameOver = true;
    }

    const checkForWinning = function ()
    {

        //There might be a better way of doing this, but there's not that many win conditions, so I did it manually.

        //Horizontal wins
        if(positions[0] === positions[1] && positions[1] === positions[2] && positions[0] !== 'e')
        {
            endGame();
        }
        if(positions[3] === positions[4] && positions[4] === positions[5] && positions[3] !== 'e')
        {
            endGame();
        }
        if(positions[6] === positions[7] && positions[7] === positions[8] && positions[6] !== 'e')
        {
            endGame();
        }

        //Vertical wins
        if(positions[0] === positions[3] && positions[3] === positions[6] && positions[0] !== 'e')
        {
            endGame();
        }
        if(positions[1] === positions[4] && positions[4] === positions[7] && positions[1] !== 'e')
        {
            endGame();
        }
        if(positions[2] === positions[5] && positions[5] === positions[8] && positions[2] !== 'e')
        {
            endGame();
        }
        
        //Diagonal wins
        if(positions[0] === positions[4] && positions[4] === positions[8] && positions[0] !== 'e')
        {
            endGame();
        }
        if(positions[2] === positions[4] && positions[4] === positions[6] && positions[2] !== 'e')
        {
            endGame();
        }
        
    }

    const checkIfValid = function(position)
    {
        if(positions[position] !== "X" && positions[position] !== "O")
        {
            positions[position] = playersTurn;
            document.getElementById(position).innerHTML = "<p>"+playersTurn+"</p>"; //Jquery not here be cause I'm an idiot still learning
            return true;
        }
        else
        {
            console.log("You can't do that!");
            return false;
        }
    }

    for (let i = 0; i < document.getElementsByClassName("cell").length; i++) 
    {
        document.getElementsByClassName("cell")[i].onclick = function(){turn(document.getElementsByClassName("cell")[i].id)};//Jquery not here be cause I'm an idiot still learning
    }
    
    const turn = function(position) 
    {
        if(gameOver === false)
        {
            checkIfValid(position);
            checkForWinning();
            if(gameOver === false)
            {
                if(playersTurn === "X")
                {
                    playersTurn = "O";
                }
                else
                {
                    playersTurn = "X";
                }
            }
        }
        else
        {
            console.log("Game over, we're done here.");
        }
    }
});