export const taskUpdate = (task) => {
    return {
        type: 'TaskUpdate',
        task_data: task,
    }
}