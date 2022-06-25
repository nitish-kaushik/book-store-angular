import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  @Input()
  data: number;

  @Input()
  showAuthors: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
