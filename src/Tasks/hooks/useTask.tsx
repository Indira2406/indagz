import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';
import {IconButton, TextField} from "@mui/material";
import {AddBox} from "@mui/icons-material";
import { useDispatch } from 'react-redux';
import { changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from '../../state/tasks-reducer';
import { TaskType } from '../Task';




export const useTask = (task: TaskType, id: string) => {
    const dispatch = useDispatch();

    const onClickHandler = useCallback(() => dispatch(removeTaskAC(task.id, id)), [dispatch, id, task.id]);
    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      let newIsDoneValue = e.currentTarget.checked;
      dispatch(changeTaskStatusAC(task.id, newIsDoneValue, id));
    }, [ dispatch, task.id, id ]);
    const onTitleChangeHandler = useCallback((newValue: string) => {
      dispatch(changeTaskTitleAC(task.id, newValue, id));
    }, [dispatch, task.id, id]);
  

    return ({
        onClickHandler, onChangeHandler, onTitleChangeHandler
    })
}
