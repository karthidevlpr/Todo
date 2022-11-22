import { createAction, props } from "@ngrx/store";
import { Task } from "../task";

export const getTask = createAction('[tasks component] getTask')
export const loadTask = createAction('[tasks component] loadTask', props<{payload:Task[]}>())
export const deleteTask = createAction('[tasks component] deleteTask', props<{payload:Task}>())
export const addTask = createAction('[tasks component] addTask', props<{payload:Task}>())