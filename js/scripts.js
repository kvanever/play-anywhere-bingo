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
		});
}
