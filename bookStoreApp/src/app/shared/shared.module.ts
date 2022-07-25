import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsAddressComponent } from './components/authors-address/authors-address.component';
import { HttpClientModule } from '@angular/common/http';
import { BoolformatPipe } from './pipes/boolformat.pipe';
@NgModule({
  declarations: [NotFoundComponent, ToolbarComponent, FooterComponent, AuthorsComponent, AuthorsAddressComponent, BoolformatPipe],
  imports: [CommonModule, RouterModule, MaterialModule, HttpClientModule],
  exports: [ToolbarComponent, FooterComponent, MaterialModule, AuthorsComponent, AuthorsAddressComponent, HttpClientModule, BoolformatPipe]
})
export class SharedModule { }
