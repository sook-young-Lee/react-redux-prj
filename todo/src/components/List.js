import React, { Component } from "react";
import TodoItems from "./TodoItems/TodoItems";

class List extends Component {

    render() {
        const { lists, onRemove, onUpdate, type} = this.props;
        return(
            <div>
                <ul>
                        {
                            lists.map( item => {
                                if(item.type === type){
                                  return  <li key={item.name + '_' +item.id + item.type}>
                                    <TodoItems children={item.name} onRemove={() => onRemove(item.id)} 
                                    childrenId={item.id} onUpdate={onUpdate}/>
                                    </li>
                                }
                            })
                        }
                </ul>
            </div>
        );
    }
}

export default List;