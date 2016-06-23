//user interface
window.onload = function() {
	var fileInput = document.getElementById('file-input');

	fileInput.addEventListener('change', function(e) {
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

				board = new Board(5)
				board.buildBoard();

				for(i = 0; i < Math.pow(board.squares, 2); i++) {
					$("#" + i).text(board.grid[0].string)
					board.grid.push(board.grid.shift());
					}
				$("#new-game").toggle();
				$('.table-cell').addClass('clickable')
				$("#file-input").toggle();
			}
		})
}

$(document).on('click','div.clickable', function() {
	$(this).toggleClass('glyphicon glyphicon-heart');
	if ($(this).data('value') === 1) {
		$(this).text(board.grid[$(this).attr('id')].string);
  //alert(event.target.id);
		$(this).data('value', 0);
	} else {
		$(this).text("");
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

	if (row1 === 5) {
		$("#0, #1, #2, #3, #4").parent().parent().parent().addClass('bingo-background');
		$('#myModal').modal('show')
		$('.modal').css({'z-index': '5000'})
		$('.table-cell').removeClass('clickable')
	} else if (row2 === 5) {
		$("#5, #6, #7, #8, #9").parent().parent().parent().addClass('bingo-background');
		$('#myModal').modal('show')
		$('.modal').css({'z-index': '5000'})
		$('.table-cell').removeClass('clickable')
	} else if (row3 === 5) {
		$("#10, #11, #12, #13, #14").parent().parent().parent().addClass('bingo-background');
		$('#myModal').modal('show')
		$('.modal').css({'z-index': '5000'})
		$('.table-cell').removeClass('clickable')
	}
	else if (row4 === 5) {
		$("#15, #16, #17, #18, #19").parent().parent().parent().addClass('bingo-background');
		$('#myModal').modal('show')
		$('.modal').css({'z-index': '5000'})
		$('.table-cell').removeClass('clickable')
	}
	else if (row5 === 5) {
		$("#20, #21, #22, #23, #24").parent().parent().parent().addClass('bingo-background');
		$('#myModal').modal('show')
		$('.modal').css({'z-index': '5000'})
		$('.table-cell').removeClass('clickable')
	}
	else if (col1 === 5) {
		$("#0, #5, #10, #15, #20").parent().parent().parent().addClass('bingo-background');
		$('#myModal').modal('show')
		$('.modal').css({'z-index': '5000'})
		$('.table-cell').removeClass('clickable')
	}
	else if (col2 === 5) {
		$("#1, #6, #11, #16, #21").parent().parent().parent().addClass('bingo-background');
		$('#myModal').modal('show')
		$('.modal').css({'z-index': '5000'})
		$('.table-cell').removeClass('clickable')
	}
	else if (col3 === 5) {
		$("#2, #7, #12, #17, #22").parent().parent().parent().addClass('bingo-background');
		$('#myModal').modal('show')
		$('.modal').css({'z-index': '5000'})
		$('.table-cell').removeClass('clickable')
	}
	else if (col4 === 5) {
		$("#3, #8, #13, #18, #23").parent().parent().parent().addClass('bingo-background');
		$('#myModal').modal('show')
		$('.modal').css({'z-index': '5000'})
		$('.table-cell').removeClass('clickable')
	}
	else if (col5 === 5) {
		$("#4, #9, #14, #19, #24").parent().parent().parent().addClass('bingo-background');
		$('#myModal').modal('show')
		$('.modal').css({'z-index': '5000'})
		$('.table-cell').removeClass('clickable')
	}
	else if (diag1 === 5) {
		$("#0, #6, #12, #18, #24").parent().parent().parent().addClass('bingo-background');
		$('#myModal').modal('show')
		$('.modal').css({'z-index': '5000'})
		$('.table-cell').removeClass('clickable')
	}
	else if (diag2 === 5) {
		$("#4, #8, #12, #16, #20").parent().parent().parent().addClass('bingo-background');
		$('#myModal').modal('show')
		$('.modal').css({'z-index': '5000'})
		$('.table-cell').removeClass('clickable')
	}

});

$(function () {
	$("button#new-game").click(function (){
		$(".table-cell").text(' ');
		$('div.table-cell').removeClass();
		$("#new-game").toggle();
		$("#file-input").toggle();
		$('.modal').css({'z-index': '-1'})
		$('.table-cell').addClass('clickable')
		$('.square').removeClass('bingo-background')
	});
})

//business rules

var bingoArray = [];
var board;

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
