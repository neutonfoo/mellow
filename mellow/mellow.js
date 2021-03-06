var currentR = getRandomInt(1, 254);
var rInterval = getRandomInt(1, 3);

var currentG = getRandomInt(1, 254);
var gInterval = getRandomInt(1, 3);

var currentB = getRandomInt(1, 254);
var bInterval = getRandomInt(1, 3);

$(document).ready(function() {
	$body = $('body');
	$centerText = $('.colorParagraph')

	updateBackgroundColor(); // Set initial color

	setInterval(function() {
		updateBackgroundColor();
	}, 30);

});

function updateBackgroundColor() {
	if(currentR <= 0 || currentR >= 255) {
		rInterval *= -1;
	}

	if(currentG <= 0 || currentG >= 255) {
		gInterval *= -1;
	}

	if(currentB <= 0 || currentB >= 255) {
		bInterval *= -1;
	}

	currentR += rInterval;
	currentG += gInterval;
	currentB += bInterval;

	var color = 'rgb(' + currentR + ', ' + currentG + ', ' + currentB + ')';
	var inverseColor = 'rgb(' + (255 - currentR) + ', ' + (255 - currentG) + ', ' + (255 - currentB) + ')';

	$centerText.css('color', inverseColor);

	$body.css('background-color', color);			
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function rgbToHex(r, g, b) {
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
