import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/services/counter.service';
import { Counter2Service } from 'src/app/shared/services/counter2.service';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']

})
export class AllBooksComponent implements OnInit {

  private _pageTitle: string;

  public set pageTitle(value: string) {
    this._pageTitle = value;
  }

  public get pageTitle() {
    return this._pageTitle;
  }

  public books: BookModel[] = [];

  constructor(public bookService: BookService, public _counterService: Counter2Service) { }

  ngOnInit(): void {
    this.pageTitle = 'All books'
    this.getAllBooks();
  }

  public increase(): void {
    this._counterService.incCounter();
  }

  public decrease(): void {
    this._counterService.decCounter();
  }

  private getAllBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => {
        this.books = books;
      });
  }
}
