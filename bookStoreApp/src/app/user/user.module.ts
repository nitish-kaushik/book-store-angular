import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddBookComponent } from './components/add-book/add-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [AddBookComponent, DeleteBookComponent, UserComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
