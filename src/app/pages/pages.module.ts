import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
  ],
  exports: [
    PagesComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
  ]
})
export class PagesModule { }
