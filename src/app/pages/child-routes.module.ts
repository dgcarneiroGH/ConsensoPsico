import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//Guards
// import { AdminGuard } from './../guards/admin.guard';
//Components
import { HomeComponent } from './home/home.component';

const childRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
