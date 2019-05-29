"use strict";

//add function
var addTask = function addTask() {
  var value = document.getElementById('task').value;

  if (value != '') {
    var li = document.createElement('li');
    li.setAttribute('class', 'pb-2');
    li.innerHTML = "\n    <div class=\"continer pt-2 border rounded border-warning px-3\" id=\"task-view\">\n      <label class=\"chkbox-container\">".concat(value, "\n        <input type=\"checkbox\">\n        <span class=\"checkmark rounded\"></span>\n        <button class=\"btn btn-danger\" id=\"delete\">\n          <i class=\"fas fa-trash\"></i>\n        </button>\n      </label>\n    </div>");
    document.getElementById('todo').appendChild(li);
    document.getElementById('task').value = '';
  }
}; //delete function


document.getElementById('todo').addEventListener('click', function (event) {
  if (event.target.closest('#delete')) {
    event.target.closest('li').remove();
  }
}); //user clicked on the add button
//if there is any text inside the task field, add the text to the todo list

document.getElementById('add').addEventListener('click', addTask); //user pressed enter
//if there is any text inside the task field, add the text to the todo list

document.getElementById('task').addEventListener('keydown', function (event) {
  if (event.keyCode == 13) {
    addTask();
  }
}); //remove all the contents in the list on clicking refresh

document.getElementById('refresh').addEventListener('click', function () {
  document.getElementById('todo').innerHTML = '';
  document.getElementById('task').value = '';
}); //hiding the checkbox and the delete button
// var hide = () => {
//   var taskView = document.getElementById('task-view');
//   taskView.onmouseover = () => {
//     document.getElementById('delete').style.display = 'inline';
//     document.getElementById('checkmark').tagName.style.display = 'inline';
//   }
// };
// hide();