"use strict";

var _this = void 0;

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
}); //add function

var addItem = function addItem(value) {
  $('#todo').append("<li class=\"pb-2\">\n  <input type=\"checkbox\">\n  <label>".concat(value, "</label>\n  <button type=\"button\" class=\"btn btn-danger delete\"><i class=\"fas fa-trash\"></i></button>\n  </li>"));
  $('#task').val("");
}; //delete function


$('#todo').on('click', '.delete', function () {
  $(_this).parent().remove();
});