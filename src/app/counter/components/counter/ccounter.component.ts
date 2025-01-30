import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{ counter }}</p>
    <button class="btn btn-primary" (click)="increaseBy(1)">+1</button>
    <button class="btn btn-info" (click)="reset()">Reset</button>
    <button class="btn btn-danger" (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public initialValue: number = 100;
  public counter: number = this.initialValue;

  increaseBy(value: number): void {
    this.counter += value;
  }
  reset(): void{
    this.counter = this.initialValue;
  }
}
