function addTask() {
    var taskInput = document.getElementById("taskInput");
    var task = taskInput.value;
  
    if (task === "") {
      alert("Please enter a task.");
      return;
    }
  
    var todoTable = document.getElementById("todoBody");
    var newRow = document.createElement("tr");
    var taskCell = document.createElement("td");
    var completeButtonCell = document.createElement("td");
  
    taskCell.textContent = task;
  
    var completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", completeTask);
  
    completeButtonCell.appendChild(completeButton);
    newRow.appendChild(taskCell);
    newRow.appendChild(completeButtonCell);
    todoTable.appendChild(newRow);
  
    taskInput.value = "";
  }
  
  function completeTask() {
    var row = this.parentNode.parentNode;
    var task = row.firstChild.textContent;
  
    var completedTable = document.getElementById("completedBody");
    var newRow = document.createElement("tr");
    var taskCell = document.createElement("td");
  
    taskCell.textContent = task;
  
    newRow.appendChild(taskCell);
    completedTable.appendChild(newRow);
  
    row.parentNode.removeChild(row);
  }

  



// window.addEventListener('load'),() =>{
//     var form=document.getElementById("newtaskform")
//     var input=document.querySelector("#inputtask")
//     var listtask=document.querySelector("#tasks")

//     form.addEventListener('submit',(e)=>(e.preventDefault()))
// }

// function newelement(){
//     var li=document.createElement("li")
//     var inputvalue=document.getElementById("inputtask").value;
//     var x=document.createTextNode(inputvalue);
//     li.appendChild(x)

//     if (inputvalue=='')
//     {
//         alert("add a task")

//     }
//     else{
//         document.getElementById("mylist").appendChild(li);

//     }
//     document.getElementById("inputtask").value="";
// }

// var lis=document.querySelector('ul')
// lis.addEventListener("click",
// function ev(){
//     if(ev.target.tagName=="LI"){
//         ev.target.classList.toggle('checked');
//     }
// },false
// )

// //create a "close" button and append it to each list item
// var mynode=document.getElementsByTagName('li')
// var i;
// for(i=0; i<mynode.length;i++)
// {
//     var span=document.createElement("span")
//     var text=document.createTextNode("/u007")
//     span.className="close"
//     span.appendChild(text)
//     mynode[i].appendChild(span)

// }

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var task = taskInput.value;
  
    if (task === "") {
      alert("Please enter a task.");
      return;
    }
  
    var todoTable = document.getElementById("todoBody");
    var newRow = document.createElement("tr");
    var taskCell = document.createElement("td");
    var completeButtonCell = document.createElement("td");
  
    taskCell.textContent = task;
  
    var completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", completeTask);
  
    completeButtonCell.appendChild(completeButton);
    newRow.appendChild(taskCell);
    newRow.appendChild(completeButtonCell);
    todoTable.appendChild(newRow);
  
    taskInput.value = "";
  }
  
  function completeTask() {
    var row = this.parentNode.parentNode;
    var task = row.firstChild.textContent;
  
    var completedTable = document.getElementById("completedBody");
    var newRow = document.createElement("tr");
    var taskCell = document.createElement("td");
  
    taskCell.textContent = task;
  
    newRow.appendChild(taskCell);
    completedTable.appendChild(newRow);
  
    row.parentNode.removeChild(row);
  }
  











