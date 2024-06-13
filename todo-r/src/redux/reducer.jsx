

import { ADD_TASK, UPDATE_TASK, DELETE_TASK, TOGGLE_TASK } from "./action";

const initialState = [];
let Id = 1;

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { title: action.payload, isCompleted: false, id: Id++ }];

    case UPDATE_TASK: return state.map(task => task.id === action.payload.id  ? { ...task, title: action.payload.updatedTask }  : task);

    case DELETE_TASK: return state.filter(task => task.id !== action.payload);

    case TOGGLE_TASK: return state.map(task =>   task.id === action.payload  ? { ...task, isCompleted: !task.isCompleted }  : task );

    default:
      return state;
  }
}

export default reducer;

