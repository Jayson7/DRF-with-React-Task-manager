//  STORE TASK REDUCER

export default function todoReducer(state = [], action) {
    switch (action.type) {
        case 'STORE_TASK':
            return [...state, action.payload]

        default:
            return state
    }
}