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