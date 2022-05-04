import { taskUpdate } from '../Actions/taskUpdate'

export const taskReducer = (state = [], { action, payload }) => {
    switch (action) {
        case taskUpdate:
            return {...state, task: payload }
        default:
            return {...state, task: payload }
    }
}