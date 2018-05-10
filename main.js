
window.addEventListener('DOMContentLoaded', function(event){
	
	// constantes canvas
	const canvasElt = document.querySelector("canvas#canvas"),
			context = canvasElt.getContext("2d");

	// hauteur et largeur canvas + coordonnées centrales
	let screenWidth = canvasElt.width = window.innerWidth,
		screenHeight = canvasElt.height = window.innerHeight,
		centerX      = screenWidth / 2,
		centerY      = screenHeight / 2;

	// Definitions "serpent à boules"
	let snake_angleX = 0,
		snake_angleY = 0,
		snake_radiusX = 200,
		snake_radiusY = 200,
		snake_offsetHeight = screenHeight * 0.3,
		snake_offsetWidth = screenWidth * 0.3,
		snake_speed1 = 0.04,
		snake_speed2 = 0.06,
		snake_totalBall = 8,
		snake_slice = (Math.PI * 2) /8;

	render();

	function render(){

		context.clearRect(0, 0, screenWidth, screenHeight);
		for (let boule = 0; boule < snake_totalBall; boule ++){
			let x = centerX + Math.cos(snake_angleX + snake_slice * boule) * snake_radiusX,
				y = centerY + Math.sin(snake_angleY + snake_slice * boule) * snake_radiusY;

			context.beginPath();
			context.arc(x, y, 20, 0, Math.PI * 2, false);
			context.fill();
		}
		snake_angleX += snake_speed1;
		snake_angleY += snake_speed2;
		requestAnimationFrame(render);
	}
});