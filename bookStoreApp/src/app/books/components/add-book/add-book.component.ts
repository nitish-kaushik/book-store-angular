import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
  }


  saveBook(value: any): void {
    console.log(value);
    const book: BookModel = new BookModel();
    book.title = value.title;
    book.author = value.author;
    book.totalPages = value.pages;
    book.price = {
      currency: "$",
      value: value.price
    };
    book.isPublished = value.isPublished;
    this._bookService.addBook(book);
  }
}
