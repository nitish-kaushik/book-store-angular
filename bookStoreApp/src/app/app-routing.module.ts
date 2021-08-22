import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

const routes: Routes =[
  {path:'about-us', component: AboutUsComponent},
  {path:'how-it-works', component: HowItWorksComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],

})
export class AppRoutingModule { }
