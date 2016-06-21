var bingoArray = [];

window.onload = function() {
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('fileDisplayArea');

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /text.*/;

			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					var string = reader.result;
					bingoArray = string.split(/\r?\n/);
					for (i = 1; i <= 25; i++) {
					$(".content#" + i).text(bingoArray[Math.floor(Math.random() * bingoArray.length)])
				}
				}
				reader.readAsText(file);
			} else {
				fileDisplayArea.innerText = "File not supported!"
			}
			Board.grid.forEach
			$(".board").append("<div class='square'><div class='content' id='1'>" + Board.grid[i][j].string + "</div></div>")
		});
}

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
    for(i = 0; i < this.squares; i++){
        this.grid[i] = [];
        for(j = 0; j < this.squares; j++){
            this.grid[i][j] = new Square(bingoArray[Math.floor(Math.random() * bingoArray.length)]);
        }
    }
};
