"use strict";

//user clicked on the add button
//if there is any text inside the task field, add the text to the todo list
document.getElementById('add').addEventListener('click', function () {
  var value = document.getElementById('task').value;

  if (value) {
    addItem(value);
  }
}); //user pressed enter
//if there is any text inside the task field, add the text to the todo list

document.getElementById('task').addEventListener('keydown', function (e) {
  var value = this.value;

  if ((e.code === 'Enter' || e.code === 'NumpadEnter') && value) {
    addItem(value);
  }
});

var addItem = function addItem(value) {
  $("#todo").append("<li>\n  <div class=\"custom-control custom-checkbox mb-3\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck\" name=\"example1\">\n    <label class=\"custom-control-label\" for=\"customCheck\">".concat(value, "</label>\n    <button type=\"button\" class=\"btn btn-danger\" id=\"delete\"><i class=\"fas fa-trash\"></i></button>\n  </div>\n</li>"));
};