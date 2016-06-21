
//user interface
$(function () {
	$(document.body).on('click', '.content', function() {
	 		$(this).toggleClass('glyphicon glyphicon-heart');
	 	});
})


window.onload = function() {
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('fileDisplayArea');

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /text.*/;

			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
          debugger;
					var string = reader.result;
					bingoArray = string.split(/\r?\n/);
          bingoArray = bingoArray.filter(function(str) {
          return /\S/.test(str);
        });
					var board = new Board(5);
					board.buildBoard();
					for(i = 0; i < board.squares; i++) {
						$(".board").append("<div class='row'></div>")
						for(j = 0; j < board.squares; j++) {
							$(".board").append("<div class='square'><div class='content' x='" + j + "' y='" + i + "'>" + board.grid[i][j].string + "</div></div>")
						}
					}
				}
				reader.readAsText(file);
			} else {
				fileDisplayArea.innerText = "File not supported!"
			}
		});
}

//business rules

var bingoArray = [];

var Square = function (string) {
	this.string = string;
	this.marked = false;
}

// Board constructor - 5 squares makes Bingo

var Board = function (squares) {
	this.squares = squares;
	this.grid = [];
}

Board.prototype.buildBoard = function() {
    var i,j;
		var stringValue;
    for(i = 0; i < this.squares; i++){
        this.grid[i] = [];
        for(j = 0; j < this.squares; j++){
						stringValue = bingoArray[Math.floor(Math.random() * bingoArray.length)]
            this.grid[i][j] = new Square(stringValue);
        }
    }
};
