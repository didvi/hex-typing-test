$(document).ready(function()  {
    const querty = [['`','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
                ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'],
                  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"],
                    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/']]

    assignKeyboard = function (type) {
        for (i = 0; i < type.length; i++) { 
            for (n = 0; n < type[i].length; n++) {
                keyName = String(n) + "row" + String(i);
                document.getElementById(keyName).innerHTML = type[i][n];
            }
        }
    }
  
    assignKeyboard(querty);

    const typingText = ["In the eleven years that separated the Declaration of the Independence of the United States from the completion of that act in the ordination of our written Constitution, the great minds of America were bent upon the study of the principles of government that were essential to the preservation of the liberties which had been won at great cost and with heroic labors and sacrifices.", 
                        "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."];

    /* choose random text from typingText array and assign a maxlength for the textarea */
    function assignText() {
        let text = typingText[Math.floor(Math.random() * typingText.length)];
        $('#text p').text(text);
        $("#typingbox").attr('maxlength', text.length);
    }
    
    assignText()
    







});