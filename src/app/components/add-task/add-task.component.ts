import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UIService } from 'src/app/services/ui.service';

import { Task } from '../../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  task:Task = {
    text: '',
    day: '',
    reminder: false
  }
  subscription: Subscription
  showAddtask: boolean = false;

  constructor(private uiService: UIService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddtask = value))
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.onAddTask.emit(this.task)
    this.task = {
      text: '',
      day: '',
      reminder: false
    }
  }
}
