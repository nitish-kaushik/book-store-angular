import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookReactiveComponent } from './components/add-book-reactive/add-book-reactive.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';

const routes: Routes = [
  { path: '', component: AllBooksComponent },
  { path: 'recent', component: RecentBooksComponent },
  { path: 'new', component: AddBookComponent },
  { path: 'new-reactive', component: AddBookReactiveComponent },
  {
    path: ':id',
    component: BookDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
