import React, {Component} from 'react';
import List from './List';

class NotTodo extends Component {
    render() {
        const {onRemove, onUpdate, lists, type} = this.props;

        return(
            <div>
                <h1>Not Todo List</h1>
                <List lists={lists} onRemove={onRemove} onUpdate={onUpdate} type={type}/>
            </div>
        )
    }
}

export default NotTodo;