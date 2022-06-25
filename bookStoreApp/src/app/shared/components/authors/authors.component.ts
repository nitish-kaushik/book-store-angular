import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
