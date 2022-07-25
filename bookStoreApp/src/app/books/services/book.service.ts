import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  "providedIn": "root"
})
export class BookService {

  constructor(private _httpClient: HttpClient) { }


  public addBook(bookModel: BookModel): void {

  }

  public getBooks(): void {

  }
}
