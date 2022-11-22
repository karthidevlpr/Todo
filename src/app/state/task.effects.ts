import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from "@ngrx/effects";
import {mergeMap, map, catchError} from "rxjs/operators";
import { TaskService } from "../services/task.service";

@Injectable()

export class TaskEffect {
    constructor (private actions$: Actions, private taskService: TaskService) {}

    loadTask$ = createEffect(() => this.actions$.pipe(ofType('[tasks component] getTask'),
        mergeMap(() => this.taskService.getTasks()
            .pipe(map(tasks => ({ type: '[tasks component] loadTask', payload: tasks })))
        ))
    )
}