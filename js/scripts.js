//user interface
window.onload = function() {
	var fileInput = document.getElementById('file-input');
	var startButton = document.getElementById('start-button')

	startButton.addEventListener('click', function(e) {
		var file = fileInput.files[0];
		var textType = /text.*/;
		var reader = new FileReader();
		reader.readAsText(file);

		reader.onload = function(e) {
			var string = reader.result;
			bingoArray = string.split(/\r?\n/);

      bingoArray = bingoArray.filter(function(str) {
      return /\S/.test(str);
    		})

			var board = new Board(5);
			board.buildBoard();

			for(i = 0; i < Math.pow(board.squares, 2); i++) {
				$("#" + i).text(board.grid[0].string)
				board.grid.push(board.grid.shift());
				}
			}
		})
}

$(document).on('click','div.table-cell', function() {
	$(this).toggleClass('glyphicon glyphicon-heart');
	if ($(this).data('value') === 1) {
  //alert(event.target.id);
		$(this).data('value', 0);
	} else {
  //alert(event.target.id);
		$(this).data('value', 1);}


	var row1 = ($('#0').data('value')+$('#1').data('value')+$('#2').data('value')+$('#3').data('value')+$('#4').data('value'));
	var row2 = ($('#5').data('value')+$('#6').data('value')+$('#7').data('value')+$('#8').data('value')+$('#9').data('value'));
	var row3 = ($('#10').data('value')+$('#11').data('value')+$('#12').data('value')+$('#13').data('value')+$('#14').data('value'));
	var row4 = ($('#15').data('value')+$('#16').data('value')+$('#17').data('value')+$('#18').data('value')+$('#19').data('value'));
	var row5 = ($('#20').data('value')+$('#21').data('value')+$('#22').data('value')+$('#23').data('value')+$('#24').data('value'));

	var col1 = ($('#0').data('value')+$('#5').data('value')+$('#10').data('value')+$('#15').data('value')+$('#20').data('value'));
	var col2 = ($('#1').data('value')+$('#6').data('value')+$('#11').data('value')+$('#16').data('value')+$('#21').data('value'));
	var col3 = ($('#2').data('value')+$('#7').data('value')+$('#12').data('value')+$('#17').data('value')+$('#22').data('value'));
	var col4 = ($('#3').data('value')+$('#8').data('value')+$('#13').data('value')+$('#18').data('value')+$('#23').data('value'));
	var col5 = ($('#4').data('value')+$('#9').data('value')+$('#14').data('value')+$('#19').data('value')+$('#24').data('value'));

	var diag1 = ($('#0').data('value')+$('#6').data('value')+$('#12').data('value')+$('#18').data('value')+$('#24').data('value'));
	var diag2 = ($('#4').data('value')+$('#8').data('value')+$('#12').data('value')+$('#16').data('value')+$('#20').data('value'));

	if (row1 === 5 || row2 === 5 || row3 === 5 || row4 === 5 || row5 === 5 || col1 === 5 || col2 === 5 || col3 === 5  || col4 === 5  || col5 === 5 || diag1 === 5 || diag2 === 5) {
		$('#myModal').modal('show')
		}
	})



//business rules

var bingoArray = [];

var Square = function (string) {
	this.string = string;
	this.marked = false;
}

// Board constructor - 5 uares makes Bingo

var Board = function (squares) {
	this.squares = squares;
	this.grid = [];
}

Board.prototype.buildBoard = function() {
  var i;
	var stringValue;
  for(i = 0; i < Math.pow(this.squares, 2); i++){
		stringValue = bingoArray.splice(Math.floor(Math.random() * bingoArray.length), 1)
    this.grid[i] = new Square(stringValue);
  	}
  }
