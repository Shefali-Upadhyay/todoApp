//user clicked on the add button
//if there is any text inside the task field, add the text to the todo list
document.getElementById('add').addEventListener('click', () => {
  let value = document.getElementById('task').value;
  if(value) {
    addItem(value);
  }
});

//user pressed enter
//if there is any text inside the task field, add the text to the todo list
document.getElementById('task').addEventListener('keydown', function (e) {
  let value = this.value;
  if ((e.code === 'Enter' || e.code === 'NumpadEnter') && value) {
    addItem(value);
  }
});

//add function
let addItem = (value) => {
  $('#todo').append(`<li class="pb-2">
  <input type="checkbox">
  <label>${value}</label>
  <button type="button" class="btn btn-danger delete"><i class="fas fa-trash"></i></button>
  </li>`);
  $('#task').val("");
}

//delete function
$('#todo').on('click', '.delete', () => {
  $(this).parent().remove();
});
