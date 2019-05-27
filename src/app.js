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

let addItem = (value) => {
  $("#todo").append(`<li>
  <div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input" id="customCheck" name="example1">
    <label class="custom-control-label" for="customCheck">${value}</label>
    <button type="button" class="btn btn-danger" id="delete"><i class="fas fa-trash"></i></button>
  </div>
</li>`);
}