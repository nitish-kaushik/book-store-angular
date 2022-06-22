import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';
import { TestService } from './test.service';

@Injectable()
export class Counter2Service extends CounterService {

  public counter: number = 0;
  constructor(private _testService: TestService) { super(); }

  public incCounter(): void {
    this.counter += 2;
  }

  public decCounter(): void {
    this.counter -= 2;
  }
}
