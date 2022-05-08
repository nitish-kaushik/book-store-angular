import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [NotFoundComponent, ToolbarComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule,
    MatIconModule,
    MatButtonModule],
  exports: [ToolbarComponent]
})
export class SharedModule { }
