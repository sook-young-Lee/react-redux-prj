import { combineReducers } from 'redux';

import todo from './todo';
import notTodo from './notTodo';


export default combineReducers({
    todo,
    notTodo,
})