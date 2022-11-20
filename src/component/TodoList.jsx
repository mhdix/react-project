import React from 'react'

const TodoList = ({ todos, onComplectHandler, onDeleteHandler, todoComplected, setEdit }) => {
    const onEditHandler = ({ id }) => {
        const findTodo = todos.find(t => t.id === id);
        setEdit(findTodo);
    }
    if (todos.length === 0) return <div className='todo-list'>not todos here</div>
    return (
        <div className='todo-list'>
            <div className='todo-list_number'>
                <p>todo is complected</p>
                <p>{todoComplected}</p>
            </div>
            {todos.map(todo => {
                return (
                    <div className='todo-list_item' key={todo.id} >
                        <ul >
                            <li className={`todo-list_text ${todo.isComplect ? "complect" : ""}`} onClick={() => onComplectHandler(todo.id)}>{todo.text}</li>
                            <div className='todo-list_btn'>
                                <button className='complect-btn' onClick={() => onComplectHandler(todo.id)}>Complect</button>
                                <button className='edit' onClick={() => onEditHandler(todo)}>Edit</button>
                                <button className='delete' onClick={() => onDeleteHandler(todo.id)}>Delete</button>
                            </div>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList