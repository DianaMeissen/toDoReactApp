import React, { Component } from 'react'

const InputField = (props) => {
    return (
        <input
            className="inputStyle"
            type="text"
            placeholder="What needs to be done?"
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    const newItem = { 'task': event.target.value, 'isCompleted': false };
                    props.updateItems(newItem)
                    event.target.value = ''
                }
            }} />
    )
}

export default InputField