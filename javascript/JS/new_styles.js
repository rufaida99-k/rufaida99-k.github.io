let date = new Date(); //Get current Date
let day = date.getDay();
let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("It's " + week[day] + "!");

/*Display the "Day" */

let weekDay = document.querySelector('h3');
weekDay.textContent = "It's " + week[day] + "!";


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

var image_track = 'x';
function changeImage() {
	var image = document.getElementById('myPicture');
	if (image_track == 'x') {
		image.src = "images/small/Tablet.png";
		image_track = 'y';
	}

	else {
		image.src = "images/small/Polaroid.jpg";
		image_track = 'x';
	}

	console.log(image_track);
	console.log(image.src);

}

