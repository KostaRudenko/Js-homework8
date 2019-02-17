import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import { addTodo, deleteTodo, togleTodo } from './redux/actions/actionsTodo';

class TodoList extends Component {
    addTodo = () => {
        if (this.inputValue.value !== '') {
            let inputValue = this.inputValue.value;

            this.props.dispatch(addTodo(inputValue))
            this.inputValue.value = '';
        }
    };
    deleteTodo = (id) =>  this.props.dispatch(deleteTodo(id));
    togleTodo = (id) => this.props.dispatch(togleTodo(id));

    render() {
        
        const { todo } = this.props;

        return (
            <div>
                <div className='todoInputWrap'>
                    <input className='todoInput'  ref={(node) => {this.inputValue = node}} />
                    <button className='addTodoBtn' onClick={this.addTodo}>Add new</button>
                </div>
                <ul className='todoList'>
                    {
                        todo.map((item) => {
                            return (
                                 <li className='todoItem' key={item.id}>
                                    <span style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.title}</span>
                                    <button onClick={() => this.togleTodo(item.id)}>done</button>
                                    <button onClick={() => this.deleteTodo(item.id)}>X</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ todo }) => {
    return { todo }
};
export default connect(mapStateToProps)(TodoList);