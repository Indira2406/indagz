import { combineReducers, createStore } from "redux";
import { todolistsReducer } from "./todolists-reducer";
import { tasksReducer } from "./tasks-reducer";

// type AppRootState = {
//     todolists: TodolistType[],
//     tasks: TasksStateType[],
// }

const rootReducer = combineReducers({
  todolists: todolistsReducer,
  tasks: tasksReducer,
});

export type AppRootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);


//@ts-ignore
window.store = store;
