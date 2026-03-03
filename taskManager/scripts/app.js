function hello()
{
    console.log("Hello World");
}
// An example of changing the logic exec
function saveTask(){
    console.log("Saving Task");
    // get the values from the form
    const title = $("#txtTitle").val();
    const desc = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    // create a new task object
    const task = new Task(title,desc,color,date,status,budget);
    console.log(task);
    displayTask(task);  
    //Send to server

    $.ajax({
        type:"POST",
        url:API,
        data:JSON.stringify(task),
        contentType:"application/json",
        success: function(created){
            displayTask(task)
            console.log(created);
            
        },
        error: function(err){
            console.log(err);
        }

    })
}

function displayTask(task){
    let syntax = `
    <div class="task" style="border-color:${task.color}">
      <div class="info">
        <h4>${task.title}</h4>
        <p>${task.desc}</p>
      </div>
      <label class="status">${task.status}</label>
      <div class="date-budget">
        <label>Due: ${task.date}</label>
        <label>Budget: $${task.budget}</label>
      </div>
    </div>`;
    
  // Inject the new HTML into the DOM Tree
  $(".list").append(syntax);

}

//define the URL of the server
const API="https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks";

function loadTasks(){

    $.ajax({
        type:"GET",// HTTP method - READ
        url: API,
        datatype: "json", //Expected formal
        success: function(data){
            console.log("Data received", data);
        },
        error: function(error){
            console.log("Error", error);
        }
    })
}


function init ()
{
    hello();
    console.log("Hello this is the DOM");
    // hook events
    $("#btnSave").click(saveTask);
    // load data from the server
    loadTasks();
}
// force to my logic to run the html and css first - and when they finish the logic 
// will be executed
window.onload = init;

function range(){
    $.ajax({
        type:"PUT",
        url:API + "/4",
        data: JSON.stringify({title: "Hello my name is Chuck!"}),
        contentType: "application/json",
        success: function(updated){
            console.log(updated);
        },
        error: function(error){
            console.log(error);
        }
    })
}