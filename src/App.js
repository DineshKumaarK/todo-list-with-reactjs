import React, { Component } from 'react';
import SingleTodo from "./singleTodo";
class App extends Component {
  state = {
    todo: [],
    currentTodo: ""
  }
  onInputChange = e =>{
    this.setState({currentTodo: e.target.value});
  }
  onButtonClick = () =>{
    let todoCopy = this.state.todo.slice();
    todoCopy.push(this.state.currentTodo);
    this.setState({todo: todoCopy, currentTodo: ""});
  }
  deleteTodo =(i) =>{
    let todoCopy = this.state.todo.slice();
    todoCopy.splice(i,1);
    this.setState({todo: todoCopy});
  }
  render(){
    let listTodo = this.state.todo.map((todo, i)=>{
      return (
        <SingleTodo todo={todo} key={i} delete={()=>this.deleteTodo(i)}/>
      );
    });
    return (
      <div>
        <input placeholder="Enter some Todo" value={this.state.currentTodo} onChange={this.onInputChange}/>
        <button onClick={this.onButtonClick}>Add!</button>
        <br />
        {this.state.todo.length === 0 ? "No Todo's yet!" : <ul>{listTodo}</ul>}
      </div>
    )
  }
}

export default App;
