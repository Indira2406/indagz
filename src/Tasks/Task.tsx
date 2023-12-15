import React  from "react";
import { EditableSpan } from "../EditableSpan";
import IconButton from "@mui/material/IconButton/IconButton";
import { Delete } from "@mui/icons-material";
import {  Checkbox } from "@mui/material";
import { useTask } from "./hooks/useTask";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type TasksPropType = {
  task: TaskType;
  id: string;
};

export const Task = ({task, id}: TasksPropType) => {
  const { onClickHandler, onChangeHandler, onTitleChangeHandler } = useTask(task, id);
  
  return (
    <div key={task.id} className={task.isDone ? "is-done" : ""}>
      <Checkbox checked={task.isDone} color="primary" onChange={onChangeHandler} />

      <EditableSpan value={task.title} onChange={onTitleChangeHandler} />
      <IconButton onClick={onClickHandler}>
        <Delete />
      </IconButton>
    </div>
  );
};
