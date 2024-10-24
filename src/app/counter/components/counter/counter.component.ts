import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public counter: number = 10;

  increment(value: number): void {
    this.counter += value;
  }
  decrement(value: number): void {
    if (this.counter > 0) {
      this.counter -= value;
    }
  }
  reset(): void {
    this.counter = 10;
  }
}
