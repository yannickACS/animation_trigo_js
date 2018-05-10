
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
		snake_radiusY = 40,
		snake_offsetHeight = screenHeight * 0.3,
		snake_offsetWidth = screenWidth * 0.3,
		snake_speed1 = 0.03,
		snake_speed2 = 0.04,
		snake_totalBall = 64,
		snake_slice = (Math.PI * 2) / snake_totalBall,
		snake_baseAlpha = 0.55,
		snake_offsetAlpha = 0.45;

	render();

	function render(){
		context.clearRect(0, 0, screenWidth, screenHeight);
		for (let boule = 0; boule < snake_totalBall; boule ++){
			let x = centerX + Math.cos(snake_angleX + snake_slice * boule) * snake_radiusX,
				y = centerY - Math.sin(snake_angleY + snake_slice * boule) * snake_radiusY;
			// let alpha = snake_baseAlpha + Math.cos(snake_angleY + snake_slice * boule) * snake_offsetAlpha;
			

			context.beginPath();
			context.arc(x, y, 20, 0, Math.PI * 2, false);
			// context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
			context.fillStyle = 'rgb(' + Math.floor(255 - (255 / snake_totalBall) * boule) + ',' + Math.floor(255 - (255 / snake_totalBall) * boule) + ',0)';
			context.fill();
		}
		snake_angleX += snake_speed1;
		snake_angleY += snake_speed2;
		requestAnimationFrame(render);
	}
});