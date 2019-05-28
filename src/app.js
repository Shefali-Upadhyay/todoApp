//add function
let addTask = () => {
  let value = document.getElementById('task').value;
  if(value != ''){
    let li=document.createElement('li');
    li.setAttribute('class', 'pb-2');
    li.innerHTML=`
    <div class="continer pt-2 border rounded border-warning px-3" id="task-view">
      <label class="chkbox-container">${value}
        <input type="checkbox">
        <span class="checkmark rounded"></span>
        <button class="btn btn-danger delete">
          <i class="fas fa-trash"></i>
        </button>
      </label>
    </div>`;
    document.getElementById('todo').appendChild(li);
    document.getElementById('task').value = '';
  }
}

//delete function
document.getElementById("todo").addEventListener("click", event => { event.target.closest("li").remove(); });

//user clicked on the add button
//if there is any text inside the task field, add the text to the todo list
document.getElementById('add').addEventListener('click', addTask);

//user pressed enter
//if there is any text inside the task field, add the text to the todo list
document.getElementById('task').addEventListener('keydown', (event) => {
  if (event.keyCode == 13) {
    addTask();
  }
});

//remove all the contents in the list on clicking refresh
document.getElementById('refresh').addEventListener('click', () => {
  document.getElementById('todo').innerHTML = '';
  document.getElementById('task').value = '';
});
