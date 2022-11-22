import { createReducer, on } from "@ngrx/store";
import { addTask, deleteTask, loadTask } from "./task.actions";
import { Task } from "../task";



export interface AppState {
  tasks: Task[]
}

export const initialState: AppState = {
    tasks: []
}

export const taskReducer = createReducer(
    initialState,
    on(loadTask, (state, data) => ({...state, tasks: data.payload })),
    on(deleteTask,(state, data) => ({...state, tasks: state.tasks.filter((t: Task) => t.id !== data.payload.id)})),
    on(addTask,(state, data) => ({...state, tasks: [...state.tasks, data.payload]}))
)
