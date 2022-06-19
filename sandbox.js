document.body.style.overflow = 'hidden';

// Constants
const addTodo = document.getElementById('addTodo');
const ul = document.querySelector('ul');
const submitListener = document.querySelector('#AddTodo');
const draggables = document.querySelectorAll('.todos');
const todoContainer = document.querySelector('.main-wrapper');

ul.addEventListener('dragstart', e => {
    e.target.classList.add('dragging');
});

ul.addEventListener('dragend', e => {
    e.target.classList.remove('dragging');
});

todoContainer.addEventListener('dragover', e => {
    e.preventDefault();
    const draggable = document.querySelector('.dragging')
    const afterElement = getDragAfterElement(e.clientY)
    if(afterElement == null){
        ul.appendChild(draggable)
    } else {
        ul.insertBefore(draggable, afterElement)
    }
})

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
    newTodo.setAttribute('draggable', true);
    newTodo.innerHTML +="<span>" + todoTask + "</span>";
    ul.appendChild(newTodo)
}

function getDragAfterElement(yPos){
    const draggableElements = [...ul.querySelectorAll('.todos:not(.dragging)')]
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = yPos - box.top - box.height / 2

        if(offset < 0 && offset > closest.offset){
            return  { offset: offset, element: child }
        } else {
            return closest
        }

    }, { offset: Number.NEGATIVE_INFINITY}).element
}
