import { Component, OnInit } from '@angular/core';
import { increment, decrement, reset } from 'src/app/state/counter.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FeatureState, selectFeatureCount } from 'src/app/state/counter.selector';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {
  count$!: Observable<any>;
  constructor(private store: Store<FeatureState>) { 
    this.count$ = store.select('count') 
    // this.count$ = store.select(selectFeatureCount) 


  }

  ngOnInit(): void {
  }
  increment() {
    this.store.dispatch(increment())
  }
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

}
