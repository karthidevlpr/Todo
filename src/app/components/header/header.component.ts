import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = "Task Manager"
  showAddtask: boolean = false;
  subscription: Subscription

  constructor(private uiService: UIService, private router: Router) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddtask = value))
  }

  ngOnInit(): void {
  }

  handleButton(this:any): void {
    this.uiService.toggleAddtask()
  }

  hasRoute(route:string) {
    return this.router.url === route

  }

}
