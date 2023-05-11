//Here we adjust the date for the footer
var date = document.querySelector("#date");
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var newDate = day + "/" + month + "/" + year;
date.innerText = newDate;
