import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TerapiaComponent } from './terapia/terapia.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ConocenosComponent,
    ServiciosComponent,
    TerapiaComponent,
    ContactoComponent,
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
