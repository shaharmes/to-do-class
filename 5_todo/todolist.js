const list = document.querySelector('.todo-list');
const input = document.querySelector('.new-todo');
const dateElement = document.getElementById("date");
const LIST = [];
let id = 0;
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const toDo = input.value;
        if (toDo) {
            addToDo(toDo, id, false, false);
            LIST.push({
                name: toDo,
                id: id,
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
                    '<input class="toggle"' +
                        'type="checkbox" />' +
                    '<label>'+ toDo + '</label>' +
                '<button class="destroy"></button>' +
                '</div>' +
                '<input class="edit" />' +
            '</li>';    
    const position = "beforeend";
    list.insertAdjacentHTML(position, text);
}