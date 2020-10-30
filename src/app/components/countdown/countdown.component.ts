import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { filter, mapTo, scan } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  constructor() { }

  counter;
  message: string = 'Start!';

  //streams
  counters$ = interval(1000);

  ngOnInit(): void {
    this.startCounting();
  }

  startCounting() {
    this.counters$.pipe(
      mapTo(-1),
      scan((accumulator, current) => {
        return accumulator + current;
      }, 11),
      filter(value => value >= 0)
    ).subscribe((value: any) => {
      this.counter = value;
      if (!value) {
        this.message = 'Lift off!'
      }
    })
  }


}
