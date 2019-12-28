
export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD': 
            return [...state, action.payload]
        case 'DELETE':
            return state.filter((item) => item.id !== action.payload.id)
        case 'COMPLETE':
            let temp = state.filter(item => item.id === action.payload.id);
            let filtered = state.filter((item) => item.id !== action.payload.id);
            // console.log(...state);
            // console.log(temp);
            // console.log(temp[0].completed)
            // console.log(filtered);
            temp[0].completed = !temp[0].completed;
            // console.log(temp)
            return [...filtered, ...temp]
        default:
            return state
    }
}

export const initialState =  [{
    item: 'Learn about reducers',
    completed: true,
    due: new Date(),
    id: 3892987589
}]