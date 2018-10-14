export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const LOAD_TODO = 'LOAD_TODO';

function addTodo (todo) {
    return {
        type: ADD_TODO,
        todo,
    }
}

function removeTodo (id) {
    return {
        type: REMOVE_TODO,
        id,
    }
}

export function loadTodo () {
    return {
        type: LOAD_TODO,
        todo:{
            lists: [
                  {id: 1, name: "해야할 일 01"},
                  {id: 2, name: "해야할 일 02"},
                  {id: 3, name: "해야할 일 03"},
                  {id: 4, name: "해야할 일 04"},
                  {id: 5, name: "해야할 일 05"},
                  {id: 6, name: "해야할 일 06"},
                  {id: 7, name: "해야할 일 07"},
                  {id: 8, name: "해야할 일 08"},
                  {id: 8, name: "해야할 일 09"},
            ],
        }
    }
}
