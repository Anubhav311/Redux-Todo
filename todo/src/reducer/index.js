import { ADD_TODO_ITEM, REMOVE_TODO_ITEM, TOGGLE_COMPLETE_STATUS } from '../actions';

const initialState = {
    todoArray: [
      {task: "go to sleep", completed: false, id: 0},
      {task: "learn redux", completed: false, id: 1}
    ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return {
        ...state,
        todoArray: [
          ...state.todoArray,
          {task: action.payload, completed: false, id: Date.now()}
        ]
      }
    case REMOVE_TODO_ITEM:
      return { 

      }
    case TOGGLE_COMPLETE_STATUS:
      return {

      }    
    default:
      return state;
  }
}

export default reducer;
