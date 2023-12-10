import React, { useCallback } from "react";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";
// import { v1 } from "uuid";
import { AddItemForm } from "./AddItemForm";
import AppBar from "@mui/material/AppBar/AppBar";
import {
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import {
  AddTodolistAC,
  ChangeTodolistFilterAC,
  ChangeTodolistTitleAC,
  RemoveTodolistAC,
} from "./state/todolists-reducer";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppRootState } from "./state/store";

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

export type TasksStateType = {
  [key: string]: Array<TaskType>;
};

function AppWithRedux() {
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

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container fixed>
        <Grid container style={{ padding: "20px" }}>
          <AddItemForm addItem={addTodolist} />
        </Grid>
        <Grid container spacing={3}>
          {todolists.map((tl) => {
            

            return (
              <Grid key={tl.id} item>
                <Paper style={{ padding: "10px" }}>
                  <Todolist
                    key={tl.id}
                    id={tl.id}
                    title={tl.title}
                    changeFilter={changeFilter}
                    filter={tl.filter}
                    removeTodolist={removeTodolist}
                    changeTodolistTitle={changeTodolistTitle}
                  />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default AppWithRedux;
