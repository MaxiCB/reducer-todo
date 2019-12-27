
export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD': 
            return [...state, action.payload]
        default:
            return state
    }
}

export const initialState =  [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]