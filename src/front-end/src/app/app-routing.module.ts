import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes para Admin
import { AdminComponent } from './components/Admin/admin/admin.component'


const routes: Routes = [
  //rutas para admin
  { path: '', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
