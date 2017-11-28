var letterBoard = function() {

    var initLetterBoards = function() {
        $('.letter-board').each(function (index, element) {
            var letterBoardContainer = $(element);
            var sourceId = letterBoardContainer.data('letter-board-source');
            $('#' + sourceId).on('change keyup paste', function() {
                letterBoardContainer.text($(this).val());
            });
        });
    };

    return {
        initLetterBoards: initLetterBoards
    };
}();