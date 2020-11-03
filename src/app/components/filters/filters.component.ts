import { Component, OnInit } from '@angular/core';
import { of, fromEvent } from 'rxjs';
import { take, map, first, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  numbers$ = of(1, 2, 3, 4, 5);
  click$ = fromEvent(document, 'click');

  constructor() { }

  ngOnInit(): void {
    // this.takeOperatorFilter();
    // this.takeOperatorFromevent();
    // this.firstOperatorFilter();
    this.takeWhileOperatorFilter();
  }

  //using take to filter streams
  takeOperatorFilter() {
    this.numbers$.pipe(
      take(3)
    ).
      subscribe({
      next: console.log,
      complete: () => console.log('complete!')
    })
  }

  takeOperatorFromevent() {
    this.click$.pipe(
      map(event => ({
        'x-coordinate': event.clientX,
        'y-coordinate': event.clientY
      })),
      take(5)
    ).subscribe({
      next: (event => { console.log(event); console.log('clicked!')}),
      complete: () => console.log('complete!')
    })
  }

  firstOperatorFilter() {
    this.click$.pipe(
      map(event => ({
        x: event.clientX
      })),
      first(({x}) => x > 200)
    ).subscribe({
      next: console.log,
      complete: () => console.log('complete!')
    })
  }

  //takeWhile operator accepts second parameter as boolean,
  //if this is set to true then it will emit the last event
  //that satisfies the condition inside takeWhile operator
  takeWhileOperatorFilter() {
    this.click$.pipe(
      map(event => ({
        xcoordinate: event.clientX,
        ycoordinate: event.clientY
      })),
      takeWhile(({xcoordinate}) => xcoordinate > 250, true)
    ).subscribe({
      next: console.log,
      complete: () => console.log('complete!')
    })
    
  }

}
