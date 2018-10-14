import {
    LOAD_TODO
} from '../actions/todo'

export default function todo (state=[], action) {
    switch(action.type) {
        case LOAD_TODO:
            console.log("list", action.todo)
            return action.todo
        // case REMOVE_TODO:
        //     return state.filter((todo)=> todo.id !== action.id)
        // case RECEIVE_DATA:
        //     return action.todo
        default:
            return state
    }
}