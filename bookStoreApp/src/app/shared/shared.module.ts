import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MaterialModule } from './material.module';
@NgModule({
  declarations: [NotFoundComponent, ToolbarComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [ToolbarComponent]
})
export class SharedModule { }
