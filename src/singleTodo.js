import React, { Component } from "react";
import "./App.css";

class SingleTodo extends Component{
    render(){
        return <li>{this.props.todo}<button onClick={this.props.delete}>X</button></li>
    }
};
export default SingleTodo;