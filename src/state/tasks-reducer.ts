import { v1 } from "uuid";
import { TasksStateType } from "../App";
import {
  AddTodolistActionType,
  RemoveTodolistActionType,
} from "./todolists-reducer";

export let todolistId1 = v1();
export let todolistId2 = v1();

const initialState: TasksStateType = {};

export const tasksReducer = (state: TasksStateType = initialState, action: tsarType) => {
  switch (action.type) {
    case "REMOVE-TASK": {
      return {
        ...state,
        [action.todolistId]: state[action.todolistId].filter(
          (t) => t.id !== action.id
        ),
      };
    }
    case "ADD-TASK": {
      let task = { id: v1(), title: action.title, isDone: false };
      return {
        ...state,
        [action.todolistId]: [task, ...state[action.todolistId]],
      };
    }
    case "CHANGE-STATUS": {
      return {
        ...state,
        [action.todolistId]: state[action.todolistId].map((el) =>
          el.id === action.id ? { ...el, isDone: action.isDone } : el
        ),
      };
    }
    case "CHANGE-TASK-TITLE": {
      return {
        ...state,
        [action.todolistId]: state[action.todolistId].map((el) =>
          el.id === action.id ? { ...el, title: action.newTitle } : el
        ),
      };
    }
    case 'ADD-TODOLIST': {
      const stateCopy = {...state};

      stateCopy[action.todolistId] = [];

      return stateCopy;
  }
    case "REMOVE-TODOLIST": {
      delete state[action.id];
      return { ...state };

    }
    default:
      return state;
  }
};

type tsarType =
  | removeTaskACType
  | addTaskACType
  | changeStatusACType
  | changeTaskTitleACType
  | removeTodolistACType
  | AddTodolistActionType
  | RemoveTodolistActionType;

type removeTaskACType = ReturnType<typeof removeTaskAC>;
export const removeTaskAC = (id: string, todolistId: string) => {
  return {
    type: "REMOVE-TASK",
    id,
    todolistId,
  } as const;
};

type addTaskACType = ReturnType<typeof addTaskAC>;

export const addTaskAC = (title: string, todolistId: string) => {
  return {
    type: "ADD-TASK",
    title,
    todolistId,
  } as const;
};

type changeStatusACType = ReturnType<typeof changeTaskStatusAC>;

export const changeTaskStatusAC = (
  id: string,
  isDone: boolean,
  todolistId: string
) => {
  return {
    type: "CHANGE-STATUS",
    id,
    isDone,
    todolistId,
  } as const;
};

type changeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>;

export const changeTaskTitleAC = (
  id: string,
  newTitle: string,
  todolistId: string
) => {
  return {
    type: "CHANGE-TASK-TITLE",
    id,
    newTitle,
    todolistId,
  } as const;
};

type removeTodolistACType = ReturnType<typeof removeTodolistInTasksAC>;

export const removeTodolistInTasksAC = (id: string) => {
  return {
    type: "REMOVE-TODOLIST",
    id,
  } as const;
};
