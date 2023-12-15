import React, { useEffect, useState } from "react";
import { tasksAPI } from "../api/task-api";

export default {
  title: "API",
};

export const GetTasks = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistId = "f49c47bf-1eae-423b-bed5-e4ec2f98c166";
    tasksAPI.getTasks(todolistId).then((res) => {
      setState(res.data);
    });
  }, []);
  return <div> {JSON.stringify(state)}</div>;
};

export const CreateTasks = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistId = "f49c47bf-1eae-423b-bed5-e4ec2f98c166";
    tasksAPI.createTask(todolistId, "SOME NEW TITLE").then((res) => {
      setState(res.data);
    });
  }, []);
  return <div> {JSON.stringify(state)}</div>;
};

export const UpdateTasks = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistId = "f49c47bf-1eae-423b-bed5-e4ec2f98c166";
    const taskId = "95c7d0ad-9ec6-4a34-9ba9-2990ba4a42c0";
    const model = {
      title: "New Title",
      startDate: "",
      priority: 0,
      description: "",
      deadline: "",
      status: 0,
    };
    tasksAPI.updateTask(todolistId, taskId, model).then((res) => {
      setState(res.data);
    });
  }, []);
  return <div> {JSON.stringify(state)}</div>;
};

export const DeleteTasks = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistId = "f49c47bf-1eae-423b-bed5-e4ec2f98c166";
    const taskId = "a0ac80ad-1f4a-4ae9-9538-b755be4f5a55";
    tasksAPI.deleteTask(todolistId, taskId).then((res) => {
      setState(res.data);
    });
  }, []);
  return <div> {JSON.stringify(state)}</div>;
};
