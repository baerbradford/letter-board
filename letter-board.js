var letterBoard = function() {

    // Source this dictionary dataset from worksheet.
    var charDict = {};charDict['0'] = 6;charDict['1'] = 6;charDict['2'] = 4;charDict['3'] = 4;charDict['4'] = 4;charDict['5'] = 4;charDict['6'] = 4;charDict['7'] = 4;charDict['8'] = 4;charDict['9'] = 4;charDict['-'] = 2;charDict['?'] = 2;charDict['('] = 2;charDict[')'] = 2;charDict['@'] = 2;charDict['*'] = 2;charDict['&'] = 2;charDict['#'] = 2;charDict['%'] = 2;charDict['<'] = 2;charDict['>'] = 2;charDict['$'] = 2;charDict['♫'] = 2;charDict['A'] = 14;charDict['→'] = 2;charDict['B'] = 6;charDict['C'] = 8;charDict['¢'] = 2;charDict[','] = 8;charDict['D'] = 8;charDict['|'] = 2;charDict['•'] = 2;charDict['E'] = 18;charDict['€'] = 2;charDict['F'] = 6;charDict['♀'] = 2;charDict['G'] = 6;charDict['H'] = 8;charDict['♥'] = 2;charDict['I'] = 16;charDict['J'] = 4;charDict['K'] = 4;charDict['L'] = 10;charDict['M'] = 8;charDict['♂'] = 2;charDict['×'] = 2;charDict['N'] = 12;charDict['O'] = 14;charDict['P'] = 8;charDict['.'] = 10;charDict['+'] = 2;charDict['#'] = 2;charDict['Q'] = 4;charDict['R'] = 12;charDict['S'] = 12;charDict['☺'] = 2;charDict['T'] = 12;charDict['U'] = 8;charDict['V'] = 4;charDict['W'] = 6;charDict['X'] = 4;charDict['Y'] = 6;charDict['¥'] = 2;charDict['Z'] = 4;

    var initLetterBoards = function() {
        $('.letter-board').each(function (index, element) {
            var letterBoardContainer = $(element);
            letterBoardContainer.text('#SPELTONFELT');
            var sourceId = letterBoardContainer.data('letter-board-source');
            $('#' + sourceId).on('change keyup paste', function() {
                var userInput = $(this).val().toUpperCase();
                letterBoardContainer.text(userInput);

                var userMessage = '';
                var runningCountMessage = '';
                for(var char in charDict) {
                    if (charDict.hasOwnProperty(char)) {
                        var charCount = (userInput.split(char).length - 1);
                        if (charCount > 0 && charCount > charDict[char]) {
                            userMessage += 'Oops! There are ' + charDict[char] + ' ' + char + "'s in a set. Please try a shorter message!<br>";
                            runningCountMessage += char + ': ' + charCount + ' <b>OVER LIMIT</b> <br>';
                        } else if (charCount > 0) {
                            runningCountMessage += char + ': ' + charCount + '<br>';
                        }                        
                    }
                }

                for (var i = 0; i < userInput.length; i++) {
                    var char = userInput.charAt(i).trim();
                    if (char && !(char in charDict)) {
                        userMessage += 'Uh oh! "' + char + '" character is not included in the set.' + '<br>';
                    }
                  }

                $('#user-message').html(userMessage);
                $('#running-count-message').html(runningCountMessage);
            });
            $('#' + sourceId).val('#SPELTONFELT');
            $('#' + sourceId).trigger('change');
        });
    };

    return {
        initLetterBoards: initLetterBoards
    };
}();