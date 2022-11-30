const list = document.querySelector('.todo-list');
const input = document.querySelector('.new-todo');
const dateElement = document.getElementById("date");
const counter = document.querySelector('.count');
const LIST = [];
let id = LIST.length;
const CHECK = 'checked';
const UNCHECK = "no";
const LINE_THROUGH = "lineThrough";

document.addEventListener('keyup', function (event) {
    console.log(LIST.length);
    if (event.key === 'Enter') {
        const toDo = input.value;
        if (toDo) {
            addToDo(toDo, id, false, false);
            LIST.push({
                name: toDo,
                id: LIST.length,
                done: false,
                trash: false
            });
        }
        input.value = '';
    }
});
function addToDo(toDo, id, done, trash) {
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : '';
    const text = 
            '<li >'+
                '<div class="view">' +
                    '<input class="toggle ' + DONE + '" job="complete" id="'+ id + '"' +
                        'type="checkbox" />' +
                    '<label class="text ' + LINE + '">'+ toDo + '</label>' +
                '<button class="destroy" job="delete"></button>' +
                '</div>' +
                '<input class="edit" />' +
            '</li>';    
    const position = "beforeend";
    list.insertAdjacentHTML(position, text);
    counter.innerHTML = LIST.length + 1;
}

list.addEventListener('click', function (event) {
    if (event.target.type === 'checkbox') {
        completeToDo(event.target);
    }
});

function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    if (element.classList.contains(CHECK)) {
        counter.innerHTML = LIST.length -1;
        LIST.length--;
        LIST[element.id].done = true;
    } else {
        counter.innerHTML = LIST.length +1;
        LIST.length++;
        LIST[element.id].done = false;
    }
    console.log(LIST);
}