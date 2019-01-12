$(document).ready(function()  {
    
    /* array of arrays containing keyboard labels by row */
    const qwerty = [["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
                ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
                    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
                        ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]]; 

    const higherQWERTY = [['`','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
                ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'],
                  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"],
                    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/']];
    

    function assignKeyboard(type) {
        for (i = 0; i < type.length; i++) { 
            for (n = 0; n < type[i].length; n++) {
                hexId = String(n) + "row" + String(i);
                document.getElementById(hexId).innerHTML = type[i][n];
            }
        }
    }
    let currentKeyboard = qwerty
    assignKeyboard(currentKeyboard);

    const typingText = ["In the eleven years that separated the Declaration of the Independence of the United States from the completion of that act in the ordination of our written Constitution, the great minds of America were bent upon the study of the principles of government that were essential to the preservation of the liberties which had been won at great cost and with heroic labors and sacrifices.", 
                        "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."];

    /* choose random text from typingText array and assign a maxlength for the textarea */
    function assignText() {
        let text = typingText[Math.floor(Math.random() * typingText.length)];
        $('#text p').text(text);
        $("#typingbox").attr('maxlength', text.length);
    }
    
    assignText()
    
    /* begin functionality for the typing effects on hexagonal keyboard */
    function hexChanger(keyOpacity) {
        return event => {
            let keyName = event.key;

            for (i = 0; i < currentKeyboard.length; i++) { 
                for (n = 0; n < currentKeyboard[i].length; n++) {
                    if (currentKeyboard[i][n] === String(keyName)) {
                        hexId = String(n) + "row" + String(i);
                        document.getElementById(hexId).parentNode.style.opacity = keyOpacity;
                    }
                }
            }

        }
    };

    let onKeyDown = hexChanger('0.1');
    let onKeyUp = hexChanger('1');
    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);

    /* need to add timer functionality, add another function for eventlistening-but only fires once?
        can use $('#typingbox').value to get whatever is entered into the textarea
        needs to check value against the text in '#text p' and change color of word when incorrect
        timer ends when the textarea reaches max number of characters.

        also needs functionality for multiple keyboards and uppercase letters
        also maybe make the key opacity change for a set amount of time
    */

    const colorCurrentWord = "#dddddd";
    const colorCorrectWord = "#93C572";
    const colorIncorrectWord = "#e50000";

    // test data
    let wordData = {
        seconds: 60,
        correct: 0,
        incorrect: 0,
        total: 0,
        typed: 0
    };

    // Changes the display value of an element from none to the onSetting. If not on none, changes it to none
    function toggleDisplay(elemId, onSetting) {
        if ($(elemId).css('display') === 'none') {
            $(elemId).css('display', onSetting);
        } else {
            $(elemId).css('display', 'none');
        }
    } 

    /* checks if the last character typed in the textarea is correct and updates the wordData accordingly.
        also adds a red underline to all of the text if the letter typed is incorrect 
        also checks to see if all of the text has been typed, if so, the results are displayed */
    function checkLetter() {
        let typed = document.querySelector('textarea').value;

        let currentLetter = typed[typed.length - 1];
        let correctText = $('#text p').text();

        // display results after text is completed
        if (typed.length === correctText.length) {
            toggleDisplay('#resultbox', 'flex');
            //TODO probably should do something else like remove the textarea
        }

        // check if last letter typed is correct
        if (currentLetter !== correctText[typed.length - 1]) {
            $('#typingbox').css('text-decoration', 'underline #F26D60');
            //TODO needs to add data to the dictionary
            console.log('wrong');
        } else {
            $('#typingbox').css('text-decoration', 'none');
            //TODO needs to add data to the dictionary
            console.log('right')
        }
    }

    // adds the checkLetter function to the textbox as an event listener
    var textArea = document.querySelector('textarea');
    textArea.addEventListener('input', checkLetter, false); 
    
    
    //shows result box at the moment but should show options- not in html yet    
    $("#options").click(function () { toggleDisplay('#resultbox', 'flex')});

});