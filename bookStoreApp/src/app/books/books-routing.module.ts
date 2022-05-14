import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksComponent } from './books.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    children: [
      { path: '', redirectTo: 'all-books', pathMatch: 'full' },
      { path: 'all-books', component: AllBooksComponent },
      {
        path: 'book-details/:id/author/:authorId',
        component: BookDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
