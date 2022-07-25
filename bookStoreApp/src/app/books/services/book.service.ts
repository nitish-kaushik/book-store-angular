import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../models/book.model';

@Injectable({
  "providedIn": "root"
})
export class BookService {

  constructor(private _httpClient: HttpClient) { }


  public addBook(bookModel: BookModel): Observable<BookModel> {
    return this._httpClient.post<BookModel>('https://localhost:7287/api/books', bookModel);
  }

  public getBooks(): Observable<BookModel[]> {
    return this._httpClient.get<BookModel[]>('https://localhost:7287/api/books');
  }
}
