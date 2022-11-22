import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import {Task} from '../../task'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task!:Task
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()


  faTimes = faTimes

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(task:Task) {
    this.onToggleReminder.emit(task)
  }

  onDelete(task:Task) {
    this.onDeleteTask.emit(task)
  }

}
