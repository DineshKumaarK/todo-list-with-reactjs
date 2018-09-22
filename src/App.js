import React, { Component } from "react";
import "./App.css";
import SingleTodo from "./singleTodo";

class Todo extends Component{
    state = {
      todo: [],
      currentTodo: ""
    }
    changeText = (e) =>{
      this.setState({currentTodo: e.target.value});
    }
    buttonChange = () => {
      let todoCopy = this.state.todo.slice();
      todoCopy.push(this.state.currentTodo);
      this.setState({todo: todoCopy, currentTodo: ""});
    }
    deleteTodo = (i) =>{
      let todoCopy = this.state.todo.slice();
      todoCopy.splice(i, 1);
      this.setState({todo: todoCopy});
    }
  render(){
    let {todo, currentTodo} = this.state;
    let Single = todo.map((todo, i)=>{
      return <SingleTodo todo={todo} delete={()=> this.deleteTodo(i)}/>
    });
    return (
      <div className="container">
        <div className="head">
          <h3>Todo List App</h3>
        </div>
        <div className="new-todo">
        <input value={currentTodo} onChange={this.changeText} placeholder="Enter some todo..."/>
        <button onClick={this.buttonChange}>Add!</button>
        </div>
        <div className="todo-list">
            {todo.length === 0 ? "No Todos Yet!" : <ul>{Single}</ul>}
        </div> 
      </div>
    );
  }
}
export default Todo;