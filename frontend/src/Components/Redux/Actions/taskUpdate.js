export const taskUpdate = (task) => {
    return {
        type: 'TaskUpdate',
        payload: task,
    }
}