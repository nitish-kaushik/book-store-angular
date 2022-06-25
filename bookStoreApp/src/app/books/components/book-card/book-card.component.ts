import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input('allBooks')
  get books(): BookModel[] {
    return this._books;
  }
  set books(books: BookModel[]) {
    books.map(x => x.title = 'Title: ' + x.title);
    this._books = books;
  }

  private _books: BookModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
