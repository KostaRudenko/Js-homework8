export const addTodo = (inputValue) => {
    return {
        type: 'ADD_TODO',
        id: Date.now(),
        inputValue
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export const togleTodo = (id) => {
    return {
        type: 'TOGLE_TODO',
        id
    }
}