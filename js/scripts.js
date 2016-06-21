var bingoArray = [];

window.onload = function() {
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('fileDisplayArea');

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /text.*/;

			if (file.type.match(textType)) {
				debugger;
				var reader = new FileReader();

				reader.onload = function(e) {
					fileDisplayArea.innerText = reader.result;
					var string = reader.result;
					bingoArray = string.split(/\r?\n/);
				}

				reader.readAsText(file);

			} else {
				fileDisplayArea.innerText = "File not supported!"
			}

		});

}
