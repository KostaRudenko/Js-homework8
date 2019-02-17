const initialState = [];

const todo = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.inputValue,
                    completed: false
                }
            ]
        case 'DELETE_TODO':
            return state.filter(item => item.id !== action.id);

        case 'TOGLE_TODO':
            return state.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item
            })
        default:
            return state
    }
}

export default todo;