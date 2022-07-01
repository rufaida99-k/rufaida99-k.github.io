let date = new Date(); //Get current Date
let day = date.getDay();
let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];
console.log(date + ", " + week[day]);
let month = date.getMonth() + 1;
let weekDay = document.querySelector('h3');
weekDay.textContent = week[day] + ", " + date.getDate() + " " + months[month] + " " + date.getFullYear();



$("#switch").on("click", () => {
  if($("#switch").prop("checked")) {
      $(".wrapper").addClass("dark");
  } else {
    $(".wrapper").removeClass("dark");
  }
})
