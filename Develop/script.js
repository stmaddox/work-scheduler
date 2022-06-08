// Step 1. When I open the planner the current day and time is displayed at the top
// Step 2. When I scroll down the page I am presented with standard business hours
// Step 3. When I look at the time blocks for the day they are color cordinated for past, present, or future
// Step 4. When I click on a time block I can enter an event 
// Step 5. When I click on the save button, the text is saved to local storage 
// Step 6. When I refresh the page, the saved events stay 

$(document).ready(function (){

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function(){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        console.log(text, time)

        localStorage.setItem(time, text);
    })


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
    

})