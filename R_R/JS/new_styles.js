let date = new Date(); //Get current Date
let day = date.getDay();
let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("day: " + day);
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
console.log(date + ", " + week[day]);
let month = date.getMonth();
console.log("Months[month]: " + months[month]);
console.log("Month js: " + date.getMonth());

let weekDay = document.querySelector('h3');
weekDay.textContent = week[day] + ", " + date.getDate() + " " + months[month] + " " + date.getFullYear();



$("#switch").on("click", () => {
  if($("#switch").prop("checked")) {
      $(".boxy").addClass("dark");
  } else {
    $(".body").removeClass("dark");
  }
})

const darkMode = document.querySelector(".theme-toggle");

function darkify() {
  document.documentElement.classList.toggle("theme--night");
}

darkMode.addEventListener("click", darkify);

darkify();
