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
    let playerWinner = 'null';

    let gameOver = false;

    let draw = false;

    

    const endGame = function ()
    {
        if(draw === true)        
        {
            $('#leftBoard').html('<p style = "margin-top: 95px;"><span style="font-size: 100px;">Draw</span></p>');
            $('#rightBoard').html('<p style = "margin-top: 95px;"><span style="font-size: 100px;">Draw</span></p>');
        }
        else
        {
            if(playerWinner === 'X')
            {
                writeOnSideBoards('left','<p>WINNER<br><span style="font-size: 125px;">X</span></p>')
            }
            else
            {
                writeOnSideBoards('right','<p>WINNER<br><span style="font-size: 125px;">O</span></p>');
            }
        }
        gameOver = true;
    }

    const writeOnSideBoards = function(whichBoard, whatToWrite)
    {
        if(whichBoard === 'right')
        {
            $('#rightBoard').html(whatToWrite);
        }
        else if (whichBoard === 'left')
        {
            $('#leftBoard').html(whatToWrite);
        }
        else
        {
            $('#rightBoard').html(whatToWrite);
            $('#leftBoard').html(whatToWrite);
        }
    }

    const checkForWinning = function ()
    {

        //There might be a better way of doing this, but there's not that many win conditions, so I did it manually.

        //Horizontal wins
        if(positions[0] === positions[1] && positions[1] === positions[2] && positions[0] !== 'e')
        {
            playerWinner = playersTurn;
            endGame();
            return true;
        }
        if(positions[3] === positions[4] && positions[4] === positions[5] && positions[3] !== 'e')
        {
            playerWinner = playersTurn;
            endGame();
            return true;
        }
        if(positions[6] === positions[7] && positions[7] === positions[8] && positions[6] !== 'e')
        {
            playerWinner = playersTurn;
            endGame();
            return true;
        }

        //Vertical wins
        if(positions[0] === positions[3] && positions[3] === positions[6] && positions[0] !== 'e')
        {
            playerWinner = playersTurn;
            endGame();
            return true;
        }
        if(positions[1] === positions[4] && positions[4] === positions[7] && positions[1] !== 'e')
        {
            playerWinner = playersTurn;
            endGame();
            return true;
        }
        if(positions[2] === positions[5] && positions[5] === positions[8] && positions[2] !== 'e')
        {
            playerWinner = playersTurn;
            endGame();
            return true;
        }

        //Diagonal wins
        if(positions[0] === positions[4] && positions[4] === positions[8] && positions[0] !== 'e')
        {
            playerWinner = playersTurn;
            endGame();
            return true;
        }
        if(positions[2] === positions[4] && positions[4] === positions[6] && positions[2] !== 'e')
        {
            playerWinner = playersTurn;
            endGame();
            return true;
        }

        for (let i = 0; i < positions.length; i++) //If there's empty positions, then we can still play.
        {
            if(positions[i] === "e")
            {
                return false;
            }    
        }
        
        //If we can't make any more moves, then it's a draw.
        if(gameOver !== true)
        {
            draw = true;
            endGame();
            return true;
        }
        
    }

    const checkIfValid = function(position) //This does what it says on the box 
    {
        if(positions[position] !== "X" && positions[position] !== "O")//Is there an X or O in the cell.
        {
            positions[position] = playersTurn;
            document.getElementById(position).innerHTML = "<p>"+playersTurn+"</p>"; //Jquery not here be cause I'm an idiot still learning
            return true;
        }
        else
        {
            return false;//Invalid placement
        }
    }
    
    const turn = function(position) 
    { 
        if(gameOver === false && checkIfValid(position))//If you haven't won then give the other player the chalk
        {
            if(playersTurn === "X")
            {
                if(checkForWinning() === false)
                {
                    playersTurn = "O";
                    writeOnSideBoards('right',`<p>It's you'r turn<br><span style="font-size: 125px;">O</span></p>`);
                    writeOnSideBoards('left','<p> </p>');
                }
            }
            else
            {
                if(checkForWinning() === false)
                {
                    playersTurn = "X";
                    writeOnSideBoards('left', `<p>It's you'r turn<br><span style="font-size: 125px;">X</span></p>`);
                    writeOnSideBoards('right','<p> </p>');
                }
            }
        }
    }

    const newGame = function()
    {
        for (let i = 0; i < positions.length; i++) //clears the board
        {
            positions[i] = 'e';
            document.getElementById(i).innerHTML = "<p> </p>";
        }
        writeOnSideBoards('both','<p> </p>'); //clear the sides of the board
        playerWinner = 'null';
        playersTurn = 'X';//X goes first
        writeOnSideBoards('left', `<p>It's you'r turn<br><span style="font-size: 125px;">X</span></p>`);//Need a proper function for this 
        draw = false;//Put things back where I found it.
        gameOver = false;
    }
    
    newGame();

    //Reset button
    document.getElementById("resetButton").onclick = function(){newGame()};
    //this makes all of the cells in the grid clickable
    for (let i = 0; i < document.getElementsByClassName("cell").length; i++) 
    {
        document.getElementsByClassName("cell")[i].onclick = function(){turn(document.getElementsByClassName("cell")[i].id)};//Jquery not here be cause I'm an idiot still learning
    }
});