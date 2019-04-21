export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export function addTodoItem(newItem) {
  return {
    type: ADD_TODO_ITEM,
    payload: newItem
  };
}

export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM';
export const removeTodoItem = todoItem => {
  return {
    type: REMOVE_TODO_ITEM,
    payload: todoItem,
  };
};

export const TOGGLE_COMPLETE_STATUS = 'TOGGLE_COMPLETE_STATUS';
export const toggleCompleteStatus = item => {
    return {
        type: TOGGLE_COMPLETE_STATUS,
        payload: {text: item.text, completed: !item.completed, id: item.id}
    }
}