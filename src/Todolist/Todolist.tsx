import React, {  useCallback } from "react";
import { FilterValuesType } from "../App";
import { AddItemForm } from "../AddItemForm/AddItemForm";
import { EditableSpan } from "../EditableSpan";
import IconButton from "@mui/material/IconButton/IconButton";
import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAC } from "../state/tasks-reducer";
import { AppRootState } from "../state/store";
import { Task } from "../Tasks/Task";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  id: string;
  title: string;
  changeFilter: (todolistId: string, value: FilterValuesType) => void;
  removeTodolist: (id: string) => void;
  changeTodolistTitle: (id: string, newTitle: string) => void;
  filter: FilterValuesType;
};

export const Todolist = React.memo((props: PropsType) => {
  const dispatch = useDispatch();

  const tasks = useSelector<AppRootState, TaskType[]>(
    (state) => state.tasks[props.id]
  );

  const removeTodolist = () => {
    props.removeTodolist(props.id);
  };
  const changeTodolistTitle = useCallback(
    (title: string) => {
      props.changeTodolistTitle(props.id, title);
    },
    [props.changeTodolistTitle, props.id]
  );

  const onAllClickHandler = useCallback(
    () => props.changeFilter(props.id, "all"),
    [props.changeFilter, props.id]
  );
  const onActiveClickHandler = useCallback(
    () => props.changeFilter(props.id, "active"),
    [props.changeFilter, props.id]
  );
  const onCompletedClickHandler = useCallback(
    () => props.changeFilter(props.id, "completed"),
    [props.changeFilter, props.id]
  );

  let allTodolistTasks = tasks;
  let tasksForTodolist = allTodolistTasks;

  if (props.filter === "active") {
    tasksForTodolist = allTodolistTasks.filter((t) => t.isDone === false);
  }
  if (props.filter === "completed") {
    tasksForTodolist = allTodolistTasks.filter((t) => t.isDone === true);
  }
  return (
    <div>
      <h3>
        <EditableSpan value={props.title} onChange={changeTodolistTitle} />
        <IconButton onClick={removeTodolist}>
          <Delete />
        </IconButton>
      </h3>
      <AddItemForm
        addItem={useCallback(
          (title) => {
            dispatch(addTaskAC(title, props.id));
          },
          [dispatch, props.id]
        )}
      />
      <div>
        {tasksForTodolist?.map((t) => (
          <Task id={props.id} task={t} />
        ))}
      </div>
      <div>
        <Button
          variant={props.filter === "all" ? "outlined" : "text"}
          onClick={onAllClickHandler}
          color={"inherit"}
        >
          All
        </Button>
        <Button
          variant={props.filter === "active" ? "outlined" : "text"}
          onClick={onActiveClickHandler}
          color={"primary"}
        >
          Active
        </Button>
        <Button
          variant={props.filter === "completed" ? "outlined" : "text"}
          onClick={onCompletedClickHandler}
          color={"secondary"}
        >
          Completed
        </Button>
      </div>
    </div>
  );
});
