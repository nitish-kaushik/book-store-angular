import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {


  public data: number;

  public setData(value: number): void {
    this.data = value;
  }

  constructor(private _testService: TestService) { }

  public btnClick(): void {
    this._testService.myData = 'This text is from child component';
  }

  ngOnInit(): void {
  }

}
