import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './modulo/clientes/clientes.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {path: 'cliente',  component: ClientesComponent},
  {path: '', redirectTo: '/cliente', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
