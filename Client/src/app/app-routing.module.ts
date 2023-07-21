import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CrearUserComponent } from './components/crear-user/crear-user.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'iniciar-sesion'},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'crear-usuario', component:CrearUserComponent},
  {path:'perfil/:id', component:PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
