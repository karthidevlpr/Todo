import { Component, OnInit } from '@angular/core';
import {TASKS} from '../../mock-tasks'
import {Task} from '../../task'
import { TaskService } from 'src/app/services/task.service';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/state/task.reducer';
import { state } from '@angular/animations';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  
  // tasks!:Task[];
  tasks$: Observable <Task[]> = this.store.select(state => state.task.tasks);

  constructor(private taskService: TaskService, private store: Store<{ task: AppState }>) {
    // this.store.subscribe(state => this.tasks = state.task.tasks)
   }

  ngOnInit(): void {
    // this.taskService.getTasks().subscribe((data) => this.tasks = data)
    this.store.dispatch({ type: '[tasks component] getTask' });
  }

  toggleReminder(task:Task) {
    task.reminder = !task.reminder
    this.taskService.toggelReminderTask(task).subscribe()
  }

  deleteTask(task:Task) {
    this.taskService.deleteTask(task).subscribe((data) => {
      this.store.dispatch({type: '[tasks component] deleteTask', payload: task})
      // this.tasks = this.tasks.filter((t) => t.id !== task.id)
    })
  }

  addTask(task:Task) {
    this.taskService.addTask(task).subscribe((data) => {
      this.store.dispatch({type: '[tasks component] addTask', payload: data})
      // this.tasks.push(data)
    })
  }

}
