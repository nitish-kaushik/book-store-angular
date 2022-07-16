import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsAddressComponent } from './components/authors-address/authors-address.component';
@NgModule({
  declarations: [NotFoundComponent, ToolbarComponent, FooterComponent, AuthorsComponent, AuthorsAddressComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [ToolbarComponent, FooterComponent, MaterialModule, AuthorsComponent, AuthorsAddressComponent]
})
export class SharedModule { }
