//Módulos
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//Componentes
import { ConocenosComponent } from './conocenos/conocenos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TerapiaComponent } from './terapia/terapia.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HomeComponent } from './home/home.component';

const childRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'conocenos', component: ConocenosComponent, data: { title: 'Conócenos' } },
  { path: 'servicios', component: ServiciosComponent, data: { title: 'Servicios' } },
  { path: 'terapia', component: TerapiaComponent, data: { title: 'Terapia' } },
  { path: 'contacto', component: ContactoComponent, data: { title: 'Contacto' } },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
