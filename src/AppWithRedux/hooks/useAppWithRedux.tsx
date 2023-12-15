import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppRootState } from "../../state/store";
import {
    AddTodolistAC,
    ChangeTodolistFilterAC,
    ChangeTodolistTitleAC,
    RemoveTodolistAC,
  } from "../../state/todolists-reducer";
import { FilterValuesType, TodolistType } from "../AppWithRedux";
export const useAppWithRedux =()=> {
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

    return {todolists, changeFilter, removeTodolist, changeTodolistTitle, addTodolist}
}