import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';
import {IconButton, TextField} from "@mui/material";
import {AddBox} from "@mui/icons-material";
import { useDispatch, useSelector } from 'react-redux';
import { changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from '../../state/tasks-reducer';
import { AppRootState } from '../../state/store';
import { TaskType } from '../Todolist';
import { AddTodolistAC, ChangeTodolistFilterAC, ChangeTodolistTitleAC, RemoveTodolistAC } from '../../state/todolists-reducer';
import { FilterValuesType, TodolistType } from '../../App';




export const useTodolist = () => {
  const dispatch = useDispatch();


  const todolists = useSelector<AppRootState, Array<TodolistType>>(
    (state) => state.todolists
  );
 
  const changeFilter = useCallback((todolistId: string, value: FilterValuesType)=> {
    dispatch(ChangeTodolistFilterAC(todolistId, value));
  }, [dispatch])

  const removeTodolist = useCallback((id: string)=> {
    dispatch(RemoveTodolistAC(id));
  }, [dispatch])

  const changeTodolistTitle = useCallback((id: string, title: string) => {
    dispatch(ChangeTodolistTitleAC(id, title));
  }
, [dispatch])

  const addTodolist = useCallback((title: string) => {
    dispatch(AddTodolistAC(title))
  }, [dispatch])

    return ({
      addTodolist, changeTodolistTitle, removeTodolist, changeFilter, todolists
    })
}
