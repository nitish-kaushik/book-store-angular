import { InputModalityDetector } from '@angular/cdk/a11y';
import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AuthorModel } from '../../models/authors.model';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit, OnChanges, DoCheck {

  @Input() data: number;
  @Input() data2: boolean;
  @Input() author: AuthorModel;

  constructor() {
    console.log('Hello from Child constructor');
  }

  ngDoCheck(): void {
    console.log(this.author);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('Hello from Child ngOn init');
  }

}
