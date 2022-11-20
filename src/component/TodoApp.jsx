import { useEffect, useState } from "react"
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";


const getLocalStorage = () => {
    let todos = localStorage.getItem('todos')
    console.log(todos)
    if (todos) {
        return JSON.parse(localStorage.getItem("todos"))
    } else {
        return []
    }
}

const TodoApp = () => {
    const [todos, setTodos] = useState(getLocalStorage())
    const [edit, setEdit] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const onComplectHandler = (id) => {
        const index = todos.findIndex(t => t.id === id);
        const selectTodo = { ...todos[index] };
        selectTodo.isComplect = !selectTodo.isComplect

        const updateTodo = [...todos];
        updateTodo[index] = selectTodo

        setTodos(updateTodo)
    }
    const onDeleteHandler = (id) => {
        const filterTodo = todos.filter(t => t.id !== id);
        setTodos(filterTodo)
    }
    return (
        <div>
            <FormTodo
                todos={todos}
                setTodos={setTodos}
                edit={edit}
                setEdit={setEdit} />

            <TodoList todos={todos}
                edit={edit}
                setEdit={setEdit}
                todoComplected={todos.filter(t => t.isComplect).length}
                setTodos={setTodos} onComplectHandler={onComplectHandler}
                onDeleteHandler={onDeleteHandler} />
        </div>
    )
}

export default TodoApp