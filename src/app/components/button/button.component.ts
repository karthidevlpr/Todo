import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
@Input() text!:string;
@Input() color!:string;
@Input() onButtonClick!: () => void;

constructor() { }

  ngOnInit(): void {
  }

}
