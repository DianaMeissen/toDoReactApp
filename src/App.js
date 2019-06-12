import React, {Component} from 'react'

import ToDoItem from './ToDoItem.js'
import data from './ToDoData.js'

import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            toDos: data
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updated  = prevState.toDos.map(todo => {
                if (todo.id === id) {
                    todo.isCompleted = !todo.isCompleted
                }
                return todo
            })
            return {
                toDos: updated
            }   
        })
    }

    render() {
        const todoItems = this.state.toDos.map(item => <ToDoItem key={item.id} item={item}
            handleChange={this.handleChange} />)
        return (
        <div className="todo-list">
            <h1>Some tasks to do</h1>
            <button id="settingsButton" onClick=""><i class="fa fa-cog"></i></button>
            {todoItems}
        </div>
        )
    }
}

export default App
