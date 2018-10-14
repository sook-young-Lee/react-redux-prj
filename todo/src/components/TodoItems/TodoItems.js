import React, { Component } from 'react';

class TodoItems extends Component {

    constructor(props){
        super(props);

        this.state = {
             name: this.props.children,
        };
   }

    render() {

        const {onRemove,onUpdate, childrenId} = this.props;

        const changeName = (e) => {
            this.setState({
                [e.target.name]:e.target.value
            })
        }

        return(
            <div>
                 <input type="text" value={this.state.name} onChange={changeName} name="name"/>
                 <button onClick={() => onUpdate(childrenId, this.state.name)}>[수정]</button>
                 <button onClick={onRemove}>[지우기]</button>
             </div>
        )
    }
}

export default TodoItems;