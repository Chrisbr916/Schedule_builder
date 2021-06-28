var saveAct = $('#saveAct');
var forminput = $('#formEnter');
var activityList = $('#activityList');
var printedAct = $('#toDo');
//this function apends the list in the html with what is entered 
var printActivity = function(form){
    var listEl =$('<li>');
    listEl.addClass('activityItem');
    listEl.appendTo(activityList);
};

var handleFormsubmit = function(event){
    event.preventDefault();

    var activityInput = forminput.val();
    


    printActivity(activityInput);
}

printedAct.on('submit', handleFormsubmit);


