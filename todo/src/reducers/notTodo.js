export default function todo (state=[], action) {
    switch(action.type) {
        // case ADD_TODO:
        //     return state.concat([action.todo])
        // case REMOVE_TODO:
        //     return state.filter((todo)=> todo.id !== action.id)
        // case RECEIVE_DATA:
        //     return action.todo
        default:
            return state
    }
}