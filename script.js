var saveAct = $('#saveAct');
var forminput = $('#formEnter');
var activityList = $('#activityList');
var printedAct = $('#toDo');
var saveBttn = $('.Save');


saveBttn.on('click',function(event){
    event.preventDefault();
    //console.log("");
    var usertText = $(this).siblings('input').val();
    var userHour = $(this).siblings('input').attr("id");
    localStorage.setItem(userHour,usertText);
    renderActivity();
})





//this function apends the list in the html with what is entered 
var printActivity = function(activity,i){
   var listEl =$('<li>');
   listEl.text(activity);
    listEl.addClass('activityItem');
    //listEl.appendTo
    $("#activityList"+ i).html(listEl);
    
};

// this is what makes each comment stay within the box that they are supposed to be added in 
var renderActivity = function(){
    printActivity(localStorage.getItem("8"),8)
    printActivity(localStorage.getItem("9"),9)
    printActivity(localStorage.getItem("10"),10)
    printActivity(localStorage.getItem("11"),11)
    printActivity(localStorage.getItem("12"),12)
    printActivity(localStorage.getItem("13"),13)
    printActivity(localStorage.getItem("14"),14)
    printActivity(localStorage.getItem("15"),15)
    printActivity(localStorage.getItem("16"),16)
    printActivity(localStorage.getItem("17"),17)
}
renderActivity();



//var colorchange = function(){
  //  if 
//}