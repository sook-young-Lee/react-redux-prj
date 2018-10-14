import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput/TodoInput';
import { BrowserRouter as Route, Link, Router } from 'react-router-dom';
import Todo from './Todo';
import NotTodo from './NotTodo';
import {loadTodo
} from '../actions/todo'
import { connect } from 'react-redux';

class App extends Component {

  // state = {
  //     lists: [
  //           {id: 1, name: "해야할 일 01", type:"todo"},
  //           {id: 2, name: "해야할 일 02", type:"notTodo"},
  //           {id: 3, name: "해야할 일 03", type:"todo"},
  //           {id: 4, name: "해야할 일 04", type:"notTodo"},
  //           {id: 5, name: "해야할 일 05", type:"todo"},
  //           {id: 6, name: "해야할 일 06", type:"notTodo"},
  //           {id: 7, name: "해야할 일 07", type:"todo"},
  //           {id: 8, name: "해야할 일 08", type:"notTodo"},
  //     ],
  //     item: '',
  // }

  componentWillMount() {
    const {dispatch} = this.props;
    alert('dispatch')
    dispatch(loadTodo())
  }

  getId = () => {
    let {lists} = this.state;
    let idVal = lists[lists.length -1].id;
    return ++idVal;
  }

  onClickAddBtn = (t) => {
    let { item, lists } = this.state;

    const newArray = {
      id: this.getId(),
      name: item,
      type: t,
    };
    
    console.log(newArray);

    this.setState({
      lists: [...lists, newArray],
      item: ''
    })
  }

  handleChange = (e) => {
    const {value} = e.target;
    this.setState({
      item: value
    })
 }

 handleRemove = (id) => {
  this.setState((currentstate) => ({
    lists: currentstate.lists.filter(todo => {
      return todo.id !== id;
    })
  }))
 }

 handleUpdateItem = (id, data) => {
   this.setState((currentstate) => ({
     lists: currentstate.lists.map(todo => {
       if(todo.id === id){
        todo.name = data
       }
       console.log(todo);
       return todo;
     })
   }))
 }

  render() {

    const {handleChange,onClickAddBtn,handleRemove, handleUpdateItem} = this;
    const {item, lists} = this.state;

    return (
      <Router>

      </Router>
    );
  }
}

function mapStateToProps({state}) {
  return {
      state: state
  }
}
export default connect(mapStateToProps)(Todo);

