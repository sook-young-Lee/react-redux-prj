import React, {Component} from 'react';
import List from './List';
import { connect } from 'react-redux';

class Todo extends Component {
    render() {

        const {onRemove, onUpdate, todo, type} = this.props;

        return(
            <div>
                <h1>Todo List</h1>
                <List lists={todo.lists} onRemove={onRemove} onUpdate={onUpdate} type={type}/>
            </div>
        )
    }
}

function mapStateToProps({state}) {
    return {
        todo: state.todo
    }
}

export default connect(mapStateToProps)(Todo);