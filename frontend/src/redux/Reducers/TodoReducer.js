//  write reducer for todo  state
export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'STORE_TASK':
            return [...state, action.payload]

        default:
            return [...state]
    }
}