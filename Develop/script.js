// set date and time on header
let date = new Date();

$("#currentDay").text(
  "Date: " + moment(date).format("MMMM Do YYYY, h:mm:ss a")
);

// finding time to set past, present, future colors to planner
let time = [
  $("#hour8"),
  $("#hour9"),
  $("#hour10"),
  $("#hour11"),
  $("#hour12"),
  $("#hour13"),
  $("#hour14"),
  $("#hour15"),
  $("#hour16"),
  $("#hour17"),
  $("#hour18"),
  $("#hour19"),
];

function timeOfDay() {
  for (i = 0; i < time.length; i++) {
    if (moment(date).hour() === time[i].attr("id")) {
      time[i].addClass("present");
    } else if (moment(date).hour < time[i].attr("id")) {
      time[i].addClass("future");
    } else {
      time[i].addClass("past");
    }
  }
}

timeOfDay();

setInterval(timeOfDay(), 1000 * 60 * 60);

// store tasks
$(".saveBtn").on("click", function () {
  var time = $(this).parent().attr("id");
  var text = $(this).siblings(".description").val();

  console.log(time, text);
  localStorage.setItem(time, text);
});

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
