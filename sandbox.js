const addTodo = document.getElementById('addTodo');
const todoList = document.querySelector('ul');
const submitListener = document.querySelector('#AddTodo');
document.body.style.overflow = 'hidden';

addTodo.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTodoTask(addTodo.value);
        addTodo.value = "";
    }
});

function addTodoTask(todoTask){
    let newTodo = document.createElement('li');
    newTodo.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "my-1","todos");
    newTodo.innerHTML +="<span>" + todoTask + "</span>";
    todoList.appendChild(newTodo)
}

addTodoTask("Do some javascript"); 