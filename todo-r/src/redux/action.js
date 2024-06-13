
export const ADD_TASK = "ADD_TASK";
 export const UPDATE_TASK = "UPDATE_TASK";
 export const DELETE_TASK = "DELETE_TASK";
 export const TOGGLE_TASK = "TOGGLE_TASK";

export function addTask(task) {
  return { type: ADD_TASK, payload: task};
}

export function updateTask(id, updatedTask) {
     return {type: UPDATE_TASK,payload: { id, updatedTask } };
}

export function deleteTask(id) {
    return { type: DELETE_TASK,payload: id  };
}

    export function toggleTask(id) {
    return { type: TOGGLE_TASK, payload: id};
}
