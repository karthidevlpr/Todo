import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'Todo-App';

  @ViewChild(HeaderComponent, { static: false }) hello!: HeaderComponent;

  ngAfterViewInit() {
     console.log("Hello ", this.hello.title);
  }

  ngOnInit(): void {
    console.log('podaaaaaa')
  }
}
