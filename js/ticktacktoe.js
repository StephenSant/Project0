$(document).ready(function() 
{
    // 0 1 2
    // 3 4 5
    // 6 7 8

    // e for empty

    let positions = ['e','e','e',
                     'e','e','e',
                     'e','e','e'];
    
    let playersTurn = 'x';

    const checkForWinning = function ()
    {
        if(positions[0] === positions[1] === positions[2] === 'x')
        {
            console.log('X wins');
            return 'x';
        }
        if(positions[0] === positions[3] === positions[6] === 'o')
        {
            console.log('O wins');
            return 'o';
        }
    }

    //console.log('beep');

    document.getElementById("a1").addEventListener("click", myFunction);
    function myFunction() {
        document.getElementById("a1").innerHTML = "<p>"+playersTurn+"</p>";
      }
});