import React, { Component } from 'react'

import ToDoList from './ToDoList'
import InputField from './InputField'

import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            toDos: []
        }
        this.handleChange = this.handleChange.bind(this)

    }

    saveDataToLocalStorage = (data) => {
        localStorage.setItem('toDos', JSON.stringify(this.state.toDos))
    }

    handleChange(id) {
        this.setState(prevState => {
            const updated = prevState.toDos.map(todo => {
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

    updateItems = (newItems) => {
        this.setState({
            toDos: [...this.state.toDos, newItems]
        })
    }

    render() {
        return (
            <div>
                <h1 className="mainH1">todos</h1>
                <InputField
                    updateItems={this.updateItems} />
                {localStorage.getItem('toDos') &&
                    (<ToDoList
                        handleChange={this.handleChange}
                        updateItems={this.updateItems}
                        items={this.state.toDos} />)
                }
            </div>
        )
    }
}

export default App
