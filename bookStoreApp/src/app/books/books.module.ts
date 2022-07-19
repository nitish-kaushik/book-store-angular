import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { PublicRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { SharedModule } from '../shared/shared.module';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    BooksComponent,
    RecentBooksComponent,
    BookCardComponent,
    AddBookComponent,

  ],
  imports: [CommonModule, PublicRoutingModule, SharedModule, FormsModule],
})
export class BooksModule { }
