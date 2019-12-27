
export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD': 
            return [...state, action.payload]
        case 'DELETE':
            return state.filter((item) => item.id !== action.payload.id)
        default:
            return state
    }
}

export const initialState =  [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]