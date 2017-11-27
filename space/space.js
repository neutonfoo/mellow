$(document).ready(function() {

	var points = 100;

	$canvas = $('#canvas')

	var cWidth = window.innerWidth;
	var cHeight = window.innerHeight;

	$canvas.attr('width', cWidth)
	$canvas.attr('height', cHeight)

	var particles = [];

	for(var i = 0; i < points; i++) {
		particles.push({
			"x" : randomIntFromInterval(0, cWidth),
			"y" : randomIntFromInterval(0, cHeight),
			"acc" : randomIntFromInterval(1, 1),
			"dir" : randomIntFromInterval(0, 7)
		});
	}

	setInterval(function() {
		$('canvas').clearCanvas();

		$.each(particles, function( i, particle ) {
			// Update particles
			$canvas.drawEllipse({
			  fillStyle: '#000',
			  x: particle.x, y: particle.y,
			  width: 3, height: 3
			});

			$.each(particles, function( j, otherParticle ) {
				var distance = distanceFromPoints(particle.x, particle.y, otherParticle.x, otherParticle.y);

				if(distance < 150) {
					var shade = Math.floor(255 * distance / 150);
					var strokeColor = "rgb("+ shade + ", " + shade + ", " + shade + ")";
					$canvas.drawLine({
						strokeStyle: strokeColor,
						strokeWidth: 2,
						x1: particle.x, y1: particle.y,
						x2: otherParticle.x, y2: otherParticle.y
					});
				}
			});

			if(particle.dir == 0) {
				particle.y -= particle.acc;
			} else if(particle.dir == 1) {
				particle.x += particle.acc;
				particle.y -= particle.acc;
			} else if(particle.dir == 2) {
				particle.x += particle.acc;
			} else if(particle.dir == 3) {
				particle.x += particle.acc;
				particle.y += particle.acc;
			} else if(particle.dir == 4) {
				particle.y += particle.acc;
			} else if(particle.dir == 5) {
				particle.x -= particle.acc;
				particle.y += particle.acc;
			} else if(particle.dir == 6) {
				particle.x -= particle.acc;
			} else if(particle.dir == 7) {
				particle.x -= particle.acc;
				particle.y -= particle.acc;
			}

			if(particle.x <= 0 || particle.y <= 0 || particle.x >= cWidth || particle.y >= cHeight) {
				if(particle.dir >= 0 && particle.dir < 4) {
					particle.dir = randomIntFromInterval(4, 7);
				} else {
					particle.dir = randomIntFromInterval(0, 3);
				}
			}
		});
	}, 40);
});

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function distanceFromPoints(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}
