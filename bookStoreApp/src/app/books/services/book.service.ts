import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  "providedIn": "root"
})
export class BookService {

  private allBooks = [
    {
      "id": 1,
      "title": "Angular fundamentals",
      "totalPages": 453,
      "author": "Ram Singh",
      "price": {
        "currency": "INR",
        "value": 199
      }
    },
    {
      "id": 2,
      "title": "Java fundamentals",
      "totalPages": 987,
      "author": "Kishan Pal",
      "price": {
        "currency": "USD",
        "value": 19
      }
    },
    {
      "id": 3,
      "title": "The ups and downs of life",
      "totalPages": 456,
      "author": "Jay Malhotra",
      "price": {
        "currency": "INR",
        "value": 299
      }
    },
    {
      "id": 4,
      "title": "Azure walkthrough",
      "totalPages": 879,
      "author": "Pintu Verma",
      "price": {
        "currency": "INR",
        "value": 399
      }
    },
    {
      "id": 5,
      "title": "Asp.Net Core Web API",
      "totalPages": 546,
      "author": "Nagesh Khatri",
      "price": {
        "currency": "USD",
        "value": 99
      }
    },
    {
      "id": 4,
      "title": "Azure walkthrough",
      "totalPages": 879,
      "author": "Pintu Verma",
      "price": {
        "currency": "INR",
        "value": 399
      }
    },
    {
      "id": 5,
      "title": "Asp.Net Core Web API",
      "totalPages": 546,
      "author": "Nagesh Khatri",
      "price": {
        "currency": "USD",
        "value": 99
      }
    }
  ];

  constructor() { }


  public addBook(bookModel: BookModel): void {
    this.allBooks.push(bookModel);
  }

  public getBooks(): any[] {
    return this.allBooks;
  }


  public recentBooks(): any[] {
    return [
      {
        "id": 1,
        "title": "Angular fundamentals",
        "totalPages": 453,
        "author": "Ram Singh",
        "price": {
          "currency": "INR",
          "value": 199
        }
      },
      {
        "id": 2,
        "title": "Java fundamentals",
        "totalPages": 987,
        "author": "Kishan Pal",
        "price": {
          "currency": "USD",
          "value": 19
        }
      },
    ];
  }
}
