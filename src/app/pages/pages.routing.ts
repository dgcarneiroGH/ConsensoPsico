//Módulos
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Guards
// import { AuthGuard } from './../guards/auth.guard';
//Componentes
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'home',
    component: PagesComponent,
    // canActivate: [AuthGuard],
    // canLoad:[AuthGuard],
    loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
