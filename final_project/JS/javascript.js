let date = new Date(); //Get current Date
let day = date.getDay();
let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(date + ", " + week[day]);
let month = date.getMonth() + 1;
let weekDay = document.querySelector('h3');
weekDay.textContent = date.getDate() + "/" + month + "/" + date.getFullYear() + ", " + week[day];




function dark() {
	const background = document.querySelector('body');
	background.style.backgroundColor = 'black';
	background.style.color = 'white';
	const navigation = document.querySelectorAll('nav > a'); 
	for (let i = 0; i < 4; i++) {
		navigation[i].className = 'dark';
	}
	const footer = document.querySelector('footer > p > a') 
	footer.className = 'dark'; 
}

function light() {
	const background = document.querySelector('body');
	background.style.backgroundColor = 'white';
	background.style.color = 'black';
	const navigation = document.querySelectorAll('nav > a'); 
	for (let i = 0; i < 4; i++) {
		navigation[i].className = 'light';
	}
	const footer = document.querySelector('footer > p > a') 
	footer.className = 'light'; 
}


var image_track = 'x';
function changeImage() {
	var image = document.getElementById('myPicture1');
	if (image_track == 'x') {
		image.src = "images/small/nyc_text.png";
		image.srcset = "images/large/nyc_text.png"
		image_track = 'y';
	}

	else {
		image.src = "images/small/nyc_cover.png";
		image.srcset= "images/large/nyc_cover.png";
		image_track = 'x';
	}

	//console.log(image_track);
	//console.log(image.src);

}
var image_track = 'm';
function changeImage1() {
	var image = document.getElementById('myPicture2');
	if (image_track == 'm') {
		image.src = "images/small/moon_text.png";
		image.srcset= "images/large/moon_text.png";
		image_track = 'n';
	}

	else {
		image.src = "images/small/moon_cover.png";
		image.srcset= "images/large/moon_cover.png";
		image_track = 'm';
	}

	//console.log(image_track);
	//console.log(image.src);

}

var image_track = 'p';
function changeImage2() {
	var image = document.getElementById('myPicture3');
	if (image_track == 'p') {
		image.src = "images/small/poem_text.png";
		image.srcset = "images/large/poem_text.png"
		image_track = 'l';
	}

	else {
		image.src = "images/small/poem_cover.png";
		image.srcset= "images/large/poem_cover.png";
		image_track = 'p';
	}

	//console.log(image_track);
	//console.log(image.src);

}


