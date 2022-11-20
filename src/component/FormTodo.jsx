import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FormTodo = ({ todos, setTodos, edit, setEdit }) => {
    const [input, setInput] = useState("");
    const inputFocus = useRef();


    useEffect(() => {
        inputFocus.current.focus();
    })
    const updateTodo = (id, text, isComplect) => {
        const newTodo = todos.map(todo => todo.id === id ? { id, text, isComplect } : todo)
        setTodos(newTodo)
        setEdit("")
    }

    useEffect(() => {
        if (edit) {
            setInput(edit.text)
        } else {
            setInput("")
        }
    }, [setInput, edit])


    const inputChangeHandler = (e) => {
        setInput(e.target.value)
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (input === "") {
            alert("please enter your todo !")
            return
        } else {
            if (!edit) {
                setTodos([...todos, { id: uuidv4(), text: input, isComplect: false }])
                setInput("")
            } else {
                updateTodo(edit.id, input, edit.isComplect)
            }
        }
    }
    return (
        <div className='todo-form'>
            <form onSubmit={formSubmitHandler}>
                <input type="text" onChange={inputChangeHandler} value={input} ref={inputFocus} />
                <button className='add' type="submit">Add</button>
            </form>
        </div>
    )
}

export default FormTodo