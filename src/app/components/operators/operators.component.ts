import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { reduce, scan, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  numbers: number[] = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
    this.tapOperator();
  }

  totalReducer(accumulator, currentValue) {
    // console.log({accumulator, currentValue});
    return accumulator + currentValue;
  }

  reduceOperator() {
    from(this.numbers).pipe(
      // reduce will emit the accumulated sum of the current values
      //15
      reduce(this.totalReducer, 0))
      .subscribe(console.log);
  }

  scanOperator() {
    from(this.numbers).pipe(
      //scan on the other hand will log all of the sum of each accumulated + current values
      // 1 3 6 10 15
      scan(this.totalReducer, 0))
      .subscribe(console.log);
  }

  tapOperator() {
    const numbers$ = of(1, 2, 3, 4, 5);
    numbers$.pipe(
      tap(value => console.log('before', { value })),
      map(value => value * 10),
      tap({
        next: value => console.log('after', { value }),
        complete: () => console.log('complete!'),
        error: error => console.log('error')
      })
    ).subscribe(value => {
      console.log('subscription--', {value})
    });
  }


}
