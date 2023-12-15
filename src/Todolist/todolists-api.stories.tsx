import React, { useEffect, useState } from "react";
import { todolistsAPI } from "../api/todolist-api";

export default {
  title: "API",
};

export const GetTodolists = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    todolistsAPI.getTodolists().then((res) => {
      setState(res.data);
    });
  }, []);
  return <div> {JSON.stringify(state)}</div>;
};

export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    todolistsAPI.createTodolist("SOME NEW TITLE").then((res) => {
      setState(res.data);
    });
  }, []);
  return <div> {JSON.stringify(state)}</div>;
};

export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistId = "21fedacb-c82f-4864-99db-bdc65bab3328";
    todolistsAPI.updateTodolist(todolistId, "SOME NEW TITLE").then((res) => {
      setState(res.data);
    });
  }, []);
  return <div> {JSON.stringify(state)}</div>;
};

export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistId = "2bf38ce4-38ce-47de-a1d6-8b9b374166f3";
    todolistsAPI.deleteTodolist(todolistId).then((res) => {
      setState(res.data);
    });
  }, []);
  return <div> {JSON.stringify(state)}</div>;
};
